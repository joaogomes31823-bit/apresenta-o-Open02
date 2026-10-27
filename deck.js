// Petiscos na espera — navegação, slides acessíveis e roteiro.
// Conteúdo editorial e notas dos nove slides preservados do projeto aprovado.
// Nove slides finais, revisados com o mesmo tom de chocolate e o novo encerramento.
const SLIDE_IMAGES = Array.from({length:9}, (_,i) => `./slides/slide-${String(i+1).padStart(2,'0')}.webp`);
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
        text: "O que oferecer: um cardápio curto e simples, com porções pequenas, fáceis de compartilhar. Petiscos: pão de alho, bruschettas e bolinhos de queijo. Bebidas sem álcool: água, sucos e refrigerantes. O slide também menciona uma opção para adultos, sob consulta.",
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

(function runtime(){
  "use strict";
  const $=(selector,root=document)=>root.querySelector(selector);
  const stage=$("#stage");
  const container=$("#slide-content");
  const status=$("#slide-status");
  const notes=$("#speaker");
  const notesBody=$("#speech-content");
  const overview=$("#overview");
  const overviewList=$("#overview-list");
  const help=$("#shortcuts");
  const esc=(v)=>String(v==null?"":v).replace(/[&<>"']/g,(c)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const details={
    2:"Dois momentos: antes de pedir, o cliente aguarda atendimento ou escolhe o pedido. Exemplo: duas pessoas esperam uma mesa. Depois de pedir, o cliente já fez o pedido e aguarda a pizza. Exemplo: família aguardando no salão. A proposta combina conforto, informação sobre o pedido e consumo opcional.",
    3:"Cardápio curto e simples: pão de alho, porção para compartilhar; bruschettas com tomate, manjericão e azeite; bolinhos de queijo, crocantes e servidos quentes. Bebidas sem álcool: água, sucos e refrigerantes. Há também uma indicação de opção para adultos sob consulta. Porções pequenas e consumo opcional.",
    4:"Organizar três pontos. Primeiro, espaço: assentos e mesa de apoio com passagem livre; exemplo: canto próximo à recepção. Segundo, cardápio: poucas opções com preços ou cortesia informados; exemplo: três petiscos. Terceiro, equipe: definir quem recebe, informa e serve os petiscos. Começar com a estrutura disponível e ajustar após o primeiro teste.",
    6:"Cena 1: o cliente ainda vai pedir. Duas pessoas chegaram e estão esperando atendimento. A atendente indica o lugar. Atendente: Boa noite! Vocês podem aguardar aqui. Atendente: Enquanto escolhem a pizza, querem conhecer os petiscos? Cliente: Pode mostrar o cardápio, por favor.",
    7:"Cena 2: a pizza está no preparo. A família já pediu e quer saber como está a pizza. Cliente: Nossa pizza ainda vai demorar? Atendente: Vou conferir com a cozinha e já aviso vocês. Atendente: A pizza está no preparo. Querem ver as opções de petiscos?",
    9:"Obrigado pela atenção de todos. Sabores que conectam. Fotografia de uma mesa de restaurante com pão, taças e iluminação aconchegante."
  };
  const steps=[
    {n:1,name:"Acolher",body:"Receber o cliente e entender em qual momento da espera ele está.",image:"./images/acolher.webp",alt:"Atendente recebendo clientes na pizzaria"},
    {n:2,name:"Informar",body:"Consultar a previsão e apresentar as opções com valores claros.",image:"./images/informar.webp",alt:"Atendente mostrando opções do cardápio"},
    {n:3,name:"Confirmar",body:"Ouvir a escolha e servir somente os itens solicitados.",image:"./images/confirmar.webp",alt:"Atendente registrando o pedido"},
    {n:4,name:"Acompanhar",body:"Atualizar o cliente e avisar quando a pizza estiver pronta.",image:"./images/acompanhar.webp",alt:"Atendente acompanhando o pedido na mesa"}
  ];
  const cases=[
    {title:"Cliente não quer consumir",action:"Respeitar a escolha.",quote:"Sem problema! Fiquem à vontade.",image:"./images/respeitar.webp",alt:"Equipe atendendo clientes à mesa"},
    {title:"Pizza atrasada",action:"Conferir a situação e atualizar a previsão.",quote:"Vou verificar o pedido e trazer uma posição.",image:"./images/atraso.webp",alt:"Equipe acompanhando o preparo da pizza"},
    {title:"Espaço cheio",action:"Organizar a espera e manter a passagem livre.",quote:"Vou conferir um lugar para vocês aguardarem.",image:"./images/cheio.webp",alt:"Equipe organizando a espera na pizzaria"}
  ];
  function cover(){
    return `<article class="design-slide slide-cover" aria-labelledby="cover-title">
      <div class="cover-copy"><p class="slide-kicker">Inovação no atendimento</p>
      <h1 id="cover-title">Petiscos <em>na espera</em></h1>
      <p class="cover-lead">Acolhimento que começa antes da pizza chegar.</p>
      <p class="cover-support">Petiscos opcionais, informação clara e conforto para quem aguarda.</p>
      <div class="slide-foot"><span>A proposta</span><strong>01 / 09</strong></div></div>
      <figure class="cover-picture"><img src="./images/cover.webp" alt="Pão de alho, bruschettas e bolinhos de queijo sobre uma mesa de madeira" decoding="async">
      <figcaption>Pequenos cuidados fazem a espera valer mais.</figcaption></figure>
    </article>`;
  }
  function service(){
    return `<section class="design-slide slide-service" aria-labelledby="service-title">
      <div class="slide-heading"><div><p class="slide-kicker">O serviço</p><h1 id="service-title">Da chegada <em>à entrega</em></h1></div>
      <p>Quatro atitudes para tornar a espera mais acolhedora.</p></div>
      <div class="service-grid">${steps.map(x=>`<article class="service-card">
        <img src="${esc(x.image)}" alt="${esc(x.alt)}" loading="eager" decoding="async">
        <div class="service-copy"><h2><span>${x.n}</span>${esc(x.name)}</h2><p>${esc(x.body)}</p></div>
      </article>`).join("")}</div>
      <div class="slide-footer"><p>A pizza continua sendo a prioridade. Os petiscos não devem aumentar a demora.</p><strong>05 / 09</strong></div>
    </section>`;
  }
  function care(){
    return `<section class="design-slide slide-care" aria-labelledby="care-title">
      <div class="slide-heading"><div><p class="slide-kicker">Dia a dia</p><h1 id="care-title">Três situações <em>do salão</em></h1></div>
      <p>Responder com respeito, organização e informações reais.</p></div>
      <div class="care-grid">${cases.map(x=>`<article class="care-card">
        <img src="${esc(x.image)}" alt="${esc(x.alt)}" loading="eager" decoding="async">
        <div class="care-copy"><h2>${esc(x.title)}</h2><p>${esc(x.action)}</p><blockquote>“${esc(x.quote)}”</blockquote></div>
      </article>`).join("")}</div>
      <div class="slide-footer"><p>Nunca prometer um prazo não confirmado nem cobrar sem informar o preço.</p><strong>08 / 09</strong></div>
    </section>`;
  }
  function raster(slide){
    return `<div class="slide-image"><img src="${esc(SLIDE_IMAGES[slide.id-1])}" width="1672" height="941" alt="${esc(`Slide ${slide.id} de ${SLIDES.length}: ${slide.title} ${slide.italic||""}. ${details[slide.id]||slide.lead||""}`)}" decoding="async" draggable="false"></div>`;
  }
  let current=0;
  let notesOpen=false;
  let overviewOpen=false;
  function focusStage(){stage.focus({preventScroll:true});}
  function writeNotes(){
    const s=SLIDES[current];
    notesBody.innerHTML=`<h3>${esc(s.label)} — ${esc(s.title)} ${esc(s.italic||"")}</h3><ol>${s.speech.map(line=>`<li>${line.speaker?`<b>${esc(line.speaker)}:</b> `:""}${esc(line.text)}</li>`).join("")}</ol>${s.gesture?`<p><b>Gesto sugerido:</b> ${esc(s.gesture)}</p>`:""}`;
  }
  function writeOverview(){
    overviewList.innerHTML=SLIDES.map((s,i)=>`<button class="overview-item ${current===i?"active":""}" type="button" data-slide="${i}" aria-current="${current===i?"true":"false"}"><img src="${esc(SLIDE_IMAGES[i])}" alt="" loading="lazy"><span><strong>${String(i+1).padStart(2,"0")}</strong> ${esc(s.title)} ${esc(s.italic||"")}</span></button>`).join("");
  }
  function closeNotes(focus=true){notesOpen=false;notes.hidden=true;if(focus)focusStage();}
  function closeOverview(focus=true){overviewOpen=false;overview.hidden=true;if(focus)focusStage();}
  function toggleNotes(){
    if(notesOpen){closeNotes();return;}
    if(overviewOpen)closeOverview(false);
    notesOpen=true;notes.hidden=false;writeNotes();$("#close-notes").focus();
  }
  function toggleOverview(){
    if(overviewOpen){closeOverview();return;}
    if(notesOpen)closeNotes(false);
    overviewOpen=true;overview.hidden=false;writeOverview();$("#close-overview").focus();
  }
  function draw(){
    const s=SLIDES[current];
    container.innerHTML=s.id===1?cover():s.id===5?service():s.id===8?care():raster(s);
    container.classList.remove("appear");
    void container.offsetWidth;
    container.classList.add("appear");
    status.textContent=`Slide ${s.id} de ${SLIDES.length}: ${s.title} ${s.italic||""}`;
    if(location.hash!==`#${s.id}`)history.replaceState(null,"",`#${s.id}`);
    try{localStorage.setItem("petiscos-deck-index",String(current));}catch{}
    if(notesOpen)writeNotes();
    if(overviewOpen)writeOverview();
  }
  function go(n){const to=Math.max(0,Math.min(SLIDES.length-1,n));if(to!==current){current=to;draw();}}
  function next(){go(current+1);}
  function previous(){go(current-1);}
  function fullscreen(){
    if(document.fullscreenElement){document.exitFullscreen?.().catch(()=>{});return;}
    document.documentElement.requestFullscreen?.().catch(()=>{});
  }
  function showHelp(){if(!help.open)help.showModal();}
  $("#close-notes").addEventListener("click",()=>closeNotes());
  $("#close-overview").addEventListener("click",()=>closeOverview());
  $("#close-help").addEventListener("click",()=>help.close());
  overviewList.addEventListener("click",event=>{
    const button=event.target.closest("[data-slide]");
    if(!button)return;
    const n=Number(button.dataset.slide);
    closeOverview(false);go(n);focusStage();
  });
  window.addEventListener("keydown",event=>{
    if(event.altKey||event.ctrlKey||event.metaKey)return;
    if(event.key==="Escape"){if(notesOpen)closeNotes();if(overviewOpen)closeOverview();return;}
    if(help.open)return;
    if(event.target.closest("button,input,select,textarea,[contenteditable]"))return;
    switch(event.key){
      case "ArrowRight":case "PageDown":case " ":event.preventDefault();next();return;
      case "ArrowLeft":case "PageUp":case "Backspace":event.preventDefault();previous();return;
      case "Home":event.preventDefault();go(0);return;
      case "End":event.preventDefault();go(SLIDES.length-1);return;
      case "?":showHelp();return;
    }
    const key=event.key.toLowerCase();
    if(key==="f")fullscreen();
    else if(key==="s"||key==="r")toggleNotes();
    else if(key==="n")toggleOverview();
  });
  let touchStart=null;
  stage.addEventListener("touchstart",event=>{touchStart=event.changedTouches[0].clientX;},{passive:true});
  stage.addEventListener("touchend",event=>{
    if(touchStart===null)return;
    const dx=event.changedTouches[0].clientX-touchStart;
    touchStart=null;
    if(Math.abs(dx)>55)dx<0?next():previous();
  },{passive:true});
  stage.addEventListener("touchcancel",()=>{touchStart=null;},{passive:true});
  window.addEventListener("hashchange",()=>{
    const n=Number(location.hash.substring(1));
    if(Number.isInteger(n)&&n>=1&&n<=SLIDES.length&&n!==current+1){current=n-1;draw();}
  });
  let saved=0;
  try{saved=Number(localStorage.getItem("petiscos-deck-index"))||0;}catch{}
  const hash=Number(location.hash.substring(1));
  current=Number.isInteger(hash)&&hash>=1&&hash<=SLIDES.length?hash-1:Math.max(0,Math.min(SLIDES.length-1,saved));
  draw();
})();
