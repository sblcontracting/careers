const ENG=[["Electrical Engineer","LV/MV · SBC/SEC","bolt"],["Solar PV Engineer","PVsyst · grid tie","sun"],["Civil Engineer","Site · P6 · SBC","build"],["Telecommunications Engineer","FTTx · ELV","wifi"]];
const TEC=[["Electrical Technician","Panels · cabling","bolt"],["Solar PV Technician","Install · O&M","sun"],["Civil Technician / Surveyor","Total Station","build"],["Telecom Technician","Splicing · OTDR","wifi"]];
const IC={bolt:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',sun:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',build:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/></svg>',wifi:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a15 15 0 0 1 20 0"/><path d="M5 12.5a10 10 0 0 1 14 0"/><path d="M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/></svg>'};
const S={position:"",nationality:"",residency:"",sce:"",licence:"",software:[],join:"",years:0,ksaYears:0,decl:false,file:null};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

function card(j){const d=document.createElement('div');d.className='job';d.innerHTML=`<div class="ji">${IC[j[2]]}</div><div class="t">${j[0]}</div><div class="m">${j[1]}</div>`;
  d.onclick=()=>{$$('.job').forEach(x=>x.classList.remove('sel'));d.classList.add('sel');S.position=j[0];say('#m1','')};return d}
ENG.forEach(j=>$('#jobsE').appendChild(card(j)));TEC.forEach(j=>$('#jobsT').appendChild(card(j)));
/* ?position=<English title> (from a job page) pre-selects that role */
(function(){try{const p=new URLSearchParams(location.search).get('position');if(!p)return;
  const all=[...ENG,...TEC];const i=all.findIndex(j=>j[0].toLowerCase()===p.toLowerCase());if(i<0)return;
  $$('.job')[i].click()}catch(e){}})();

/* ---------- language ---------- */
const AR={
 "Smart Building Lines":"شركة خطوط البناء الذكي","Careers":"الوظائف","Contracting Co. · Riyadh, Saudi Arabia":"للمقاولات · الرياض، المملكة العربية السعودية",
 "Step":"الخطوة","of":"من","Position":"الوظيفة","About you":"بياناتك","Experience":"الخبرة","CV":"السيرة الذاتية","Done":"تم",
 "Which role?":"ما الوظيفة؟","Choose the position you are applying for.":"اختر الوظيفة التي تتقدم لها.",
 "Engineers · 7+ years in KSA":"المهندسون · خبرة ٧ سنوات فأكثر في المملكة","Technicians · 5+ years":"الفنيون · خبرة ٥ سنوات فأكثر",
 "Electrical Engineer":"مهندس كهرباء","Solar PV Engineer":"مهندس طاقة شمسية","Civil Engineer":"مهندس مدني","Telecommunications Engineer":"مهندس اتصالات",
 "Electrical Technician":"فني كهرباء","Solar PV Technician":"فني طاقة شمسية","Civil Technician / Surveyor":"فني مدني / مساح","Telecom Technician":"فني اتصالات",
 "LV/MV · SBC/SEC":"جهد منخفض ومتوسط","PVsyst · grid tie":"تصميم وربط بالشبكة","Site · P6 · SBC":"تنفيذ وإشراف · P6","FTTx · ELV":"ألياف ضوئية · تيار خفيف",
 "Panels · cabling":"لوحات وتمديدات","Install · O&M":"تركيب وصيانة","Total Station":"توتال ستيشن","Splicing · OTDR":"لحام فايبر · OTDR",
 "Continue":"متابعة","Back":"رجوع","Submit application":"إرسال الطلب","Sending…":"جارٍ الإرسال…",
 "So we can reach you.":"لنتمكن من التواصل معك.",
 "Full name (as in ID / passport)":"الاسم الكامل (كما في الهوية / الجواز)","Mobile (WhatsApp) 05XXXXXXXX":"رقم الجوال (واتساب)",
 "Email address":"البريد الإلكتروني","Current city":"المدينة الحالية",
 "Nationality":"الجنسية",
 "Egyptian":"مصري",
 "Sudanese":"سوداني",
 "Indian":"هندي",
 "Pakistani":"باكستاني",
 "Bangladeshi":"بنغلاديشي",
 "Filipino":"فلبيني",
 "Yemeni":"يمني",
 "Jordanian":"أردني",
 "Syrian":"سوري",
 "Nepali":"نيبالي",
 "Sri Lankan":"سريلانكي",
 "Afghan":"أفغاني",
 "Algerian":"جزائري",
 "American":"أمريكي",
 "Australian":"أسترالي",
 "Bahraini":"بحريني",
 "British":"بريطاني",
 "Cameroonian":"كاميروني",
 "Canadian":"كندي",
 "Chadian":"تشادي",
 "Chinese":"صيني",
 "Comorian":"قمري",
 "Djiboutian":"جيبوتي",
 "Dutch":"هولندي",
 "Emirati":"إماراتي",
 "Eritrean":"إريتري",
 "Ethiopian":"إثيوبي",
 "French":"فرنسي",
 "German":"ألماني",
 "Ghanaian":"غاني",
 "Indonesian":"إندونيسي",
 "Iranian":"إيراني",
 "Iraqi":"عراقي",
 "Irish":"إيرلندي",
 "Italian":"إيطالي",
 "Kenyan":"كيني",
 "Korean":"كوري",
 "Kuwaiti":"كويتي",
 "Lebanese":"لبناني",
 "Libyan":"ليبي",
 "Malaysian":"ماليزي",
 "Malian":"مالي",
 "Mauritanian":"موريتاني",
 "Moroccan":"مغربي",
 "Myanmar (Burmese)":"ميانماري (بورمي)",
 "Nigerian":"نيجيري",
 "Omani":"عماني",
 "Palestinian":"فلسطيني",
 "Qatari":"قطري",
 "Russian":"روسي",
 "Senegalese":"سنغالي",
 "Somali":"صومالي",
 "South African":"جنوب أفريقي",
 "South Sudanese":"جنوب سوداني",
 "Spanish":"إسباني",
 "Tanzanian":"تنزاني",
 "Thai":"تايلندي",
 "Tunisian":"تونسي",
 "Turkish":"تركي",
 "Ugandan":"أوغندي",
 "Ukrainian":"أوكراني",
 "Uzbek":"أوزبكي",
 "Vietnamese":"فيتنامي",
 "Select your nationality":"اختر جنسيتك",
 "Saudi":"سعودي","Non-Saudi":"غير سعودي","Residency status":"وضع الإقامة",
 "Saudi national":"مواطن سعودي","Transferable Iqama":"إقامة قابلة للنقل","Iqama not transferable":"إقامة غير قابلة للنقل","Outside Saudi Arabia":"خارج المملكة",
 "Tell us about your background.":"حدّثنا عن مؤهلاتك وخبرتك.","Highest qualification":"أعلى مؤهل",
 "Master's degree or higher":"ماجستير فأعلى","Bachelor's degree":"بكالوريوس","Diploma":"دبلوم","Vocational certificate":"شهادة مهنية","Other":"أخرى",
 "Field of study, e.g. Electrical Engineering":"التخصص، مثل: هندسة كهربائية","Total experience":"إجمالي الخبرة","Inside Saudi Arabia":"داخل المملكة","yrs":"سنة",
 "Saudi Council of Engineers (SCE)":"الهيئة السعودية للمهندسين","Valid":"سارية","In progress":"قيد الإجراء","No":"لا","Yes":"نعم",
 "Saudi driving licence":"رخصة قيادة سعودية","Software you use confidently":"البرامج التي تجيدها",
 "Last step":"الخطوة الأخيرة","Upload your CV and tell us when you can start.":"ارفع سيرتك الذاتية وأخبرنا متى يمكنك المباشرة.",
 "Upload your CV":"ارفع سيرتك الذاتية","PDF or Word · up to 10 MB":"PDF أو Word · حتى ١٠ ميجابايت",
 "Expected monthly salary":"الراتب الشهري المتوقع","SAR":"ريال","LinkedIn profile (optional)":"حساب LinkedIn (اختياري)",
 "When can you join?":"متى يمكنك المباشرة؟","Immediately":"فوراً","Within 2 weeks":"خلال أسبوعين","Within 1 month":"خلال شهر","More than 1 month":"أكثر من شهر",
 "I confirm that the information provided is accurate and complete.":"أقرّ بأن جميع المعلومات المقدّمة صحيحة وكاملة.",
 "Thank you":"شكراً لك","Your application has been received. Our team will review it and contact you if your profile matches the position.":"استلمنا طلبك. سيراجعه فريقنا وسنتواصل معك إذا كان ملفك مناسباً للوظيفة.",
 "© Smart Building Lines Contracting Co. · Riyadh":"© شركة خطوط البناء الذكي للمقاولات · الرياض",
 "Please choose a position.":"يرجى اختيار الوظيفة.","Please complete the highlighted fields.":"يرجى إكمال الحقول المحددة.",
 "Please upload a PDF or Word file.":"يرجى رفع ملف PDF أو Word.","The file is larger than 10 MB.":"حجم الملف أكبر من ١٠ ميجابايت.",
 "tap to change":"اضغط للتغيير","Sending failed. Please try again.":"تعذّر الإرسال. يرجى المحاولة مرة أخرى."
};
let LANG='en';
const T=s=>LANG==='ar'&&AR[s]?AR[s]:s;
const TX='.hero .k,.hero h1,.hero .s,[data-tx],h2,.sub,.tag,.ql,.job .t,.job .m,.seg button,.chip,.btn,.drop b,.drop small,.tg span,.unit,.row>span.grow,.foot,option';
function applyLang(l){LANG=l;const h=document.documentElement;h.lang=l;h.dir=l==='ar'?'rtl':'ltr';
  $$(TX).forEach(e=>{if(e.children.length&&!e.matches('.btn'))return;if(e.dataset.en===undefined)e.dataset.en=e.textContent.trim();
    if(e.id==='submit'&&e.disabled)return; if(e.id==='dropT'&&S.file)return; if(e.id==='dropS'&&S.file)return; e.textContent=T(e.dataset.en)});
  $$('input[placeholder]').forEach(e=>{if(e.dataset.enph===undefined)e.dataset.enph=e.placeholder;e.placeholder=T(e.dataset.enph)});
  $('#slName').textContent=T(steps[cur].dataset.name);
  $$('.msg').forEach(m=>{if(m.dataset.en)m.textContent=T(m.dataset.en)});
  $$('#lang button').forEach(b=>b.classList.toggle('sel',b.dataset.l===l));
  try{localStorage.setItem('sblLang',l)}catch(e){}}
function say(sel,en){const m=$(sel);m.dataset.en=en;m.textContent=T(en)}

$$('.seg button,.chip').forEach(b=>b.dataset.v=b.textContent.trim());
$$('[data-q="nationality"] .seg button').forEach(b=>b.addEventListener('click',()=>{const nr=$('#natRow'),sel=nr.querySelector('select'),on=b.dataset.v==='Non-Saudi';
  nr.hidden=!on;sel.required=on;if(!on){sel.value='';nr.classList.remove('err')}}));
$$('.q').forEach(q=>{const k=q.dataset.q,multi=q.hasAttribute('data-multi');
  q.querySelectorAll('button').forEach(b=>b.onclick=()=>{q.classList.remove('err');
    if(multi){b.classList.toggle('sel');S[k]=[...q.querySelectorAll('.sel')].map(x=>x.dataset.v)}
    else{q.querySelectorAll('button').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');S[k]=b.dataset.v}})});
$$('.stepper').forEach(st=>{const k=st.dataset.st,[m,v,p]=st.children;
  const set=n=>{S[k]=Math.max(0,Math.min(45,n));v.textContent=S[k]};m.onclick=()=>set(S[k]-1);p.onclick=()=>set(S[k]+1)});
$('#decl').onclick=()=>{S.decl=!S.decl;$('#decl').classList.toggle('on',S.decl);$('#decl').classList.remove('err')};

const drop=$('#drop'),cv=$('#cv');
drop.onclick=()=>cv.click();
['dragover','dragenter'].forEach(e=>drop.addEventListener(e,ev=>{ev.preventDefault();drop.classList.add('over')}));
['dragleave','drop'].forEach(e=>drop.addEventListener(e,ev=>{ev.preventDefault();drop.classList.remove('over')}));
drop.addEventListener('drop',ev=>pick(ev.dataTransfer.files[0]));
cv.onchange=()=>pick(cv.files[0]);
function pick(f){if(!f)return;drop.classList.remove('err');
  if(!/\.(pdf|docx?)$/i.test(f.name)){say('#m4','Please upload a PDF or Word file.');return}
  if(f.size>10*1024*1024){say('#m4','The file is larger than 10 MB.');return}
  S.file=f;say('#m4','');drop.classList.add('has');$('#dropT').textContent=f.name;$('#dropS').textContent=(f.size/1024/1024).toFixed(2)+' MB · '+T('tap to change')}

let cur=0;const steps=$$('.step');
function go(n,back){steps[cur].classList.remove('on','back');cur=n;steps[n].classList.add('on');steps[n].classList.toggle('back',!!back);
  $$('.prog i').forEach((b,i)=>b.classList.toggle('on',i<=Math.min(n,3)));$('#slNo').textContent=Math.min(n+1,4);$('#slName').textContent=T(steps[n].dataset.name);
  window.scrollTo({top:0,behavior:'smooth'})}
function req(step,keys,m){let ok=true;
  step.querySelectorAll('input[required],select[required]').forEach(i=>{const bad=!i.checkValidity();i.closest('.row').classList.toggle('err',bad);if(bad)ok=false});
  keys.forEach(k=>{const q=step.querySelector(`[data-q="${k}"]`);const bad=!S[k];q.classList.toggle('err',bad);if(bad)ok=false});
  say(m,ok?'':'Please complete the highlighted fields.');return ok}
$$('[data-prev]').forEach(b=>b.onclick=()=>go(cur-1,true));
const GAS=!!(window.google&&google.script&&google.script.run);
const ENDPOINT=document.documentElement.dataset.endpoint||'';
const PREVIEW=!GAS&&!ENDPOINT;
$$('[data-next]').forEach(b=>b.onclick=()=>{
  if(PREVIEW){go(cur+1);return}
  if(cur===0&&!S.position){say('#m1','Please choose a position.');return}
  if(cur===1&&!req(steps[1],['nationality','residency'],'#m2'))return;
  if(cur===2&&!req(steps[2],['sce','licence'],'#m3'))return;
  go(cur+1)});
$$('input').forEach(i=>i.addEventListener('input',()=>i.closest('.row')&&i.closest('.row').classList.remove('err')));
$$('select').forEach(i=>i.addEventListener('change',()=>i.closest('.row').classList.remove('err')));

$('#submit').onclick=()=>{
  if(PREVIEW){go(4);return}
  let ok=req(steps[3],['join'],'#m4');
  if(!S.file){drop.classList.add('err');ok=false}
  if(!S.decl){$('#decl').classList.add('err');ok=false}
  if(!ok){say('#m4','Please complete the highlighted fields.');return}
  const btn=$('#submit');btn.disabled=true;btn.innerHTML='<span class="spin"></span>'+T('Sending…');
  const v=n=>(document.querySelector(`[name="${n}"]`).value||'').trim();
  const r=new FileReader();r.onload=()=>{
    const data={position:S.position,name:v('name'),phone:v('phone'),email:v('email'),city:v('city'),nationality:S.nationality==='Non-Saudi'?(v('country')||'Non-Saudi'):S.nationality,residency:S.residency,
      qualification:v('qualification'),field:v('field'),years:S.years,ksaYears:S.ksaYears,sce:S.sce,licence:S.licence,software:S.software.join(', '),
      salary:v('salary'),join:S.join,linkedin:v('linkedin'),website:v('website'),fileName:S.file.name,mime:S.file.type||'application/octet-stream',file:String(r.result).split(',')[1]};
    const fail=e=>{btn.disabled=false;btn.textContent=T('Submit application');say('#m4','Sending failed. Please try again.');console.error(e)};
    if(GAS){google.script.run.withSuccessHandler(()=>go(4)).withFailureHandler(fail).submitApplication(data)}
    else if(ENDPOINT){
      fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(data),credentials:'omit',redirect:'follow'})
        .then(r=>r.json()).then(j=>j&&j.ok?go(4):fail(j&&j.error)).catch(fail)}
    else{setTimeout(()=>go(4),900)} // design preview only
  };r.readAsDataURL(S.file)};

$$('option').forEach(o=>{if(!o.hasAttribute('value'))o.value=o.textContent.trim()});
$$('#lang button').forEach(b=>b.onclick=()=>applyLang(b.dataset.l));
let saved='en';try{saved=localStorage.getItem('sblLang')||(/^ar/i.test(navigator.language)?'ar':'en')}catch(e){}
applyLang(saved==='ar'?'ar':'en');
