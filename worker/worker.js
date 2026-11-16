// 오사카·교토 지도 공용 저장소 (Cloudflare Worker + D1)
// GET  /state          → {ranks, edits, removed, added, localEvents, nvcache, _t}
// PUT  /kv/<key>       → 키별 병합 규칙으로 저장 후 최신 값 반환
const ORIGINS = ['https://nofaildesignoffice.github.io', 'http://127.0.0.1:8766', 'http://localhost:8766'];
const KEYS = { ranks: 'mergeObj', edits: 'mergeObj', removed: 'replace', added: 'replace', localEvents: 'union', nvcache: 'perEntry' };
const MAX = 3_000_000;

const json = (o, h, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { ...h, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
const isStrArr = a => Array.isArray(a) && a.every(x => typeof x === 'string' && x.length < 200);

function validate(key, v) {
  if (key === 'ranks') return v && typeof v === 'object' && !Array.isArray(v) && Object.entries(v).every(([k, r]) => k.length < 200 && [0, 1, 2, 3].includes(r));
  if (key === 'edits') return v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length < 2000 && Object.entries(v).every(([k, e]) => k.length < 200 && e && typeof e === 'object' && !Array.isArray(e)
    && Object.entries(e).every(([f, x]) => ['type', 'group', 'emoji'].includes(f) && typeof x === 'string' && x.length < 40) && (!e.type || ['food', 'hotel', 'spot'].includes(e.type)));
  if (key === 'removed') return isStrArr(v);
  if (key === 'added') return Array.isArray(v) && v.every(x => x && typeof x === 'object' && typeof x.id === 'string' && Number.isFinite(x.lat) && Number.isFinite(x.lng));
  if (key === 'localEvents') return Array.isArray(v) && v.every(x => x && typeof x === 'object' && typeof x.id === 'string');
  if (key === 'nvcache') return v && typeof v === 'object' && !Array.isArray(v) && Object.values(v).every(e => e && typeof e.at === 'string' && Array.isArray(e.routes));
  return false;
}

async function getKV(db, k) { const r = await db.prepare('SELECT v FROM kv WHERE k=?').bind(k).first(); return r ? JSON.parse(r.v) : null; }
async function putKV(db, k, v) { await db.prepare('INSERT INTO kv(k,v,t) VALUES(?,?,?) ON CONFLICT(k) DO UPDATE SET v=excluded.v, t=excluded.t').bind(k, JSON.stringify(v), Date.now()).run(); }

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const cors = { 'Access-Control-Allow-Origin': ORIGINS.includes(origin) ? origin : ORIGINS[0], 'Access-Control-Allow-Methods': 'GET,PUT,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400', Vary: 'Origin' };
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    const url = new URL(req.url), db = env.DB;
    try {
      if (req.method === 'GET' && url.pathname === '/state') {
        const out = {};
        const { results } = await db.prepare('SELECT k,v,t FROM kv').all();
        let t = 0; for (const r of results) { out[r.k] = JSON.parse(r.v); t = Math.max(t, r.t); }
        const nv = await db.prepare('SELECT k,v,t FROM nv').all();
        out.nvcache = {}; for (const r of nv.results) { out.nvcache[r.k] = JSON.parse(r.v); t = Math.max(t, r.t); }
        out._t = t;
        return json(out, cors);
      }
      // 노선 모양(NAVITIME GeoJSON) — 구간별로 따로 저장 (state 응답을 가볍게)
      const sm = url.pathname.match(/^\/shape\/([\w|.%-]{3,300})$/);
      if (sm && req.method === 'GET') {
        const r = await db.prepare('SELECT v FROM shp WHERE k=?').bind(decodeURIComponent(sm[1])).first();
        return r ? new Response(r.v, { headers: { ...cors, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } }) : json({ none: true }, cors, 404);
      }
      if (sm && req.method === 'PUT') {
        if (!ORIGINS.includes(origin)) return json({ error: 'forbidden' }, cors, 403);
        const body = await req.text(); if (body.length > 1_500_000) return json({ error: 'too large' }, cors, 413);
        const v = JSON.parse(body); if (!Array.isArray(v)) return json({ error: 'invalid' }, cors, 400);
        await db.prepare('INSERT INTO shp(k,v,t) VALUES(?,?,?) ON CONFLICT(k) DO UPDATE SET v=excluded.v, t=excluded.t').bind(decodeURIComponent(sm[1]), body, Date.now()).run();
        return json({ ok: true }, cors);
      }
      const m = url.pathname.match(/^\/kv\/(\w+)$/);
      if (req.method === 'PUT' && m && KEYS[m[1]]) {
        if (!ORIGINS.includes(origin)) return json({ error: 'forbidden' }, cors, 403);
        const body = await req.text(); if (body.length > MAX) return json({ error: 'too large' }, cors, 413);
        const key = m[1], v = JSON.parse(body);
        if (!validate(key, v)) return json({ error: 'invalid' }, cors, 400);
        const rule = KEYS[key];
        if (rule === 'perEntry') {
          const stmts = [];
          for (const [k, e] of Object.entries(v)) {
            if (k.length > 300) continue;
            stmts.push(db.prepare('INSERT INTO nv(k,v,at,t) VALUES(?,?,?,?) ON CONFLICT(k) DO UPDATE SET v=excluded.v, at=excluded.at, t=excluded.t WHERE excluded.at > nv.at').bind(k, JSON.stringify(e), e.at, Date.now()));
          }
          for (let i = 0; i < stmts.length; i += 50) await db.batch(stmts.slice(i, i + 50));
          return json({ ok: true, n: stmts.length }, cors);
        }
        const cur = await getKV(db, key);
        let next = v;
        if (rule === 'mergeObj') next = { ...(cur || {}), ...v };
        if (rule === 'union') { const seen = new Map(); [...(cur || []), ...v].forEach(x => seen.set(x.id, x)); next = [...seen.values()].sort((a, b) => String(a.at || '').localeCompare(String(b.at || ''))).slice(-300); }
        await putKV(db, key, next);
        return json({ ok: true, value: next }, cors);
      }
      return json({ error: 'not found' }, cors, 404);
    } catch (e) { return json({ error: String(e && e.message || e) }, cors, 500); }
  }
};
