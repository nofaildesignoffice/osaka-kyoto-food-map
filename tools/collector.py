# Local collector: receives route scrape results from the browser and appends to JSONL.
import json, sys
from http.server import BaseHTTPRequestHandler, HTTPServer
OUT = sys.argv[1]
class H(BaseHTTPRequestHandler):
    def _cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Access-Control-Allow-Private-Network', 'true')
    def do_OPTIONS(self):
        self.send_response(204); self._cors(); self.end_headers()
    def do_POST(self):
        n = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(n).decode('utf-8')
        with open(OUT, 'a', encoding='utf-8') as f:
            f.write(json.dumps(json.loads(body), ensure_ascii=False) + '\n')
        self.send_response(200); self._cors(); self.end_headers(); self.wfile.write(b'ok')
    def do_GET(self):
        import os
        name=os.path.basename(self.path.split('?')[0])
        try: data=open(name,'rb').read()
        except Exception: self.send_response(404); self._cors(); self.end_headers(); return
        self.send_response(200); self._cors(); self.send_header('Content-Type','text/plain; charset=utf-8'); self.end_headers(); self.wfile.write(data)
    def log_message(self, *a): pass
HTTPServer(('127.0.0.1', 8765), H).serve_forever()
