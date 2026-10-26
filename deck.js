const SLIDES = [
  {
    id: 1,
    kind: "cover",
    label: "A proposta",
    kicker: "Inovação no atendimento",
    title: "Petiscos",
    italic: "na espera",
    lead: "Petiscos e bebidas para quem espera para pedir ou para receber a pizza. Uma proposta para acolher o cliente desde a chegada.",
    image: "./images/cover.webp",
    imageAlt: "Petiscos da casa: pão de alho, bruschettas e bolinhos de queijo",
    speech: [
      {
        text: "Petiscos na espera. Uma proposta para a pizzaria. Oferecer petiscos e bebidas para quem espera para pedir, ou para receber a pizza. A ideia é acolher o cliente desde a chegada.",
      },
    ],
    gesture: "Abra os braços em acolhimento, depois indique o espaço de espera com a palma aberta.",
  },
  {
    id: 2,
    kind: "moments",
    label: "Entender o cliente",
    kicker: "Dois momentos",
    title: "A espera tem",
    italic: "dois momentos",
    lead: "A proposta combina conforto, informação sobre o pedido e consumo opcional.",
    image: "./images/escolher.webp",
    imageAlt: "Clientes escolhendo o pedido à mesa",
    speech: [
      {
        text: "A espera tem dois momentos. Antes de pedir: o cliente aguarda atendimento ou ainda está escolhendo. Depois de pedir: o pedido já foi feito e a pizza está no preparo. Em ambos, combinamos conforto, informação e consumo opcional.",
      },
    ],
    gesture: "Mostre dois tempos com as mãos: à esquerda, a chegada; à direita, a espera da pizza.",
  },
  {
    id: 3,
    kind: "menu",
    label: "O contexto",
    kicker: "O que oferecer",
    title: "Um cardápio",
    italic: "curto e simples",
    lead: "Porções pequenas, fáceis de compartilhar. O cliente escolhe se quer consumir.",
    image: "./images/pao-de-alho.webp",
    imageAlt: "Pão de alho gratinado",
    speech: [
      {
        text: "O que oferecer: um cardápio curto e simples, com porções pequenas, fáceis de compartilhar. Petiscos: pão de alho, bruschettas e bolinhos de queijo. Bebidas sem álcool: água, sucos e refrigerantes.",
      },
    ],
    gesture: "Mostre o cardápio com as duas mãos, na altura do peito, e deixe o cliente ler em silêncio.",
  },
  {
    id: 4,
    kind: "organize",
    label: "A organização",
    kicker: "Como colocar em prática",
    title: "Organizar",
    italic: "três pontos",
    lead: "Começar com a estrutura disponível e ajustar depois do primeiro teste.",
    image: "./images/canto.webp",
    imageAlt: "Canto de espera da pizzaria",
    speech: [
      {
        text: "Para colocar em prática, organizar três pontos. Espaço: assentos e mesa de apoio, com a passagem livre. Cardápio: poucas opções, com preços ou cortesia informados. Equipe: definir quem recebe, informa e serve. Começar com o que já existe e ajustar depois do primeiro teste.",
      },
    ],
    gesture: "Aponte no espaço, no cardápio e na equipe, um ponto de cada vez, com a mão aberta.",
  },
  {
    id: 5,
    kind: "steps",
    label: "O passo a passo",
    kicker: "O serviço",
    title: "Da chegada",
    italic: "à entrega",
    lead: "A pizza continua sendo a prioridade. Os petiscos não devem aumentar a demora.",
    image: "./images/acolher.webp",
    imageAlt: "Atendente acolhendo clientes na entrada",
    speech: [
      {
        text: "O serviço, da chegada à entrega. Primeiro, acolher: cumprimentar e identificar se o cliente vai pedir ou está aguardando a pizza. Segundo, informar: consultar a previsão de espera e mostrar as opções, com os valores claros. Terceiro, confirmar: ouvir a escolha e servir apenas o que foi solicitado. Quarto, acompanhar: atualizar o cliente e avisar quando o pedido estiver pronto. A pizza continua sendo a prioridade.",
      },
    ],
    gesture: "Conte os quatro passos nos dedos, com calma, sem pressa.",
  },
  {
    id: 6,
    kind: "scene",
    label: "Antes do pedido",
    kicker: "Cena 1",
    title: "O cliente",
    italic: "ainda vai pedir",
    lead: "Duas pessoas chegaram e estão esperando atendimento.",
    image: "./images/espera.webp",
    imageAlt: "Canto de espera da pizzaria",
    speech: [
      { speaker: "Atendente", text: "Boa noite! Vocês podem aguardar aqui." },
      {
        speaker: "Atendente",
        text: "Enquanto escolhem a pizza, querem conhecer os petiscos?",
      },
      { speaker: "Cliente", text: "Pode mostrar o cardápio, por favor." },
    ],
    gesture: "Indique os assentos com a mão aberta e fale com calma.",
  },
  {
    id: 7,
    kind: "scene",
    label: "Depois do pedido",
    kicker: "Cena 2",
    title: "A pizza",
    italic: "está no preparo",
    lead: "A família já pediu e quer saber como está a pizza.",
    image: "./images/pizza.webp",
    imageAlt: "Pizza saindo do forno a lenha",
    speech: [
      { speaker: "Cliente", text: "Nossa pizza ainda vai demorar?" },
      {
        speaker: "Atendente",
        text: "Vou conferir com a cozinha e já aviso vocês.",
      },
      {
        speaker: "Atendente",
        text: "A pizza está no preparo. Querem ver as opções de petiscos?",
      },
    ],
    gesture: "Ouça sem interromper e confirme a informação antes de responder.",
  },
  {
    id: 8,
    kind: "care",
    label: "Cuidados no atendimento",
    kicker: "Dia a dia",
    title: "Três situações",
    italic: "do salão",
    lead: "Não prometer um tempo que a equipe não confirmou, nem servir algo sem avisar o preço.",
    image: "./images/respeitar.webp",
    imageAlt: "Atendente respeitando a escolha do cliente",
    speech: [
      {
        text: "Três cuidados do dia a dia. Se o cliente não quiser consumir, respeitar: sem problema, fiquem à vontade. Se a pizza estiver atrasada, conferir e atualizar a previsão. Se o espaço estiver cheio, organizar a espera e manter a passagem livre. Respeito e clareza.",
      },
    ],
    gesture: "Mantenha as palmas visíveis e o tom baixo. Nunca aponte o dedo para o cliente.",
  },
  {
    id: 9,
    kind: "thanks",
    label: "Obrigado",
    kicker: "Petiscos na espera",
    title: "Obrigado",
    italic: "pela atenção de todos",
    image: "./images/obrigado.webp",
    imageAlt: "Mesa da pizzaria ao fim da noite",
    speech: [
      {
        text: "Obrigado pela atenção de todos.",
      },
    ],
  },
];

const MENU_ITEMS = [
  {
    name: "Pão de alho",
    note: "Porção para compartilhar",
    image: "./images/pao-de-alho.webp",
    alt: "Pão de alho gratinado",
  },
  {
    name: "Bruschettas",
    note: "Tomate, manjericão e azeite",
    image: "./images/bruschetta.webp",
    alt: "Bruschettas de tomate",
  },
  {
    name: "Bolinhos de queijo",
    note: "Crocantes, servidos quentes",
    image: "./images/bolinhos.webp",
    alt: "Bolinhos de queijo",
  },
];

const MOMENT_CARDS = [
  {
    kicker: "Antes de pedir",
    tone: "olive",
    title: "Ainda escolhe",
    body: "O cliente aguarda atendimento ou ainda está escolhendo o pedido.",
    example: "Duas pessoas chegam e esperam uma mesa.",
    image: "./images/escolher.webp",
    alt: "Casal escolhendo o pedido à mesa",
  },
  {
    kicker: "Depois de pedir",
    tone: "primary",
    title: "Pizza no forno",
    body: "O pedido já foi feito e o cliente espera a pizza ficar pronta.",
    example: "Uma família aguarda a pizza no salão.",
    image: "./images/pizza.webp",
    alt: "Pizza saindo do forno a lenha",
  },
];

const ORGANIZE_POINTS = [
  {
    n: "01",
    title: "Espaço",
    body: "Assentos e mesa de apoio, com a passagem livre.",
    example: "Um canto próximo à recepção.",
    image: "./images/canto.webp",
    alt: "Canto de espera com cadeiras e mesa de apoio",
  },
  {
    n: "02",
    title: "Cardápio",
    body: "Poucas opções, com preços ou cortesia informados.",
    example: "Um cardápio com três petiscos.",
    image: "./images/cover.webp",
    alt: "Petiscos da casa",
  },
  {
    n: "03",
    title: "Equipe",
    body: "Definir quem recebe, informa e serve os petiscos.",
    example: "Combinar funções antes de abrir.",
    image: "./images/equipe.webp",
    alt: "Atendente da pizzaria no balcão",
  },
];

const SERVICE_STEPS = [
  {
    n: "1",
    title: "Acolher",
    body: "Cumprimentar e identificar se o cliente vai pedir ou está aguardando a pizza.",
    image: "./images/acolher.webp",
    alt: "Atendente recebendo clientes na entrada",
  },
  {
    n: "2",
    title: "Informar",
    body: "Consultar a previsão de espera e mostrar as opções, com os valores claros.",
    image: "./images/informar.webp",
    alt: "Atendente mostrando as opções de petiscos",
  },
  {
    n: "3",
    title: "Confirmar",
    body: "Ouvir a escolha, confirmar os itens e servir apenas o que foi solicitado.",
    image: "./images/confirmar.webp",
    alt: "Atendente confirmando o pedido à mesa",
  },
  {
    n: "4",
    title: "Acompanhar",
    body: "Atualizar o cliente e avisar quando o pedido estiver pronto.",
    image: "./images/acompanhar.webp",
    alt: "Atendente atualizando a mesa sobre a pizza",
  },
];

const CARE_ROWS = [
  {
    situation: "O cliente não quer consumir.",
    action: "Respeitar a escolha e manter o atendimento.",
    line: "Sem problema! Fiquem à vontade.",
    image: "./images/respeitar.webp",
    alt: "Atendente respeitando a escolha dos clientes",
  },
  {
    situation: "A pizza está atrasada.",
    action: "Conferir a situação e atualizar a previsão.",
    line: "Vou verificar o pedido e trazer uma posição.",
    image: "./images/atraso.webp",
    alt: "Atendente conferindo a pizza no forno",
  },
  {
    situation: "O espaço está cheio.",
    action: "Organizar a espera e manter a passagem livre.",
    line: "Vou conferir um lugar para vocês aguardarem.",
    image: "./images/cheio.webp",
    alt: "Salão cheio com a equipe organizando a espera",
  },
];

const SHORTCUTS = [
  { keys: "← →", label: "Slide anterior e próximo" },
  { keys: "Espaço", label: "Avançar" },
  { keys: "N", label: "Visão de todos os slides" },
  { keys: "S", label: "Fala + gesto" },
  { keys: "F", label: "Tela cheia" },
  { keys: "D", label: "Visual 4D" },
  { keys: "R", label: "Roteiro do slide" },
  { keys: "?", label: "Atalhos" },
];


const $=(sel,root=document)=>root.querySelector(sel);
const slideContainer=$('#slide-content');
const slidesMeta=$('#slide-counter');
const status=$('#slide-status');
const progress=$('#progress');
const overview=$('#overview');
const speaker=$('#speaker');
const speechContent=$('#speech-content');
let index=0;
let overviewOpen=false;
let speakerOpen=false;
let focusMode=false;
const esc=(v)=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const photo=(src,alt,cls='')=>`<div class="photo ${cls}"><img loading="eager" src="${esc(src)}" alt="${esc(alt)}"></div>`;
const card=(title,desc,img,alt,small='',tail='')=>`<article class="item-card">${photo(img,alt,'card-photo')}<div class="card-copy">${small?`<span class="eyebrow small">${esc(small)}</span>`:''}<h2>${esc(title)}</h2><p>${esc(desc)}</p>${tail?`<p class="card-tail">${esc(tail)}</p>`:''}</div></article>`;
const heading=(s)=>`<div class="heading"><span class="eyebrow">${esc(s.kicker)}</span><h1>${esc(s.title)} <em>${esc(s.italic)}</em></h1></div>`;
const caption=(s)=>`<div class="slide-bottom"><span>${esc(s.label)}</span><b>${String(s.id).padStart(2,'0')} <i>/ ${String(SLIDES.length).padStart(2,'0')}</i></b></div>`;
function renderContent(s){
  switch(s.kind){
    case 'cover': return `<div class="cover-grid"><div class="cover-copy">${heading(s)}<p class="lead">${esc(s.lead)}</p><p class="support">Uma proposta para a pizzaria: acolher o cliente no salão, com conforto e opções claras, sem atrasar a pizza.</p></div><div class="hero-photo">${photo(s.image,s.imageAlt,'full')}<span>Porções pequenas, para a espera.</span></div></div>${caption(s)}`;
    case 'moments': return `${heading(s)}<div class="cards cards-2 moments">${MOMENT_CARDS.map(x=>card(x.title,x.body,x.image,x.alt,x.kicker,'Exemplo: '+x.example)).join('')}</div><p class="bottom-line">${esc(s.lead)}</p>${caption(s)}`;
    case 'menu': return `${heading(s)}<div class="cards cards-3 menu">${MENU_ITEMS.map(x=>card(x.name,x.note,x.image,x.alt)).join('')}</div><div class="menu-foot"><span>BÉBIDAS</span> Água · sucos · refrigerantes</div>${caption(s)}`;
    case 'organize': return `${heading(s)}<div class="cards cards-3 organize">${ORGANIZE_POINTS.map(x=>card(x.title,x.body,x.image,x.alt,x.n,'Exemplo: '+x.example)).join('')}</div><p class="bottom-line">${esc(s.lead)}</p>${caption(s)}`;
    case 'steps': return `${heading(s)}<div class="steps-grid">${SERVICE_STEPS.map(x=>`<article class="step-card">${photo(x.image,x.alt,'step-photo')}<div class="step-copy"><span class="step-n">${x.n}</span><h2>${esc(x.title)}</h2><p>${esc(x.body)}</p></div></article>`).join('')}</div><p class="bottom-line strong">${esc(s.lead)}</p>${caption(s)}`;
    case 'scene': return `<div class="scene-layout">${photo(s.image,s.imageAlt,'scene-photo')}<div class="scene-info">${heading(s)}<p class="scene-lead">${esc(s.lead)}</p><div class="dialog">${s.speech.map(x=>`<div class="dialog-row"><span class="eyebrow small">${esc(x.speaker)}</span><p>“${esc(x.text)}”</p></div>`).join('')}</div></div></div>${caption(s)}`;
    case 'care': return `${heading(s)}<div class="cards cards-3 care">${CARE_ROWS.map(x=>card(x.situation,x.action,x.image,x.alt,'SITUAÇÃO','“'+x.line+'”')).join('')}</div><p class="bottom-line">${esc(s.lead)}</p>${caption(s)}`;
    case 'thanks': return `<div class="thanks-back">${photo(s.image,s.imageAlt,'full')}<div class="thanks-over"></div><div class="thanks-text"><p>Petiscos na espera</p><h1>${esc(s.title)}</h1><em>${esc(s.italic)}</em></div></div>`;
    default:return '';
  }
}
function draw(){
 const s=SLIDES[index];
 slideContainer.classList.remove('animate');
 slideContainer.innerHTML=renderContent(s);
 void slideContainer.offsetWidth;
 slideContainer.classList.add('animate');
 slidesMeta.textContent=`${String(s.id).padStart(2,'0')} / ${String(SLIDES.length).padStart(2,'0')}`;
 status.textContent=`Slide ${s.id} de ${SLIDES.length}: ${s.title} ${s.italic??''}`;
 progress.style.width=`${(s.id/SLIDES.length)*100}%`;
 $('#prev').disabled=index===0;
 $('#next').disabled=index===SLIDES.length-1;
 window.history.replaceState(null,'',`#${s.id}`);
 try{localStorage.setItem('petiscos-deck-index',index)}catch{}
 if(speakerOpen)drawSpeaker();
 if(overviewOpen)drawOverview();
}
function go(n){index=Math.max(0,Math.min(SLIDES.length-1,n));draw()}
function next(){go(index+1)}
function prev(){go(index-1)}
function toggleFullscreen(){if(document.fullscreenElement)document.exitFullscreen();else document.documentElement.requestFullscreen?.().catch(()=>{});}
function drawSpeaker(){let s=SLIDES[index]; speechContent.innerHTML=`<strong>${esc(s.label)} · ${esc(s.title)} ${esc(s.italic??'')}</strong><ol>${s.speech.map(x=>`<li>${x.speaker?`<b>${esc(x.speaker)}: </b>`:''}${esc(x.text)}</li>`).join('')}</ol>${s.gesture?`<p><b>Gesto sugerido:</b> ${esc(s.gesture)}</p>`:''}`;}
function toggleSpeaker(){speakerOpen=!speakerOpen;speaker.hidden=!speakerOpen;$('#notes').setAttribute('aria-pressed',String(speakerOpen));if(speakerOpen)drawSpeaker()}
function drawOverview(){overview.innerHTML=SLIDES.map((s,i)=>`<button type="button" data-slide="${i}" class="overview-item ${i===index?'active':''}">${photo(s.image,s.imageAlt,'overview-image')}<span><b>${String(s.id).padStart(2,'0')}</b> ${esc(s.title)} ${esc(s.italic??'')}</span></button>`).join('');}
function toggleOverview(){overviewOpen=!overviewOpen;overview.hidden=!overviewOpen;$('#grid').setAttribute('aria-pressed',String(overviewOpen));if(overviewOpen)drawOverview()}
$('#prev').addEventListener('click',prev);$('#next').addEventListener('click',next);
$('#fullscreen').addEventListener('click',toggleFullscreen);
$('#notes').addEventListener('click',toggleSpeaker);
$('#grid').addEventListener('click',toggleOverview);
$('#close-notes').addEventListener('click',toggleSpeaker);
$('#close-overview').addEventListener('click',toggleOverview);
$('#help').addEventListener('click',()=>$('#shortcuts').showModal());
$('#close-help').addEventListener('click',()=>$('#shortcuts').close());
overview.addEventListener('click',e=>{const b=e.target.closest('[data-slide]');if(!b)return;go(Number(b.dataset.slide));toggleOverview()});
window.addEventListener('keydown',e=>{
 if(e.altKey||e.ctrlKey||e.metaKey)return;
 if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();next()}
 else if(['ArrowLeft','PageUp','Backspace'].includes(e.key)){e.preventDefault();prev()}
 else if(e.key==='Home'){e.preventDefault();go(0)}
 else if(e.key==='End'){e.preventDefault();go(SLIDES.length-1)}
 else if(e.key.toLowerCase()==='f')toggleFullscreen();
 else if(e.key.toLowerCase()==='s'||e.key.toLowerCase()==='r')toggleSpeaker();
 else if(e.key.toLowerCase()==='n')toggleOverview();
 else if(e.key==='?')$('#shortcuts').showModal();
 else if(e.key==='Escape'){if(overviewOpen)toggleOverview();if(speakerOpen)toggleSpeaker();}
});
let start=null;
$('#stage').addEventListener('touchstart',e=>start=e.changedTouches[0].clientX,{passive:true});
$('#stage').addEventListener('touchend',e=>{if(start===null)return;let dx=e.changedTouches[0].clientX-start;if(Math.abs(dx)>55)dx<0?next():prev();start=null},{passive:true});
window.addEventListener('hashchange',()=>{const n=Number(location.hash.slice(1));if(n>=1&&n<=SLIDES.length&&n!==index+1)go(n-1)});
const startHash=Number(location.hash.slice(1));let saved=0;try{saved=Number(localStorage.getItem('petiscos-deck-index'))||0}catch{}
index=startHash>=1&&startHash<=SLIDES.length?startHash-1:Math.max(0,Math.min(saved,SLIDES.length-1));draw();