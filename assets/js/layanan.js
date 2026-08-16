const t=document.querySelector('.nav-toggle'),m=document.querySelector('.nav-menu');if(t&&m){t.addEventListener('click',()=>{const o=m.classList.toggle('is-open');t.setAttribute('aria-expanded',String(o));t.textContent=o?'\u00d7':'\u2630'});m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{m.classList.remove('is-open');t.setAttribute('aria-expanded','false');t.textContent='\u2630'}));}
const BASE_EN={
skip:"Skip to main content",
navTentang:"About", navLayanan:"Services", navStudi:"Case Study", navKlien:"Experience", navHubungi:"Contact Us",
bcHome:"Home", bcLayanan:"Services",
backAll:"All Services", relTitle:"Other Services",
scopeH:"Scope of Work", procH:"How We Work", whyH:"Why SAKEZ", faqH:"Frequently Asked Questions",
ctaTitle:"Let\u2019s Build Your Solution", ctaSub:"Let's build your solution.",
ctaBtn:"Email Us", phoneLabel:"Phone / WA",
copyright:"© 2026 SAKEZ Solusi Indonesia. Part of SAKEZ Group."
};
(function(){
  const EN=Object.assign({},BASE_EN,(window.PAGE_EN||{}));
  const nodes=document.querySelectorAll('[data-i18n]');
  nodes.forEach(el=>el.setAttribute('data-id-html',el.innerHTML));
  const btns=document.querySelectorAll('.lang-switch button');
  function apply(lang){
    nodes.forEach(el=>{
      const key=el.getAttribute('data-i18n');
      if(lang==='en'&&EN[key]!=null) el.innerHTML=EN[key];
      else el.innerHTML=el.getAttribute('data-id-html');
    });
    document.documentElement.lang=lang;
    btns.forEach(b=>b.classList.toggle('is-active',b.getAttribute('data-lang')===lang));
    try{localStorage.setItem('sakez_lang',lang);}catch(e){}
  }
  btns.forEach(b=>b.addEventListener('click',()=>apply(b.getAttribute('data-lang'))));
  let saved='id'; try{saved=localStorage.getItem('sakez_lang')||'id';}catch(e){}
  apply(saved);
})();
/* GA4 lead tracking: fire generate_lead on any email click */
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="mailto:"]');if(a){try{if(typeof gtag==='function')gtag('event','generate_lead',{currency:'IDR',value:0,method:'email'});}catch(err){}}},true);