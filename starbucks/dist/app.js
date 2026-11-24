(() => {
  'use strict';
  const slides = Array.from(document.querySelectorAll('.slide'));
  const ids = new Map(slides.map((slide, index) => [slide.id, index]));
  const byId = id => document.getElementById(id);
  const prev = byId('prevButton');
  const next = byId('nextButton');
  const readingButton = byId('readingButton');
  const fullscreenButton = byId('fullscreenButton');
  const dialog = byId('contentsDialog');
  const contentsNav = byId('contentsNav');
  const segmentNav = byId('segmentNav');
  let current = ids.get(location.hash.slice(1)) ?? 0;
  let reading = false;
  let toastTimeout;
  let observer;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const pad = number => String(number).padStart(2, '0');

  slides.forEach((slide, index) => {
    slide.setAttribute('role', 'region');
    const segment = document.createElement('button');
    segment.type = 'button';
    segment.title = `${pad(index + 1)} · ${slide.dataset.title}`;
    segment.setAttribute('aria-label', `Capítulo ${index + 1}: ${slide.dataset.title}`);
    segment.dataset.index = String(index);
    segment.addEventListener('click', () => go(index, {focus: true}));
    segmentNav.append(segment);
    const item = document.createElement('button');
    item.type = 'button';
    item.dataset.index = String(index);
    const number = document.createElement('span');
    number.textContent = pad(index + 1);
    item.append(number, document.createTextNode(slide.dataset.title));
    item.addEventListener('click', () => {
      dialog.close();
      go(index, {focus: true});
    });
    contentsNav.append(item);
  });

  function announce(message) {
    byId('announcement').textContent = message;
  }

  function updateControls() {
    byId('currentNumber').textContent = pad(current + 1);
    byId('totalNumber').textContent = pad(slides.length);
    byId('chapterName').textContent = slides[current].dataset.title;
    byId('progressFill').style.width = `${(current + 1) / slides.length * 100}%`;
    byId('progress').setAttribute('aria-valuenow', String(current + 1));
    byId('progress').setAttribute('aria-valuemax', String(slides.length));
    byId('progress').setAttribute('aria-valuetext', `Capítulo ${current + 1} de ${slides.length}: ${slides[current].dataset.title}`);
    prev.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    [segmentNav, contentsNav].forEach(nav => {
      nav.querySelectorAll('button').forEach((button, index) => {
        button.classList.toggle('visited', index < current);
        if (index === current) button.setAttribute('aria-current', 'step');
        else button.removeAttribute('aria-current');
      });
    });
  }

  function saveHash() {
    const hash = `#${slides[current].id}`;
    if (location.hash !== hash) history.replaceState(null, '', hash);
  }

  function focusHeading() {
    slides[current].querySelector('h1, h2').focus({preventScroll: true});
  }

  function go(index, {focus = false, scroll = true, hash = true} = {}) {
    current = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, position) => {
      slide.hidden = !reading && position !== current;
      slide.classList.toggle('active', position === current);
    });
    updateControls();
    if (hash) saveHash();
    if (reading && scroll) slides[current].scrollIntoView({behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start'});
    else if (scroll) window.scrollTo({top: 0, behavior: 'instant'});
    if (focus) focusHeading();
    announce(`Capítulo ${current + 1} de ${slides.length}. ${slides[current].dataset.title}.`);
  }

  function notify(message) {
    const toast = byId('toast');
    clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.hidden = false;
    toastTimeout = setTimeout(() => { toast.hidden = true; }, 3800);
  }

  function observeReading() {
    observer?.disconnect();
    if (!reading || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting);
      if (!visible.length) return;
      visible.sort((a, b) => Math.abs(a.boundingClientRect.top - 100) - Math.abs(b.boundingClientRect.top - 100));
      current = ids.get(visible[0].target.id);
      updateControls();
      saveHash();
    }, {rootMargin: '-90px 0px -65% 0px', threshold: 0});
    slides.forEach(slide => observer.observe(slide));
  }

  function setReading(value) {
    reading = value;
    document.body.classList.toggle('reading-mode', reading);
    readingButton.setAttribute('aria-pressed', String(reading));
    readingButton.title = reading ? 'Voltar aos slides' : 'Ler todos os capítulos';
    go(current, {scroll: false});
    observeReading();
    if (reading) slides[current].scrollIntoView({behavior: 'instant', block: 'start'});
    else window.scrollTo({top: 0, behavior: 'instant'});
    notify(reading ? 'Modo leitura: todos os capítulos em uma página.' : 'Modo apresentação ativado.');
  }

  prev.addEventListener('click', () => go(current - 1, {focus: true}));
  next.addEventListener('click', () => go(current + 1, {focus: true}));
  readingButton.addEventListener('click', () => setReading(!reading));
  byId('contentsButton').addEventListener('click', () => dialog.showModal());
  byId('closeContents').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  document.querySelectorAll('[data-go], [data-source]').forEach(element => element.addEventListener('click', event => {
    event.preventDefault();
    go(ids.get(element.dataset.go || element.dataset.source), {focus: true});
  }));
  document.querySelector('.wordmark').addEventListener('click', event => {
    event.preventDefault();
    go(0, {focus: true});
  });

  fullscreenButton.addEventListener('click', async () => {
    if (!document.fullscreenEnabled || !document.documentElement.requestFullscreen) {
      notify('Use o modo de tela cheia do navegador para apresentar.');
      return;
    }
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else {
        if (reading) setReading(false);
        await document.documentElement.requestFullscreen();
      }
    } catch {
      notify('A tela cheia não está disponível neste navegador.');
    }
  });
  document.addEventListener('fullscreenchange', () => {
    const active = Boolean(document.fullscreenElement);
    fullscreenButton.setAttribute('aria-pressed', String(active));
    fullscreenButton.setAttribute('aria-label', active ? 'Sair da tela cheia' : 'Apresentar');
    fullscreenButton.querySelector('span').textContent = active ? 'Sair da tela cheia' : 'Apresentar';
    fullscreenButton.title = active ? 'Sair da tela cheia' : 'Apresentar em tela cheia';
  });

  document.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || dialog.open) return;
    const target = event.target;
    if (target instanceof HTMLElement && (target.isContentEditable || target.closest('input, textarea, select, button, a'))) return;
    const key = event.key;
    if (key.toLowerCase() === 'm') {
      event.preventDefault();
      dialog.showModal();
      return;
    }
    if (reading) return;
    if (key === 'ArrowRight' || key === 'PageDown' || key === ' ') {
      event.preventDefault();
      go(current + (event.shiftKey && key === ' ' ? -1 : 1));
    } else if (key === 'ArrowLeft' || key === 'PageUp') {
      event.preventDefault();
      go(current - 1);
    } else if (key === 'Home') {
      event.preventDefault();
      go(0);
    } else if (key === 'End') {
      event.preventDefault();
      go(slides.length - 1);
    }
  });
  window.addEventListener('hashchange', () => {
    const target = ids.get(location.hash.slice(1));
    if (target !== undefined) go(target, {hash: false, focus: true});
  });
  byId('printButton').addEventListener('click', () => window.print());
  go(current, {scroll: false, hash: false});
})();
