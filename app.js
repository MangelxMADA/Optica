'use strict';
/* ═══ OPTICA SPA ═══ */

// ─── Theme Toggle ───
function initTheme(){
const saved=localStorage.getItem('optica-theme')||'dark';
document.documentElement.setAttribute('data-theme',saved);
const btn=document.getElementById('theme-toggle');
if(btn)btn.addEventListener('click',()=>{
const curr=document.documentElement.getAttribute('data-theme');
const next=curr==='dark'?'light':'dark';
document.documentElement.setAttribute('data-theme',next);
localStorage.setItem('optica-theme',next);})}

// ─── Background Canvas ───
function initBg(){
const c=document.getElementById('bg-canvas');if(!c)return;
const x=c.getContext('2d');let w,h,pts=[];
function resize(){w=c.width=innerWidth;h=c.height=innerHeight;pts=[];
for(let i=0;i<50;i++)pts.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+.4,dx:(Math.random()-.5)*.25,dy:(Math.random()-.5)*.25,hue:Math.random()*60+170})}
resize();addEventListener('resize',resize);
(function draw(){
const isDark=document.documentElement.getAttribute('data-theme')==='dark';
if(isDark){
  x.fillStyle='rgba(10,14,26,0.12)';x.fillRect(0,0,w,h);
  pts.forEach(p=>{p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>w)p.dx*=-1;if(p.y<0||p.y>h)p.dy*=-1;
  x.beginPath();x.arc(p.x,p.y,p.r,0,Math.PI*2);x.fillStyle=`hsla(${p.hue},70%,60%,0.4)`;x.fill()});
}else{
  x.fillStyle='rgba(240,242,245,0.25)';x.fillRect(0,0,w,h);
  x.lineWidth=1;
  pts.forEach((p,i)=>{
    p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>w)p.dx*=-1;if(p.y<0||p.y>h)p.dy*=-1;
    x.beginPath();x.arc(p.x,p.y,p.r*1.5,0,Math.PI*2);x.fillStyle=`hsla(${p.hue},80%,45%,0.3)`;x.fill();
    for(let j=i+1;j<pts.length;j++){
      const d=Math.hypot(p.x-pts[j].x,p.y-pts[j].y);
      if(d<110){
        x.beginPath();x.moveTo(p.x,p.y);x.lineTo(pts[j].x,pts[j].y);
        x.strokeStyle=`hsla(${p.hue},80%,45%,${(110-d)/500})`;x.stroke();
      }
    }
  });
}
requestAnimationFrame(draw)})()}

// ─── Navigation ───
const sections=['inicio','tema-1','tema-2','tema-3','tema-4','tema-5','materiales','sobre-nosotros'];
function navigate(id){
document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
const el=document.getElementById(id);if(el){el.classList.add('active');window.scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('.side-menu nav a').forEach(a=>a.classList.toggle('active',a.dataset.target===id));
closeMenu();
// Re-render math
if(typeof renderMathInElement==='function'){
renderMathInElement(el,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false})}}
function closeMenu(){document.querySelector('.side-menu')?.classList.remove('open');document.querySelector('.menu-overlay')?.classList.remove('active');document.querySelector('.hamburger')?.classList.remove('active')}

// ─── File Modal ───
window.openFileModal = function(type, url, title) {
  const modal = document.getElementById('file-modal');
  if(!modal) return;
  document.getElementById('file-modal-title').textContent = title;
  const iframe = document.getElementById('file-iframe');
  const texView = document.getElementById('file-tex');
  const texCode = document.getElementById('file-tex-code');
  
  if(type === 'pdf') {
    texView.style.display = 'none';
    iframe.style.display = 'block';
    iframe.src = url;
  } else if(type === 'tex') {
    iframe.style.display = 'none';
    texView.style.display = 'block';
    texCode.textContent = "Cargando código LaTeX...";
    fetch(url).then(r=>r.text()).then(t=>{texCode.textContent = t;}).catch(e=>{texCode.textContent="Error al cargar el archivo.";});
  }
  modal.classList.add('active');
};
window.closeFileModal = function() {
  const modal = document.getElementById('file-modal');
  if(modal) modal.classList.remove('active');
  const iframe = document.getElementById('file-iframe');
  if(iframe) iframe.src = "";
};

// ─── Simulation Fullscreen (Modal-like) ───
window.toggleSimFullscreen = function(btn) {
  const container = btn.parentElement;
  let overlay = document.getElementById('sim-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sim-overlay';
    overlay.className = 'sim-overlay';
    overlay.onclick = window.closeSimFullscreen;
    document.body.appendChild(overlay);
  }
  
  if (!container.classList.contains('sim-fullscreen')) {
    container.classList.add('sim-fullscreen');
    overlay.classList.add('active');
    btn.innerHTML = '<i class="fas fa-compress"></i> Reducir';
    overlay.activeSimContainer = container;
  } else {
    window.closeSimFullscreen();
  }
};

window.closeSimFullscreen = function() {
  const overlay = document.getElementById('sim-overlay');
  if (overlay && overlay.activeSimContainer) {
    overlay.activeSimContainer.classList.remove('sim-fullscreen');
    const btn = overlay.activeSimContainer.querySelector('.expand-btn');
    if (btn) btn.innerHTML = '<i class="fas fa-expand"></i> Ampliar';
    overlay.classList.remove('active');
    overlay.activeSimContainer = null;
  }
};

// ─── Equation Link Handler ───
function initEqLinks(){
document.querySelectorAll('.data-table a[href^="#eq-"],.data-table a[href^="#t"]').forEach(a=>{
a.addEventListener('click',e=>{e.preventDefault();
const id=a.getAttribute('href').slice(1);const el=document.getElementById(id);
if(el){el.scrollIntoView({behavior:'smooth',block:'center'});
el.classList.add('eq-highlight');setTimeout(()=>el.classList.remove('eq-highlight'),2500)}})})}

// ─── Search ───
const searchIndex=[
{title:'Fundamentos de Optica Geometrica',section:'tema-1',keywords:'rayo luz onda particula geometrica'},
{title:'Naturaleza de la Luz',section:'tema-1',keywords:'corpuscular ondulatoria dual foton newton huygens'},
{title:'Teoria Electromagnetica',section:'tema-1',keywords:'maxwell espectro electromagnetico hertz'},
{title:'Naturaleza Cuantica',section:'tema-1',keywords:'foton planck einstein energia cuantica'},
{title:'Experimento de Romer',section:'tema-2',keywords:'romer jupiter io velocidad luz 1676'},
{title:'Experimento de Fizeau-Foucault',section:'tema-2',keywords:'fizeau foucault rueda espejo agua'},
{title:'Experimento de Michelson',section:'tema-2',keywords:'michelson octagonal premio nobel relatividad'},
{title:'Leyes de Snell',section:'tema-3',keywords:'snell refraccion indice seno angulo'},
{title:'Reflexion Total Interna',section:'tema-3',keywords:'critico fibra optica total interna angulo'},
{title:'Principio de Huygens-Fresnel',section:'tema-3',keywords:'huygens fresnel difraccion onda frente'},
{title:'Profundidad Aparente',section:'tema-3',keywords:'pez profundidad aparente agua refraccion'},
{title:'Leyes de Reflexion',section:'tema-4',keywords:'reflexion incidencia espejo plano fermat'},
{title:'Espejos Planos',section:'tema-4',keywords:'espejo plano imagen virtual traslacion rotacion'},
{title:'Espejos Esfericos',section:'tema-4',keywords:'concavo convexo gauss descartes focal aumento'},
{title:'Sistemas Opticos y Dioptrios',section:'tema-5',keywords:'dioptrio esferico refractante superficie sistema'},
{title:'Ecuacion Fundamental del Dioptrio',section:'tema-5',keywords:'ecuacion fundamental paraxial refraccion'},
{title:'Distancias Focales',section:'tema-5',keywords:'foco imagen objeto focal dioptrio'},
{title:'Materiales PDF y LaTeX',section:'materiales',keywords:'pdf latex documento descarga'},
];
function initSearch(){
const inp=document.getElementById('search-input'),res=document.getElementById('search-results');
if(!inp||!res)return;
inp.addEventListener('input',()=>{const q=inp.value.toLowerCase().trim();
if(q.length<2){res.classList.remove('active');res.innerHTML='';return}
const matches=searchIndex.filter(i=>(i.title+' '+i.keywords).toLowerCase().includes(q));
if(!matches.length){res.classList.remove('active');res.innerHTML='';return}
res.innerHTML=matches.map(m=>`<div class="sr-item" data-section="${m.section}"><span>${m.title}</span><small>${m.section.replace(/-/g,' ').replace('tema','Tema ')}</small></div>`).join('');
res.classList.add('active');
res.querySelectorAll('.sr-item').forEach(it=>it.addEventListener('click',()=>{navigate(it.dataset.section);inp.value='';res.classList.remove('active')}))});
document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))res.classList.remove('active')})}

// ─── SIMULATIONS ───
// Las simulaciones ahora se cargan como iframes independientes

// ─── Materials toggle ───
function initMaterials(){
document.querySelectorAll('.mat-toggle button').forEach(btn=>{
btn.addEventListener('click',()=>{
document.querySelectorAll('.mat-toggle button').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
document.querySelectorAll('.mat-view').forEach(v=>v.style.display='none');
const t=document.getElementById('mat-'+btn.dataset.type);if(t)t.style.display='grid'})})}

// ─── Init ───
document.addEventListener('DOMContentLoaded',()=>{
initTheme();initBg();initSearch();
const ham=document.getElementById('hamburger'),menu=document.getElementById('side-menu'),ov=document.getElementById('menu-overlay');
if(ham)ham.addEventListener('click',()=>{ham.classList.toggle('active');menu.classList.toggle('open');ov.classList.toggle('active')});
if(ov)ov.addEventListener('click',closeMenu);
document.querySelectorAll('[data-target]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();navigate(a.dataset.target)}));
function checkHash(){const h=location.hash.slice(1);if(h&&sections.includes(h))navigate(h);else navigate('inicio')}
addEventListener('hashchange',checkHash);checkHash();
initMaterials();initEqLinks();
document.querySelectorAll('.toc-list a').forEach(a=>a.addEventListener('click',e=>{
e.preventDefault();const t=document.getElementById(a.getAttribute('href').slice(1));
if(t){t.scrollIntoView({behavior:'smooth',block:'start'})}}));

function renderMathGlobally() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false}
      ],
      throwOnError: false
    });
  } else {
    setTimeout(renderMathGlobally, 100);
  }
}
renderMathGlobally();
});
