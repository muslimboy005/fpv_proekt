/**
 * 13-Step Interactive Assembly Wizard for the FPV Drone build.
 * - Named stage list (sidebar / horizontal strip on small screens)
 * - Progress summary (n / total + percent)
 * - Localized schematic (SVG from js/schematics.js, labels swapped per language)
 * - Step details: description, engineering tip, tools
 */

class AssemblyGuide {
  constructor() {
    this.currentStep = 0;
    this.totalSteps = 13;
    this.schematics = (window.ASSEMBLY_SCHEMATICS && window.ASSEMBLY_SCHEMATICS.length)
      ? window.ASSEMBLY_SCHEMATICS
      : [];
    this.compactQuery = window.matchMedia ? window.matchMedia('(max-width: 1024px)') : null;
    this.init();
  }

  init() {
    this.renderStepList();
    this.bindEvents();
    this.updateStep(0);
  }

  dict() {
    const lang = window.currentLanguage || 'ru';
    return (window.TRANSLATIONS && window.TRANSLATIONS[lang]) || {};
  }

  pad(n) {
    return String(n).padStart(2, '0');
  }

  renderStepList() {
    const container = document.getElementById('assembly-steps-nav');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 0; i < this.totalSteps; i++) {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'step-item';
      btn.setAttribute('data-step-index', i);
      btn.innerHTML = `
        <span class="step-num" aria-hidden="true">
          <span class="num-text">${this.pad(i + 1)}</span>
          <svg class="num-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </span>
        <span class="step-label"></span>
        <span class="step-state"></span>
      `;
      btn.addEventListener('click', () => {
        this.updateStep(i);
        if (window.playSfx) window.playSfx('click');
      });
      li.appendChild(btn);
      container.appendChild(li);
    }
  }

  bindEvents() {
    const prevBtn = document.getElementById('btn-step-prev');
    const nextBtn = document.getElementById('btn-step-next');
    const card = document.getElementById('assembly-wizard');

    if (prevBtn) prevBtn.addEventListener('click', () => this.go(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => this.go(1));

    // Arrow-key navigation while focus is inside the wizard
    if (card) {
      card.addEventListener('keydown', (e) => {
        if (e.target.closest('input, textarea')) return;
        if (e.key === 'ArrowRight') { e.preventDefault(); this.go(1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); this.go(-1); }
      });
    }

    // Full-screen schematic viewer
    const zoomBtn = document.getElementById('schematic-zoom-btn');
    const lightbox = document.getElementById('schematic-lightbox');
    const lbClose = document.getElementById('schematic-lightbox-close');
    if (zoomBtn && lightbox) {
      zoomBtn.addEventListener('click', () => this.openLightbox());
      if (lbClose) lbClose.addEventListener('click', () => this.closeLightbox());
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.id === 'schematic-lightbox-stage') this.closeLightbox();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) this.closeLightbox();
      });
    }
  }

  openLightbox() {
    const lightbox = document.getElementById('schematic-lightbox');
    const stage = document.getElementById('schematic-lightbox-stage');
    const view = document.getElementById('assembly-schematic-view');
    if (!lightbox || !stage || !view) return;
    const dict = this.dict();
    const n = this.currentStep + 1;
    stage.innerHTML = view.innerHTML;
    const title = document.getElementById('schematic-lightbox-title');
    const code = document.getElementById('schematic-lightbox-code');
    if (title) title.innerText = dict[`step${n}_short`] || '';
    if (code) code.innerText = this.pad(n);
    this.lightboxOpener = document.activeElement;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    const closeBtn = document.getElementById('schematic-lightbox-close');
    if (closeBtn) closeBtn.focus();
    if (window.playSfx) window.playSfx('click');
  }

  closeLightbox() {
    const lightbox = document.getElementById('schematic-lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    const opener = this.lightboxOpener;
    if (opener && typeof opener.focus === 'function' && document.contains(opener)) opener.focus();
    this.lightboxOpener = null;
    if (window.playSfx) window.playSfx('click');
  }

  go(delta) {
    const target = this.currentStep + delta;
    if (target < 0 || target >= this.totalSteps) return;
    this.updateStep(target);
    if (window.playSfx) window.playSfx('click');
  }

  updateStep(index) {
    this.currentStep = index;

    // Stage list states
    const items = document.querySelectorAll('#assembly-steps-nav .step-item');
    items.forEach((el, idx) => {
      el.classList.toggle('active', idx === index);
      el.classList.toggle('completed', idx < index);
      if (idx === index) el.setAttribute('aria-current', 'step');
      else el.removeAttribute('aria-current');
    });

    // Keep the active chip visible when the list is a horizontal strip
    const activeEl = items[index];
    const list = activeEl ? activeEl.closest('.steps-list') : null;
    if (activeEl && list && this.compactQuery && this.compactQuery.matches && list.scrollWidth > list.clientWidth) {
      const target = activeEl.offsetLeft - (list.clientWidth / 2) + (activeEl.offsetWidth / 2);
      if (typeof list.scrollTo === 'function') list.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
      else list.scrollLeft = Math.max(0, target);
    }

    // Progress
    const percent = Math.round(((index + 1) / this.totalSteps) * 100);
    const fill = document.getElementById('assembly-progress-fill');
    const bar = document.getElementById('assembly-progress-bar');
    const pct = document.getElementById('assembly-progress-pct');
    if (fill) fill.style.width = `${percent}%`;
    if (bar) bar.setAttribute('aria-valuenow', percent);
    if (pct) pct.innerText = `${percent}%`;

    // Prev / Next
    const prevBtn = document.getElementById('btn-step-prev');
    const nextBtn = document.getElementById('btn-step-next');
    const focused = document.activeElement;
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === this.totalSteps - 1;
    // Keep keyboard focus alive when the focused button just became disabled
    if (prevBtn && prevBtn.disabled && focused === prevBtn && nextBtn) nextBtn.focus();
    if (nextBtn && nextBtn.disabled && focused === nextBtn && prevBtn) prevBtn.focus();

    // Schematic
    const view = document.getElementById('assembly-schematic-view');
    if (view) {
      const data = this.schematics[index];
      view.innerHTML = data ? (typeof data === 'string' ? data : data.svg) : '';
    }
    const code = document.getElementById('schematic-step-code');
    if (code) code.innerText = this.pad(index + 1);

    this.refreshTextContent();
  }

  refreshTextContent() {
    const dict = this.dict();
    const n = this.currentStep + 1;
    const stepKey = `step${n}`;

    const titleEl = document.getElementById('assembly-step-title');
    const descEl = document.getElementById('assembly-step-desc');
    const noteEl = document.getElementById('assembly-step-note');
    const toolsEl = document.getElementById('assembly-step-tools');
    const badgeEl = document.getElementById('assembly-step-badge');
    const progressText = document.getElementById('assembly-progress-text');
    const captionEl = document.getElementById('schematic-caption');

    if (titleEl) titleEl.innerText = dict[`${stepKey}_title`] || '';
    if (descEl) descEl.innerText = dict[`${stepKey}_desc`] || '';
    if (noteEl) noteEl.innerText = dict[`${stepKey}_note`] || '';
    if (toolsEl) toolsEl.innerText = dict[`${stepKey}_tools`] || '';
    if (badgeEl) badgeEl.innerText = `${dict['sec5_step_lbl'] || 'ЭТАП'} ${n} / ${this.totalSteps}`;
    if (progressText) progressText.innerText = `${n} / ${this.totalSteps}`;
    if (captionEl) captionEl.innerText = dict[`${stepKey}_short`] || '';

    // Stage list labels + status words
    document.querySelectorAll('#assembly-steps-nav .step-item').forEach((el, idx) => {
      const label = el.querySelector('.step-label');
      const state = el.querySelector('.step-state');
      const short = dict[`step${idx + 1}_short`] || '';
      if (label) label.innerText = short;
      if (state) {
        if (idx < this.currentStep) state.innerText = dict['sec5_status_done'] || '';
        else if (idx === this.currentStep) state.innerText = dict['sec5_status_current'] || '';
        else state.innerText = '';
      }
      const stateWord = idx < this.currentStep ? (dict['sec5_status_done'] || '')
        : idx === this.currentStep ? (dict['sec5_status_current'] || '') : '';
      el.setAttribute('aria-label', `${idx + 1}. ${short}${stateWord ? ', ' + stateWord : ''}`);
    });

    this.applySchematicLabels();
  }

  applySchematicLabels() {
    const lang = window.currentLanguage || 'ru';
    const data = this.schematics[this.currentStep];
    if (!data || typeof data === 'string' || !data.labels) return;

    document.querySelectorAll('#assembly-schematic-view [data-l]').forEach((el) => {
      const key = el.getAttribute('data-l');
      const v = data.labels[key];
      if (!v) return;
      el.textContent = v[lang] || v.en || v.ru || '';
    });
  }
}

window.AssemblyGuide = AssemblyGuide;
