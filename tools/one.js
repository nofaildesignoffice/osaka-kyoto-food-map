// Executed in a Google Maps directions page (top-level). Identifies the job from the URL, captures panel text, posts to collector.
(async()=>{
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  const mainText=()=>document.querySelector('div[role=main]')?.innerText||'';
  for(let i=0;i<40&&!/\/maps\/dir\/[\d.]+,[\d.]+\/[\d.]+,[\d.]+/.test(location.pathname);i++) await sleep(250);
  const m=location.pathname.match(/\/maps\/dir\/([\d.]+),([\d.]+)\/([\d.]+),([\d.]+)/);
  const mode=/!3e2/.test(location.href)?'walking':(/!3e3/.test(location.href)?'transit':(window.__mode||'?'));
  const places=await fetch('http://127.0.0.1:8765/places.json').then(r=>r.json());
  const near=(la,ln)=>places.find(p=>Math.abs(p.lat-la)<1e-5&&Math.abs(p.lng-ln)<1e-5);
  const o=m&&near(+m[1],+m[2]), d=m&&near(+m[3],+m[4]);
  let prev='',stable=0,summary='';
  for(let i=0;i<50;i++){await sleep(300); const t=mainText();
    if(/\d+분/.test(t)&&t.includes('세부정보')){ if(t===prev){if(++stable>=3){summary=t;break;}} else stable=0; prev=t; } }
  if(!summary) summary=mainText();
  let detail='';
  if(mode==='transit'){const b=[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='세부정보');
    if(b){b.click(); for(let i=0;i<30&&!/요금:|대중교통 데이터|도보 경로가 실제 상황과/.test(mainText());i++) await sleep(250); await sleep(400); detail=mainText();}}
  const res=await fetch('http://127.0.0.1:8765/save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({o:o&&o.id,d:d&&d.id,mode,at:new Date().toISOString(),summary,detail})}).then(r=>r.text()).catch(e=>'ERR');
  window.__oneResult=(o&&o.id)+'>'+(d&&d.id)+' '+mode+' s='+summary.length+' d='+detail.length+' '+res;
})();
