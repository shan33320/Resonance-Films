'use strict';
const pages=document.querySelector('#pages');
const field=document.querySelector('#page-number');
const chapter=document.querySelector('#chapter');
const zoom=document.querySelector('#zoom');
const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){const img=e.target;if(!img.getAttribute('src'))img.src=img.dataset.src;observer.unobserve(img);}}},{rootMargin:'900px 0px'});
for(let n=1;n<=40;n++){
  const file=`page-${String(n).padStart(2,'0')}.png`;
  const figure=document.createElement('figure');figure.id=`p${n}`;
  const link=document.createElement('a');link.href=file;link.target='_blank';link.rel='noopener';link.setAttribute('aria-label',`開啟第 ${n} 頁原圖`);
  const img=document.createElement('img');img.alt=`洪佩珊作品集 第 ${n} 頁`;img.width=2481;img.height=3509;img.decoding='async';img.dataset.src=file;if(n===1)img.src=file;else observer.observe(img);
  const caption=document.createElement('figcaption');caption.textContent=`${String(n).padStart(2,'0')} / 40`;
  link.append(img);figure.append(link,caption);pages.append(figure);
}
function go(n){n=Math.max(1,Math.min(40,Number(n)||1));const el=document.querySelector(`#p${n}`);const img=el.querySelector('img');if(!img.getAttribute('src'))img.src=img.dataset.src;el.scrollIntoView();field.value=n;history.replaceState(null,'',`#p${n}`);}
chapter.addEventListener('change',()=>go(chapter.value));
field.addEventListener('change',()=>go(field.value));
field.addEventListener('keydown',e=>{if(e.key==='Enter')go(field.value);});
zoom.addEventListener('click',()=>{const enabled=document.body.classList.toggle('zoomed');zoom.textContent=enabled?'符合頁寬':'放大閱讀';zoom.setAttribute('aria-pressed',String(enabled));});
let pending=false;window.addEventListener('scroll',()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{for(const f of pages.children){const r=f.getBoundingClientRect();if(r.bottom>150){field.value=f.id.slice(1);break;}}pending=false;});},{passive:true});
if(/^#p\d+$/.test(location.hash))requestAnimationFrame(()=>go(location.hash.slice(2)));
