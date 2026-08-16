const t=document.querySelector('.nav-toggle'),m=document.querySelector('.nav-menu');if(t&&m){t.addEventListener('click',()=>{const o=m.classList.toggle('is-open');t.setAttribute('aria-expanded',String(o));t.textContent=o?'\u00d7':'\u2630'});m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{m.classList.remove('is-open');t.setAttribute('aria-expanded','false');t.textContent='\u2630'}));}

/* ---- i18n: Indonesian is the DOM default; English from this dictionary ---- */
const EN={
skip:"Skip to main content",
navTentang:"About", navLayanan:"Services", navStudi:"Case Study", navKlien:"Experience", navHubungi:"Contact Us",
heroEyebrow:"Integrated Solutions Partner",
heroTitle:'Solutions that<br/>Build the <span style="background:linear-gradient(135deg,#34D8A6,#10B981 55%,#0F766E); -webkit-background-clip:text; background-clip:text; color:transparent;">Future</span>',
heroSub:"An integrated solutions partner — technology, infrastructure, and business support services across industries.",
heroCta1:"Email Us", heroCta2:"View Services",
aboutEyebrow:"About Us",
aboutTitle:"An integrated solutions company that builds reliable, secure, and scalable systems.",
aboutBody:'SAKEZ Solusi Indonesia is an integrated solutions company that designs, builds, and manages infrastructure, technology, and operational systems. From <em style="color:#0F8F6F; font-style:normal; font-weight:500;">data center</em> construction and security systems to application development and ERP implementation — we deliver solutions that support our clients\u2019 business growth across industries.',
stat1:"Solution service lines", stat2:"Corporate project experiences", stat3:"Methodology stages",
servEyebrow:"Services &amp; Solutions",
servTitle:"End-to-end solutions, from infrastructure to applications.",
svc1t:"Data Center Construction", svc1d:"Data Center &amp; DRC build",
svc2t:"Security &amp; Surveillance", svc2d:"CCTV &amp; Access Control",
svc3t:"Smart Locker", svc3d:"IoT smart locker",
svc4t:"Application Development", svc4d:"Application development",
svc5t:"Odoo ERP Implementation", svc5d:"Odoo ERP implementation",
svc6t:"HRIS Integration", svc6d:"HRIS integration",
svc7t:"Internal Systems &amp; Custom Solutions", svc7d:"Unified operational systems, designed to fit your business needs.",
infraEyebrow:"Focus 01", infraTitle:"Infrastructure &amp; Security",
infra1t:"Data Center &amp; DRC", infra1d:"Design and construction of data centers, cages, and Disaster Recovery Centers.",
infra2t:"Surveillance &amp; Access Control", infra2d:"Integrated CCTV and access control systems for buildings and server rooms.",
infra3t:"Smart Locker", infra3d:"IoT-based smart locker solutions, integrated with digital access systems.",
swEyebrow:"Focus 02", swTitle:"Software &amp; Systems",
swSub:"Turning business processes into efficient, integrated digital systems.",
sw1t:"Application Development", sw1d:"Custom web &amp; mobile built to your business processes.",
sw2t:"Odoo ERP Implementation", sw2d:"Integrating operations, finance, and sales.",
sw3t:"HRIS Integration", sw3d:"Attendance, payroll, and employee management on one platform.",
sw4t:"Unified Internal Systems", sw4d:"Connecting and streamlining your entire workflow.",
swDash:"ERP Dashboard — One Data, One System",
flow1t:"Planning", flow2t:"Procurement", flow3t:"Construction", flow4t:"Installation &amp; Commissioning", flow5t:"Operations", flow6t:"Analysis &amp; Reporting",
flow1b:'<li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Feasibility Study</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Architecture Design</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Bill of Material</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Cost &amp; Schedule Estimation</li>',
flow2b:'<li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Request for Quotation</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Purchase Order</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Vendor Management</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Material Procurement</li>',
flow3b:'<li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Project Management</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Progress Monitoring</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Quality Control</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Work Safety</li>',
flow4b:'<li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">IT Infrastructure Installation</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Testing &amp; Commissioning</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">System Integration</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Documentation</li>',
flow5b:'<li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Real-time Monitoring</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Maintenance</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Incident Management</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Capacity Management</li>',
flow6b:'<li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">KPI Dashboard</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Performance Reports</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Cost Analysis</li><li style="font-family:\'Jost\',sans-serif; font-weight:300; font-size:14px; line-height:1.35; color:#43695A;">Strategic Decisions</li>',
methEyebrow:"How We Work", methTitle:"A disciplined and measurable methodology.",
meth1t:"Consultation", meth1d:"Understanding your business needs, challenges, and goals.",
meth2t:"Design", meth2d:"Designing the right and scalable solution architecture.",
meth3t:"Build", meth3d:"Developing and building to quality standards.",
meth4t:"Implementation", meth4d:"Deploying and integrating into the client environment.",
meth5t:"Support", meth5d:"Ongoing maintenance and support after implementation.",
caseEyebrow:"Featured Case Study", caseTitle:"Structured Cabling and Security Systems",
caseKlienLabel1:"Client", caseKlienLabel2:"Client",
case1t:"Cage Colocation &amp; Civil Work", case1d:"Cage colocation construction with mission-critical specifications.",
case2t:"Surveillance &amp; Access Control", case2d:"CCTV, NVR, and access control with Anti-Passback; zero-trust network segmentation (VLAN, MikroTik, WireGuard VPN).",
caseNote:"Executed as technical &amp; administrative implementer in collaboration with PT Nikasa Barra Karya. Test result certificates, BAST, and as-built documentation available on request.",
caseOceanDesc:"Smart Office Building construction — integrating digital access systems, IoT, and workspace automation within a single modern office building.",
cliEyebrow:"Project Experience &amp; Partners", cliTitle:"Cross-industry project experience.",
cliSub:"Organizations connected to our team\u2019s project experience, collaborations, and professional track record across sectors.",
cli1:"Data Center, DRC &amp; Surveillance", cli2:"Technology &amp; infrastructure", cli3:"Access Control", cli4:"Banking sector", cli5:"Technology solutions", cli6:"Consortium Partner",
whyEyebrow:"Why Us", whyTitle:"A proven, end-to-end solutions partner.",
why1t:"Mission-Critical Track Record", why1d:"Trusted to handle capital-market and large-enterprise infrastructure.",
why2t:"End-to-End Solutions", why2d:"From physical infrastructure to applications in a single partner.",
why3t:"Reliability &amp; Security", why3d:"High standards in every system we build.",
why4t:"Continuous Support", why4d:"Long-term maintenance and guidance.",
contactTitle:"Let\u2019s Build<br/>Your Solution", contactSub:"Let's build your solution.",
contactCta:"Email Us", phoneLabel:"Phone / WA",
copyright:"© 2026 SAKEZ Solusi Indonesia. Part of SAKEZ Group.",
formTitle:"Send Us Your Needs", formNama:"Name", formPerusahaan:"Company", formEmail:"Email",
formTelp:"WhatsApp No.", formLayanan:"Service of interest", formPesan:"Message", formKirim:"Send via WhatsApp",
backlinkGroup:"Visit our parent company \u2192 SAKEZ Group"
};

(function(){
  const nodes=document.querySelectorAll('[data-i18n]');
  // cache the Indonesian default (original innerHTML)
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
  let saved='id';
  try{saved=localStorage.getItem('sakez_lang')||'id';}catch(e){}
  apply(saved);
})();
