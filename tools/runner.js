// Runs inside a www.google.com/maps tab. Loads each directions URL in a same-origin iframe,
// captures the visible directions panel text (summary + first-option details) and posts it to the local collector.
window.__runJobs = async function(jobs){
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  window.__status={done:0,total:jobs.length,errors:[]};
  const mainText=d=>(d&&d.querySelector('div[role=main]')?.innerText)||'';
  for(const j of jobs){
    if(window.__stop) break;
    let f;
    try{
      f=document.createElement('iframe'); f.style.cssText='position:fixed;left:0;top:0;width:900px;height:700px;z-index:99999;background:#fff';
      f.src=`https://www.google.com/maps/dir/?api=1&origin=${j.ol}&destination=${j.dl}&travelmode=${j.m}&hl=ko`;
      document.body.appendChild(f);
      let prev='',stable=0,summary='';
      for(let i=0;i<50;i++){await sleep(300); const t=mainText(f.contentDocument);
        if(/\d+분/.test(t)&&(t.includes('세부정보')||j.m==='walking')){ if(t===prev){if(++stable>=3){summary=t;break;}} else stable=0; prev=t; } }
      if(!summary) summary=mainText(f.contentDocument);
      let detail='';
      if(j.m==='transit'){const b=[...f.contentDocument.querySelectorAll('button')].find(b=>b.innerText.trim()==='세부정보');
        if(b){b.click(); for(let i=0;i<30&&!/요금:|Jorudan|대중교통 데이터/.test(mainText(f.contentDocument));i++) await sleep(250); await sleep(400); detail=mainText(f.contentDocument);}}
      await fetch('http://127.0.0.1:8765/save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({o:j.o,d:j.d,mode:j.m,at:new Date().toISOString(),summary,detail})});
    }catch(e){window.__status.errors.push(j.o+'>'+j.d+' '+e)}
    try{f&&f.remove()}catch(e){}
    window.__status.done++;
  }
};
