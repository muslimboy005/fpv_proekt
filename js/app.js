/**
 * AERO-FPV Main Application Controller
 * Handles:
 * - Language Switching (RU / UZ / EN)
 * - Web Audio API Sound Effects (Betaflight boot sequence & click)
 * - HUD OSD Simulator Mode & Telemetry
 * - Drone Type Category Filtering
 * - Signal Flow Chain Interactive Animation
 * - Component Inspection Modal
 */

// Global State
window.currentLanguage = localStorage.getItem('aero_fpv_lang') || 'ru';
window.soundEnabled = true;

// Web Audio API Synthesizer
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

window.playSfx = function(type) {
  if (!window.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'beep' || type === 'boot') {
      // Classic Betaflight ESC 5-Tone Boot Chime!
      const tones = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      tones.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const start = now + idx * 0.11;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.09, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.09);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.09);
      });
    } else if (type === 'alarm') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.setValueAtTime(660, now + 0.1);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  } catch (e) {
    console.warn("Audio error:", e);
  }
};

// Language Switcher Engine
function setLanguage(lang) {
  if (!window.TRANSLATIONS || !window.TRANSLATIONS[lang]) return;
  window.currentLanguage = lang;
  localStorage.setItem('aero_fpv_lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update active state in UI buttons
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  const dict = window.TRANSLATIONS[lang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      // Check if text has HTML tags
      if (dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.innerText = dict[key];
      }
    }
  });

  // Update Assembly Guide text if initialized
  if (window.assemblyGuide) {
    window.assemblyGuide.refreshTextContent();
  }
}

// Category Filter Engine
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.drone-type-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      window.playSfx('click');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Telemetry & OSD Simulation
let osdActive = false;
let flightTimerSeconds = 168; // 2m 48s

function initOsdSimulation() {
  const osdOverlay = document.getElementById('fpv-osd-overlay');
  const toggleBtn = document.getElementById('btn-osd-toggle');
  const exitBtn = document.getElementById('btn-osd-exit');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      osdActive = !osdActive;
      if (osdOverlay) {
        osdOverlay.classList.toggle('active', osdActive);
      }
      toggleBtn.classList.toggle('active', osdActive);
      window.playSfx(osdActive ? 'boot' : 'click');
    });
  }

  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      osdActive = false;
      if (osdOverlay) osdOverlay.classList.remove('active');
      if (toggleBtn) toggleBtn.classList.remove('active');
      window.playSfx('click');
    });
  }

  // Periodic Telemetry Fluctuations
  setInterval(() => {
    flightTimerSeconds++;
    const mins = Math.floor(flightTimerSeconds / 60).toString().padStart(2, '0');
    const secs = (flightTimerSeconds % 60).toString().padStart(2, '0');

    // Voltage slight sag
    const voltBase = 15.6 + (Math.sin(flightTimerSeconds * 0.1) * 0.2);
    const voltageStr = `${voltBase.toFixed(1)}V`;

    // RSSI variation
    const rssi = 95 + Math.floor(Math.sin(flightTimerSeconds * 0.2) * 4);

    document.querySelectorAll('.osd-time-val').forEach(el => el.innerText = `${mins}:${secs}`);
    document.querySelectorAll('.osd-volt-val').forEach(el => el.innerText = voltageStr);
    document.querySelectorAll('.osd-rssi-val').forEach(el => el.innerText = `${rssi}%`);
  }, 1000);
}

// Component Modal Data & Logic
const COMPONENT_DETAILS = {
  frame: {
    title: { ru: "Рама BetaFPV Pavo25 Frame Kit", uz: "BetaFPV Pavo25 ramasi", en: "BetaFPV Pavo25 Frame Kit" },
    img: "assets/images/user/parts/part_frame.jpg",
    specs: [
      { k: "Wheelbase", v: "108 mm" },
      { k: "Material", v: "PA12 Injection Monocoque + 2.5mm Carbon" },
      { k: "Weight", v: "~68 g" },
      { k: "Motor Mount", v: "9x9mm M2" },
      { k: "Prop Clearance", v: "D63 (2.5 inch)" }
    ],
    desc: {
      ru: "Литая высокопрочная конструкция с кольцевыми дактами. Толкающая (pusher) конфигурация моторов увеличивает аэродинамический КПД и снижает турбулентность на малом газу.",
      uz: "Aylanma daktli mustahkam monokok korpus. Itaruvchi (pusher) sxema parvoz samaradorligini oshiradi va to'siqlardan ishonchli asraydi.",
      en: "Injection-molded PA12 ducted monocoque. Inverted pusher geometry boosts thrust efficiency and shields props during indoor cinematic sweeps."
    }
  },
  fc: {
    title: { ru: "F405 AIO 20A V4 (FC + ESC)", uz: "F405 AIO 20A V4 (FC + ESC)", en: "BetaFPV F405 AIO 20A V4" },
    img: "assets/images/user/parts/part_fc_esc.jpg",
    specs: [
      { k: "MCU", v: "STM32F405RGT6 (168MHz)" },
      { k: "ESC Current", v: "20A Continuous, 25A Burst" },
      { k: "Firmware", v: "Betaflight 4.4 / Bluejay 48kHz" },
      { k: "IMU Gyro", v: "BMI270 / ICM42688" },
      { k: "Battery Input", v: "2S-4S LiPo" }
    ],
    desc: {
      ru: "Высокоинтегрированная плата полётного контроллера и 4-канального регулятора скорости. Поддерживает двусторонний протокол DShot300 с аппаратной RPM-фильтрацией.",
      uz: "Yuqori integratsiyalashgan 'hammasi birda' platasi. DShot300 va apparat darajasidagi RPM filtrlash bilan motorlarni ravon boshqaradi.",
      en: "All-in-one flight controller and 20A 4-in-1 ESC. Features bidirectional DShot300 RPM filtering for silky-smooth cinematic tuning."
    }
  },
  motor: {
    title: { ru: "Моторы BetaFPV 1404 4500KV", uz: "BetaFPV 1404 4500KV motorlari", en: "BetaFPV 1404 4500KV Motors" },
    img: "assets/images/user/parts/part_motor.jpg",
    specs: [
      { k: "KV", v: "4500 KV" },
      { k: "Stator Size", v: "1404 (14x4 mm)" },
      { k: "Shaft Diameter", v: "1.5 mm" },
      { k: "Cells", v: "3S-4S LiPo" },
      { k: "Weight", v: "8.6 g / pc" }
    ],
    desc: {
      ru: "Бесколлекторные двигатели с облегчённым колоколом из анодированного алюминия. Рассчитаны на динамичное ускорение и мягкую стабилизацию на малых оборотах.",
      uz: "Anodlangan alyuminiy korpusli cho'tkasiz motorlar. 3S va 4S batareyalarda 2.5 dyuymli vintlar uchun yuqori kuch va tejamkorlik beradi.",
      en: "High-efficiency brushless motors featuring anodized aluminum bell and curved N52H magnets for rapid throttle response."
    }
  },
  props: {
    title: { ru: "Пропеллеры Gemfan D63 3-Blade", uz: "Gemfan D63 3 kurakli vintlari", en: "Gemfan D63 3-Blade Propellers" },
    img: "assets/images/user/parts/part_props.jpg",
    specs: [
      { k: "Diameter", v: "63 mm / 2.5 inch" },
      { k: "Pitch", v: "1.5 inch" },
      { k: "Blades", v: "3 blades" },
      { k: "Mount", v: "T-Mount 1.5mm" },
      { k: "Weight", v: "1.3 g / pc" }
    ],
    desc: {
      ru: "Аэродинамически спроектированы под кольцевые воздуховоды. Обеспечивают максимальную статическую тягу при минимальном акустическом шуме.",
      uz: "Dakt ichidagi havo oqimiga moslangan 3 kurakli vintlar. Jim va silliq parvozni ta'minlaydi.",
      en: "Aero-engineered for ducted whoops. Maximizes static thrust in enclosed airflow with minimal noise emission."
    }
  },
  cam: {
    title: { ru: "FPV-камера Nano Camera", uz: "Nano FPV kamerasi", en: "Nano FPV Camera" },
    img: "assets/images/user/parts/part_camera.jpg",
    specs: [
      { k: "Resolution", v: "1200 TVL" },
      { k: "Sensor", v: "1/3' CMOS" },
      { k: "Lens FOV", v: "160° Wide Angle" },
      { k: "Latency", v: "< 15 ms" },
      { k: "Weight", v: "3.5 g" }
    ],
    desc: {
      ru: "Ультралёгкая аналоговая камера с естественной цветопередачей и адаптивным WDR для полётов как на ярком солнце, так и в сумерках.",
      uz: "O'ta yengil analog kamera, quyoshda ham qorong'uda ham to'siqlarni aniq ko'rsatuvchi WDR tizimiga ega.",
      en: "Ultra-lightweight micro FPV camera delivering low-latency video and wide dynamic range under challenging illumination."
    }
  },
  vtx: {
    title: { ru: "Видеопередатчик Tiny Rocket VTX", uz: "Tiny Rocket video uzatgichi", en: "Tiny Rocket 5.8GHz VTX" },
    img: "assets/images/user/parts/part_vtx.jpg",
    specs: [
      { k: "Frequency", v: "5.8 GHz (48 Channels)" },
      { k: "Power Output", v: "PIT / 25 / 100 / 200 / 400 mW" },
      { k: "Protocol", v: "SmartAudio 2.1" },
      { k: "Connector", v: "IPEX / U.FL" },
      { k: "Input Voltage", v: "5V DC" }
    ],
    desc: {
      ru: "Мощный передатчик с алюминиевым радиатором охлаждения. Поддерживает переключение мощности и каналов прямо через экранное OSD-меню очков.",
      uz: "Kuchli 5.8 GHz video uzatgich. Ko'zoynak OSD menyusi orqali chastota va quvvatni pultdan o'zgartirish imkonini beradi.",
      en: "Compact 5.8GHz video transmitter with CNC heatsink. Allows live power and frequency switching via SmartAudio OSD commands."
    }
  },
  battery: {
    title: { ru: "Аккумулятор 4S 850mAh 75C LiPo", uz: "4S 850mAh 75C LiPo akkumulyatori", en: "4S 850mAh 75C LiPo Battery" },
    img: "assets/images/user/parts/part_battery.jpg",
    specs: [
      { k: "Voltage", v: "14.8V (4S1P)" },
      { k: "Capacity", v: "850 mAh / 12.58 Wh" },
      { k: "Discharge Rate", v: "75C Continuous, 150C Burst" },
      { k: "Connector", v: "XT30" },
      { k: "Weight", v: "~95 g" }
    ],
    desc: {
      ru: "Высокотоковый аккумулятор премиум-класса. Гарантирует стабильное питание даже при резких рывках газа без просадки напряжения (voltage sag).",
      uz: "Yuqori oqim beruvchi batareya. Tezkor gaz berilganda ham kuchlanishni ushlab turadi va 6-8 daqiqalik parvoz beradi.",
      en: "High-discharge LiPo battery pack providing steady voltage delivery and 6 to 8 minutes of aggressive cinematic flight."
    }
  },
  led: {
    title: { ru: "LED подсветка Pavo25 Neon Strip", uz: "Pavo25 neon LED tasmasi", en: "Pavo25 Neon LED Strip" },
    img: "assets/images/user/parts/part_led_blue.jpg",
    specs: [
      { k: "Voltage", v: "5V DC" },
      { k: "Colors", v: "Cyan / Blue & Red" },
      { k: "Mounting", v: "Duct Perimeter Groove" },
      { k: "Current Draw", v: "~0.15A" }
    ],
    desc: {
      ru: "Силиконовая рассеивающая неоновая трубка, огибающая защитные дакты. Создаёт яркий узнаваемый силуэт дрона и эффектное свечение в кадре.",
      uz: "Dakt aylanasi bo'ylab o'rnatiladigan neon chiroq. Dron ko'rinishini juda chiroyli va qorong'uda oson aniqlanadigan qiladi.",
      en: "Silicone-diffused neon LED strip hugging the ducted frame perimeter for high-visibility visual tracking and sci-fi aesthetic."
    }
  }
};

window.onDroneComponentSelected = function(id) {
  const data = COMPONENT_DETAILS[id];
  if (!data) return;

  const modal = document.getElementById('component-modal');
  const titleEl = document.getElementById('modal-title');
  const imgEl = document.getElementById('modal-img');
  const specsEl = document.getElementById('modal-specs');
  const descEl = document.getElementById('modal-desc');

  const lang = window.currentLanguage || 'ru';

  if (titleEl) titleEl.innerText = data.title[lang] || data.title.en;
  if (imgEl) imgEl.src = data.img;
  if (descEl) descEl.innerText = data.desc[lang] || data.desc.en;

  if (specsEl) {
    specsEl.innerHTML = '';
    data.specs.forEach(s => {
      const row = document.createElement('div');
      row.className = 'modal-spec-row';
      row.innerHTML = `<span class="modal-spec-k">${s.k}:</span> <span class="modal-spec-v">${s.v}</span>`;
      specsEl.appendChild(row);
    });
  }

  if (modal) {
    modal.classList.add('active');
    window.playSfx('click');
  }
};

function initModalEvents() {
  const modal = document.getElementById('component-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = document.getElementById('modal-backdrop');

  const closeModal = () => {
    if (modal) modal.classList.remove('active');
    window.playSfx('click');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Also bind all component cards in section 4 to open modal
  document.querySelectorAll('.part-card').forEach(card => {
    card.addEventListener('click', () => {
      const partId = card.getAttribute('data-part-id');
      if (partId && COMPONENT_DETAILS[partId]) {
        window.onDroneComponentSelected(partId);
      }
    });
  });
}

// Sound Toggle Engine
function initSoundToggle() {
  const soundBtn = document.getElementById('btn-sound-toggle');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    window.soundEnabled = !window.soundEnabled;
    soundBtn.classList.toggle('muted', !window.soundEnabled);
    const label = soundBtn.querySelector('.sound-label');
    if (label) {
      label.innerText = window.soundEnabled ? 'ON' : 'OFF';
    }
    if (window.soundEnabled) {
      window.playSfx('click');
    }
  });
}

// Signal Flow Diagram Interactive Pulse
function initSignalChainSimulation() {
  const videoNodes = document.querySelectorAll('#video-chain .chain-step');
  const controlNodes = document.querySelectorAll('#control-chain .chain-step');

  const pulseChain = (nodes, delay) => {
    nodes.forEach((n, idx) => {
      setTimeout(() => {
        n.classList.add('pulse-active');
        setTimeout(() => n.classList.remove('pulse-active'), 800);
      }, idx * delay);
    });
  };

  setInterval(() => {
    pulseChain(videoNodes, 250);
  }, 3500);

  setInterval(() => {
    pulseChain(controlNodes, 200);
  }, 3200);
}

// DOM Ready Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      window.playSfx('click');
    });
  });

  // 2. Initialize Language
  setLanguage(window.currentLanguage);

  // 3. Category Filter
  initCategoryFilters();

  // 4. Modal events
  initModalEvents();

  // 5. Sound toggle
  initSoundToggle();

  // 6. OSD Simulation
  initOsdSimulation();

  // 7. Signal Chain Pulse
  initSignalChainSimulation();

  // 8. Initialize Assembly Guide
  if (window.AssemblyGuide) {
    window.assemblyGuide = new window.AssemblyGuide();
  }

  // 9. Initialize 3D Drone Viewer
  if (window.Drone3DViewer) {
    window.droneViewer = new window.Drone3DViewer('drone-3d-canvas-container');
  }

  // 10. Smooth Scroll for Nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.playSfx('click');
      }
    });
  });
});
