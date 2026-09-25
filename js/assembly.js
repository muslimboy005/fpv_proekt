/**
 * 13-Step Interactive Assembly Pipeline for FPV Drone
 * Handles step navigation, schematics rendering, and technical tips.
 */

class AssemblyGuide {
  constructor() {
    this.currentStep = 0;
    this.totalSteps = 13;

    // Schematic vector graphics & wiring diagrams for each step
    this.schematics = [
      // Step 1: Frame
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <g stroke="#00f0ff" stroke-width="2" fill="none">
          <!-- Ducts -->
          <circle cx="210" cy="110" r="60" stroke-dasharray="4 2"/>
          <circle cx="390" cy="110" r="60" stroke-dasharray="4 2"/>
          <circle cx="210" cy="210" r="60" stroke-dasharray="4 2"/>
          <circle cx="390" cy="210" r="60" stroke-dasharray="4 2"/>
          <!-- Central Carbon Frame -->
          <rect x="250" y="90" width="100" height="140" rx="8" fill="#151d2f" stroke="#00f0ff"/>
          <!-- Rubber Grommets -->
          <circle cx="270" cy="115" r="7" fill="#f59e0b"/>
          <circle cx="330" cy="115" r="7" fill="#f59e0b"/>
          <circle cx="270" cy="205" r="7" fill="#f59e0b"/>
          <circle cx="330" cy="205" r="7" fill="#f59e0b"/>
        </g>
        <!-- Annotations -->
        <path d="M 120 70 L 180 90" stroke="#00f0ff" stroke-width="1.5" marker-end="url(#arrow)"/>
        <text x="50" y="65" fill="#00f0ff" font-size="12" font-family="monospace">PA12 DUCT RIM (x4)</text>
        <path d="M 460 230 L 335 208" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="470" y="235" fill="#f59e0b" font-size="12" font-family="monospace">ANTI-VIBRATION GROMMET (x4)</text>
        <text x="300" y="165" fill="#ffffff" font-size="13" text-anchor="middle" font-weight="bold">PAVO25 BASE</text>
      </svg>
      `,

      // Step 2: Motors
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <g stroke="#9333ea" stroke-width="2" fill="none">
          <circle cx="200" cy="160" r="50" fill="#1b122c"/>
          <circle cx="200" cy="160" r="30" fill="#3b0764"/>
          <circle cx="200" cy="160" r="8" fill="#d8b4fe"/>
          <!-- 3-wire phase bundle -->
          <path d="M 230 180 Q 300 220 370 170" stroke="#f43f5e" stroke-width="3"/>
          <path d="M 230 185 Q 300 228 370 177" stroke="#3b82f6" stroke-width="3"/>
          <path d="M 230 190 Q 300 236 370 184" stroke="#10b981" stroke-width="3"/>
          <!-- Screws -->
          <circle cx="180" cy="140" r="3" fill="#60a5fa"/>
          <circle cx="220" cy="140" r="3" fill="#60a5fa"/>
          <circle cx="180" cy="180" r="3" fill="#60a5fa"/>
          <circle cx="220" cy="180" r="3" fill="#60a5fa"/>
        </g>
        <text x="140" y="70" fill="#d8b4fe" font-size="14" font-weight="bold">BETAFPV 1404 4500KV (PUSHER MOUNT)</text>
        <text x="385" y="175" fill="#f43f5e" font-size="12" font-family="monospace">MOTOR PHASE WIRES (3x)</text>
        <text x="110" y="245" fill="#60a5fa" font-size="12" font-family="monospace">M2 BOLTS + LOCTITE 242</text>
      </svg>
      `,

      // Step 3: ESC & Low ESR Cap
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <rect x="180" y="60" width="240" height="200" rx="10" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
        <!-- Power pads -->
        <rect x="195" y="75" width="25" height="15" fill="#fbbf24"/>
        <text x="207" y="87" fill="#000" font-size="10" text-anchor="middle" font-weight="bold">+</text>
        <rect x="195" y="100" width="25" height="15" fill="#fbbf24"/>
        <text x="207" y="112" fill="#000" font-size="10" text-anchor="middle" font-weight="bold">-</text>
        <!-- Capacitor -->
        <rect x="90" y="80" width="70" height="35" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="125" y="102" fill="#38bdf8" font-size="11" text-anchor="middle">35V 470uF</text>
        <line x1="160" y1="83" x2="195" y2="83" stroke="#ef4444" stroke-width="3"/>
        <line x1="160" y1="107" x2="195" y2="107" stroke="#111827" stroke-width="3"/>
        <!-- XT30 Pigtail -->
        <path d="M 220 83 L 300 40" stroke="#ef4444" stroke-width="4"/>
        <path d="M 220 107 L 315 55" stroke="#111827" stroke-width="4"/>
        <rect x="300" y="30" width="40" height="22" rx="4" fill="#eab308"/>
        <text x="320" y="45" fill="#000" font-size="10" font-weight="bold" text-anchor="middle">XT30</text>
        <text x="300" y="170" fill="#ffffff" font-size="14" text-anchor="middle" font-weight="bold">20A 4-in-1 ESC STACK</text>
        <text x="300" y="195" fill="#94a3b8" font-size="12" text-anchor="middle">BLHeli_S / Bluejay DShot300</text>
      </svg>
      `,

      // Step 4: Flight Controller Mounting
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <g stroke="#10b981" stroke-width="2" fill="none">
          <rect x="200" y="70" width="200" height="180" rx="12" fill="#064e3b"/>
          <circle cx="225" cy="95" r="8" fill="#047857"/>
          <circle cx="375" cy="95" r="8" fill="#047857"/>
          <circle cx="225" cy="225" r="8" fill="#047857"/>
          <circle cx="375" cy="225" r="8" fill="#047857"/>
          <!-- STM32 Chip -->
          <rect x="270" y="130" width="60" height="60" fill="#0f172a" stroke="#34d399"/>
          <text x="300" y="165" fill="#34d399" font-size="10" text-anchor="middle" font-weight="bold">STM32F405</text>
        </g>
        <text x="300" y="45" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">SOFT-MOUNTED F405 AIO BOARD</text>
        <text x="300" y="275" fill="#6ee7b7" font-size="12" text-anchor="middle" font-family="monospace">8kHz Gyro Sampling / OSD / Barometer</text>
      </svg>
      `,

      // Step 5: ELRS Receiver
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <!-- Receiver board -->
        <rect x="80" y="100" width="130" height="90" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="2"/>
        <text x="145" y="145" fill="#c7d2fe" font-size="12" font-weight="bold" text-anchor="middle">ELRS 2.4G RX</text>
        <!-- FC Board -->
        <rect x="360" y="80" width="180" height="140" rx="8" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
        <text x="450" y="150" fill="#00f0ff" font-size="14" font-weight="bold" text-anchor="middle">FC UART 1</text>
        <!-- Wiring Lines -->
        <line x1="210" y1="115" x2="360" y2="95" stroke="#ef4444" stroke-width="2.5"/>
        <text x="280" y="100" fill="#ef4444" font-size="11" font-family="monospace">5V → 5V</text>
        <line x1="210" y1="135" x2="360" y2="120" stroke="#64748b" stroke-width="2.5"/>
        <text x="280" y="125" fill="#94a3b8" font-size="11" font-family="monospace">GND → GND</text>
        <line x1="210" y1="155" x2="360" y2="145" stroke="#10b981" stroke-width="2.5"/>
        <text x="280" y="150" fill="#10b981" font-size="11" font-family="monospace">RX → TX1</text>
        <line x1="210" y1="175" x2="360" y2="170" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="280" y="173" fill="#f59e0b" font-size="11" font-family="monospace">TX → RX1 (CRSF)</text>
      </svg>
      `,

      // Step 6: FPV Camera
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <!-- Camera side view -->
        <g transform="translate(150, 100) rotate(-15)">
          <rect x="0" y="0" width="80" height="80" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <path d="M 80 20 L 110 10 L 110 70 L 80 60 Z" fill="#0284c7"/>
          <circle cx="112" cy="40" r="14" fill="#38bdf8" opacity="0.8"/>
        </g>
        <text x="140" y="60" fill="#38bdf8" font-size="14" font-weight="bold">15-20° TILT ANGLE</text>
        <!-- Wiring to OSD -->
        <rect x="380" y="100" width="140" height="100" rx="8" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
        <text x="450" y="145" fill="#00f0ff" font-size="13" font-weight="bold" text-anchor="middle">OSD CHIP</text>
        <path d="M 230 140 Q 300 130 380 135" stroke="#eab308" stroke-width="3"/>
        <text x="290" y="125" fill="#eab308" font-size="11" font-family="monospace">CAM_IN (Video)</text>
      </svg>
      `,

      // Step 7: VTX
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <rect x="100" y="80" width="160" height="150" rx="10" fill="#334155" stroke="#f43f5e" stroke-width="2"/>
        <text x="180" y="140" fill="#f43f5e" font-size="14" font-weight="bold" text-anchor="middle">TINY ROCKET VTX</text>
        <text x="180" y="165" fill="#ffffff" font-size="12" text-anchor="middle">5.8GHz / 400mW</text>
        <!-- Antenna port -->
        <circle cx="180" cy="80" r="8" fill="#e2e8f0"/>
        <line x1="180" y1="80" x2="180" y2="35" stroke="#e2e8f0" stroke-width="4"/>
        <circle cx="180" cy="30" r="12" fill="#ec4899"/>
        <text x="210" y="35" fill="#ec4899" font-size="12" font-family="monospace">U.FL ANTENNA</text>
        <!-- FC VTX OUT -->
        <rect x="380" y="80" width="140" height="150" rx="10" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
        <text x="450" y="140" fill="#00f0ff" font-size="13" font-weight="bold" text-anchor="middle">FC BOARD</text>
        <line x1="260" y1="120" x2="380" y2="120" stroke="#10b981" stroke-width="2.5"/>
        <text x="280" y="112" fill="#10b981" font-size="11" font-family="monospace">SmartAudio</text>
        <line x1="260" y1="150" x2="380" y2="150" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="280" y="142" fill="#f59e0b" font-size="11" font-family="monospace">VTX_OUT</text>
      </svg>
      `,

      // Step 8: Antenna
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <path d="M 300 240 L 300 120" stroke="#64748b" stroke-width="6"/>
        <circle cx="300" cy="100" r="22" fill="#9333ea" stroke="#d8b4fe" stroke-width="3"/>
        <!-- Radiation waves -->
        <path d="M 260 70 A 55 55 0 0 1 340 70" stroke="#00f0ff" stroke-width="2" fill="none" stroke-dasharray="4 2"/>
        <path d="M 240 50 A 85 85 0 0 1 360 50" stroke="#00f0ff" stroke-width="2" fill="none" stroke-dasharray="6 3"/>
        <path d="M 220 30 A 115 115 0 0 1 380 30" stroke="#00f0ff" stroke-width="2" fill="none" stroke-dasharray="8 4"/>
        <text x="300" y="280" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">5.8GHz MICRO RHCP POLARIZATION</text>
      </svg>
      `,

      // Step 9: Battery & LED
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <!-- Battery -->
        <rect x="200" y="90" width="200" height="85" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="300" y="130" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">4S 850mAh 75C LiPo</text>
        <text x="300" y="155" fill="#94a3b8" font-size="12" text-anchor="middle">14.8V High Discharge</text>
        <!-- Strap -->
        <rect x="280" y="70" width="40" height="125" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="2" opacity="0.9"/>
        <text x="300" y="60" fill="#f59e0b" font-size="12" text-anchor="middle" font-weight="bold">KEVLAR STRAP</text>
        <!-- Neon LED Ring -->
        <circle cx="150" cy="220" r="30" stroke="#00f0ff" stroke-width="4" fill="none"/>
        <circle cx="450" cy="220" r="30" stroke="#00f0ff" stroke-width="4" fill="none"/>
        <text x="300" y="240" fill="#00f0ff" font-size="13" font-weight="bold" text-anchor="middle">PAVO25 NEON LED STRIP (5V)</text>
      </svg>
      `,

      // Step 10: Betaflight
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <rect x="80" y="40" width="440" height="240" rx="10" fill="#0a0e17" stroke="#eab308" stroke-width="2"/>
        <!-- Betaflight UI Header -->
        <rect x="80" y="40" width="440" height="30" fill="#1e293b" rx="10"/>
        <text x="100" y="60" fill="#eab308" font-size="12" font-weight="bold">BETAFLIGHT CONFIGURATOR // PAVO25</text>
        <!-- Config tabs -->
        <text x="110" y="110" fill="#ffffff" font-size="12">1. Ports: UART1 Serial RX | UART2 SmartAudio</text>
        <text x="110" y="140" fill="#ffffff" font-size="12">2. Configuration: DShot300 | Props Out (Reversed)</text>
        <text x="110" y="170" fill="#ffffff" font-size="12">3. PID Tuning: Cinewhoop Cinematic Profile 1</text>
        <text x="110" y="200" fill="#ffffff" font-size="12">4. Modes: ARM (AUX1) | ANGLE / ACRO (AUX2)</text>
        <text x="110" y="230" fill="#10b981" font-size="12" font-weight="bold">✓ GYRO ACCELEROMETER CALIBRATED</text>
      </svg>
      `,

      // Step 11: Smoke Stopper
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <rect x="180" y="100" width="240" height="110" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <circle cx="230" cy="155" r="16" fill="#10b981"/>
        <text x="230" y="160" fill="#ffffff" font-size="12" text-anchor="middle" font-weight="bold">OK</text>
        <text x="320" y="145" fill="#ffffff" font-size="14" font-weight="bold">SMOKE STOPPER</text>
        <text x="320" y="170" fill="#10b981" font-size="12" font-family="monospace">NO SHORT CIRCUITS</text>
        <text x="300" y="260" fill="#64748b" font-size="12" text-anchor="middle">Current draw: 0.12A @ 15.2V</text>
      </svg>
      `,

      // Step 12: Props Installation
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <!-- 4 Propellers in Props Out Direction -->
        <g transform="translate(180, 110)">
          <circle cx="0" cy="0" r="45" stroke="#38bdf8" stroke-width="2" fill="none" stroke-dasharray="4 2"/>
          <text x="0" y="5" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="bold">M4: CW ↷</text>
        </g>
        <g transform="translate(420, 110)">
          <circle cx="0" cy="0" r="45" stroke="#38bdf8" stroke-width="2" fill="none" stroke-dasharray="4 2"/>
          <text x="0" y="5" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="bold">M2: CCW ↶</text>
        </g>
        <g transform="translate(180, 220)">
          <circle cx="0" cy="0" r="45" stroke="#38bdf8" stroke-width="2" fill="none" stroke-dasharray="4 2"/>
          <text x="0" y="5" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="bold">M3: CCW ↶</text>
        </g>
        <g transform="translate(420, 220)">
          <circle cx="0" cy="0" r="45" stroke="#38bdf8" stroke-width="2" fill="none" stroke-dasharray="4 2"/>
          <text x="0" y="5" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="bold">M1: CW ↷</text>
        </g>
        <text x="300" y="45" fill="#00f0ff" font-size="14" font-weight="bold" text-anchor="middle">PROPS OUT (REVERSED) CONFIGURATION</text>
      </svg>
      `,

      // Step 13: Ready to Fly
      `
      <svg viewBox="0 0 600 320" class="assembly-svg">
        <rect width="600" height="320" fill="#0b111e" rx="12"/>
        <g stroke="#10b981" stroke-width="3" fill="none">
          <circle cx="300" cy="140" r="60"/>
          <path d="M 270 140 L 290 160 L 335 115"/>
        </g>
        <text x="300" y="240" fill="#10b981" font-size="16" font-weight="bold" text-anchor="middle">BETAFPV PAVO25 READY FOR MAIDEN FLIGHT</text>
        <text x="300" y="270" fill="#94a3b8" font-size="12" text-anchor="middle">Telemetry Locked // Video 5.8GHz Clear // Arm Enabled</text>
      </svg>
      `
    ];

    this.init();
  }

  init() {
    this.renderTimelineChips();
    this.bindEvents();
    this.updateStep(0);
  }

  renderTimelineChips() {
    const container = document.getElementById('assembly-steps-nav');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 0; i < this.totalSteps; i++) {
      const chip = document.createElement('button');
      chip.className = `step-chip ${i === 0 ? 'active' : ''}`;
      chip.setAttribute('data-step-index', i);
      chip.innerHTML = `
        <span class="chip-num">${i + 1}</span>
        <span class="chip-status">✓</span>
      `;
      chip.addEventListener('click', () => {
        this.updateStep(i);
        if (window.playSfx) window.playSfx('click');
      });
      container.appendChild(chip);
    }
  }

  bindEvents() {
    const prevBtn = document.getElementById('btn-step-prev');
    const nextBtn = document.getElementById('btn-step-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentStep > 0) {
          this.updateStep(this.currentStep - 1);
          if (window.playSfx) window.playSfx('click');
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentStep < this.totalSteps - 1) {
          this.updateStep(this.currentStep + 1);
          if (window.playSfx) window.playSfx('click');
        }
      });
    }
  }

  updateStep(index) {
    this.currentStep = index;

    // Update Chips
    const chips = document.querySelectorAll('.step-chip');
    chips.forEach((c, idx) => {
      c.classList.toggle('active', idx === index);
      c.classList.toggle('completed', idx < index);
    });

    // Update Progress Bar
    const percent = Math.round(((index + 1) / this.totalSteps) * 100);
    const progressFill = document.getElementById('assembly-progress-fill');
    const progressText = document.getElementById('assembly-progress-text');
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressText) progressText.innerText = `${percent}%`;

    // Update Prev / Next button states
    const prevBtn = document.getElementById('btn-step-prev');
    const nextBtn = document.getElementById('btn-step-next');
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === this.totalSteps - 1;

    // Update Schematic SVG
    const schematicContainer = document.getElementById('assembly-schematic-view');
    if (schematicContainer) {
      schematicContainer.innerHTML = this.schematics[index] || '';
    }

    // Update Text Content via Translation
    this.refreshTextContent();
  }

  refreshTextContent() {
    const stepKey = `step${this.currentStep + 1}`;
    const lang = window.currentLanguage || 'ru';
    const dict = (window.TRANSLATIONS && window.TRANSLATIONS[lang]) || {};

    const titleEl = document.getElementById('assembly-step-title');
    const descEl = document.getElementById('assembly-step-desc');
    const noteEl = document.getElementById('assembly-step-note');
    const toolsEl = document.getElementById('assembly-step-tools');
    const badgeEl = document.getElementById('assembly-step-badge');

    if (titleEl) titleEl.innerText = dict[`${stepKey}_title`] || '';
    if (descEl) descEl.innerText = dict[`${stepKey}_desc`] || '';
    if (noteEl) noteEl.innerText = dict[`${stepKey}_note`] || '';
    if (toolsEl) toolsEl.innerText = dict[`${stepKey}_tools`] || '';
    if (badgeEl) badgeEl.innerText = `${dict['sec5_step_lbl'] || 'ЭТАП'} ${this.currentStep + 1} / ${this.totalSteps}`;
  }
}

window.AssemblyGuide = AssemblyGuide;
