/**
 * Assembly step schematics (13 stages).
 * Each entry: { svg: string, labels: { key: { ru, uz, en } } }
 * <text data-l="key"> nodes inside the SVG get their text swapped by assembly.js on language change.
 */
window.ASSEMBLY_SCHEMATICS = [
  // Step 1
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img">
  <title>Pavo25 frame preparation: top view of the four-duct monocoque with the carbon top plate, and a section detail showing a silicone anti-vibration grommet being pressed into a 25.5 mm FC mounting hole and a nylon standoff screwed in</title>
  <defs>
    <!-- one ducted motor bay: ring wall + 3-spoke motor mount -->
    <g id="s1duct">
      <circle r="50" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
      <circle r="43" fill="#0f172a" stroke="#00f0ff" stroke-width="1.2" opacity="0.8"/>
      <g stroke="#94a3b8" stroke-width="1.5" opacity="0.6">
        <line x1="0" y1="0" x2="0" y2="43"/>
        <line x1="0" y1="0" x2="-37.2" y2="-21.5"/>
        <line x1="0" y1="0" x2="37.2" y2="-21.5"/>
      </g>
      <circle r="5.5" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    </g>
    <marker id="s1arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="#00f0ff"/>
    </marker>
    <marker id="s1dim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="#94a3b8"/>
    </marker>
  </defs>
  <!-- ===== MAIN VIEW: Pavo25 frame seen from above ===== -->
  <text x="28" y="40" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="15" font-weight="700" fill="#ffffff" letter-spacing="1">PAVO25 FRAME KIT</text>
  <g>
    <!-- plastic monocoque centre body (under the ducts) -->
    <circle cx="200" cy="200" r="58" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- four ring ducts -->
    <use href="#s1duct" x="142" y="142"/>
    <use href="#s1duct" x="258" y="142"/>
    <use href="#s1duct" x="142" y="258"/>
    <use href="#s1duct" x="258" y="258"/>
    <!-- carbon top plate 2.5 mm -->
    <polygon points="158,200 200,158 242,200 200,242" fill="#131a27" stroke="#00f0ff" stroke-width="2" stroke-linejoin="round"/>
    <!-- 25.5 x 25.5 mm FC mounting pattern -->
    <rect x="185" y="185" width="30" height="30" fill="none" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3 3" opacity="0.8"/>
    <!-- three grommets already seated -->
    <g fill="#f59e0b" stroke="#0f172a" stroke-width="1">
      <circle cx="185" cy="185" r="6.5"/><circle cx="185" cy="215" r="6.5"/><circle cx="215" cy="215" r="6.5"/>
    </g>
    <g fill="#0f172a">
      <circle cx="185" cy="185" r="2.4"/><circle cx="185" cy="215" r="2.4"/><circle cx="215" cy="215" r="2.4"/>
    </g>
    <!-- fourth hole still empty: zoom marker to detail A -->
    <circle cx="215" cy="185" r="4.5" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <circle cx="215" cy="185" r="12" fill="none" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="4 3"/>
    <polyline points="225,192 246,200 356,200" fill="none" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.8"/>
  </g>
  <!-- main view callouts -->
  <text data-l="duct" x="28" y="62" text-anchor="start" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="14" font-weight="600" fill="#00f0ff">Ring duct x4 (monocoque)</text>
  <line x1="40" y1="68" x2="107" y2="107" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="107" cy="107" r="3" fill="#00f0ff"/>
  <text data-l="grommet" x="200" y="332" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="14" font-weight="600" fill="#f59e0b">Silicone grommet x4</text>
  <!-- leader runs straight up from the label centre through the gap between the bottom ducts -->
  <polyline points="200,317 200,222 208,215" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="208" cy="215" r="3" fill="#f59e0b"/>
  <!-- ===== DETAIL A: section through two FC holes ===== -->
  <rect x="356" y="40" width="256" height="288" rx="8" fill="#0f172a" stroke="#00f0ff" stroke-opacity="0.35" stroke-width="1"/>
  <text data-l="detail" x="368" y="62" text-anchor="start" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="14" font-weight="700" fill="#00f0ff">Detail A (section)</text>
  <!-- action legend -->
  <circle cx="378" cy="85" r="8" fill="#00f0ff"/>
  <text x="378" y="89" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#0f172a">1</text>
  <text data-l="press" x="392" y="89" text-anchor="start" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="13" font-weight="600" fill="#ffffff">Press grommet into hole</text>
  <circle cx="378" cy="107" r="8" fill="#00f0ff"/>
  <text x="378" y="111" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#0f172a">2</text>
  <text data-l="standoff" x="392" y="111" text-anchor="start" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="13" font-weight="600" fill="#ffffff">Screw in nylon standoff</text>
  <!-- carbon plate in section (2.5 mm), two holes 25.5 mm apart -->
  <g fill="#131a27" stroke="#00f0ff" stroke-width="1.5">
    <rect x="372" y="212" width="42" height="12"/>
    <rect x="434" y="212" width="100" height="12"/>
    <rect x="554" y="212" width="42" height="12"/>
  </g>
  <!-- action 1: grommet above the left hole, pressed down -->
  <line x1="424" y1="124" x2="424" y2="144" stroke="#00f0ff" stroke-width="2.5" marker-end="url(#s1arr)"/>
  <circle cx="448" cy="136" r="9" fill="#00f0ff"/>
  <text x="448" y="140" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#0f172a">1</text>
  <path d="M406 154 h36 v8 h-8 v12 h8 v8 h-36 v-8 h8 v-12 h-8 z" fill="#f59e0b" stroke="#0f172a" stroke-width="1.2" stroke-linejoin="round"/>
  <rect x="421.5" y="154" width="5" height="28" fill="#0f172a"/>
  <!-- action 2: grommet seated in the right hole, nylon standoff screwed in -->
  <path d="M526 204 h36 v8 h-8 v12 h8 v8 h-36 v-8 h8 v-12 h-8 z" fill="#f59e0b" stroke="#0f172a" stroke-width="1.2" stroke-linejoin="round"/>
  <rect x="541.5" y="204" width="5" height="28" fill="#0f172a"/>
  <line x1="544" y1="124" x2="544" y2="144" stroke="#00f0ff" stroke-width="2.5" marker-end="url(#s1arr)"/>
  <circle cx="568" cy="136" r="9" fill="#00f0ff"/>
  <text x="568" y="140" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#0f172a">2</text>
  <rect x="534" y="156" width="20" height="40" rx="3" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="540" y1="158" x2="540" y2="194" stroke="#94a3b8" stroke-width="1" opacity="0.6"/>
  <line x1="548" y1="158" x2="548" y2="194" stroke="#94a3b8" stroke-width="1" opacity="0.6"/>
  <line x1="544" y1="196" x2="544" y2="214" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="2 2"/>
  <text x="560" y="180" text-anchor="start" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#94a3b8">M2</text>
  <!-- 25.5 mm dimension between the two holes -->
  <line x1="424" y1="228" x2="424" y2="254" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2" opacity="0.8"/>
  <line x1="544" y1="236" x2="544" y2="254" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2" opacity="0.8"/>
  <line x1="426" y1="248" x2="542" y2="248" stroke="#94a3b8" stroke-width="1.2" marker-start="url(#s1dim)" marker-end="url(#s1dim)"/>
  <text x="484" y="243" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#f59e0b">25.5 mm</text>
  <text data-l="pattern" x="484" y="268" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="13" font-weight="600" fill="#f59e0b">FC holes 25.5x25.5 mm</text>
  <!-- detail callouts -->
  <text data-l="check" x="600" y="292" text-anchor="end" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="13" font-weight="600" fill="#f59e0b">Check grommet elasticity!</text>
  <line x1="602" y1="285" x2="562" y2="208" stroke="#f59e0b" stroke-width="1.5"/>
  <circle cx="562" cy="208" r="3" fill="#f59e0b"/>
  <text data-l="plate" x="368" y="314" text-anchor="start" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="13" font-weight="600" fill="#00f0ff">Carbon plate 2.5 mm</text>
  <line x1="376" y1="302" x2="382" y2="226" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="382" cy="224" r="3" fill="#00f0ff"/>
</svg>
    `,
    labels: {
      "duct": {
            "ru": "Кольцевой дакт ×4 (монокок)",
            "uz": "Halqali dakt ×4 (monokok)",
            "en": "Ring duct ×4 (monocoque)"
      },
      "grommet": {
            "ru": "Силиконовый демпфер ×4",
            "uz": "Silikon amortizator ×4",
            "en": "Silicone grommet ×4"
      },
      "detail": {
            "ru": "Деталь A (разрез)",
            "uz": "A detali (kesim)",
            "en": "Detail A (section)"
      },
      "press": {
            "ru": "Вдавить демпфер в отверстие",
            "uz": "Amortizatorni bosib kiriting",
            "en": "Press grommet into hole"
      },
      "standoff": {
            "ru": "Вкрутить нейлоновую стойку",
            "uz": "Neylon tirgakni burang",
            "en": "Screw in nylon standoff"
      },
      "pattern": {
            "ru": "Отверстия FC 25.5×25.5 мм",
            "uz": "FC teshiklari 25.5×25.5 mm",
            "en": "FC holes 25.5×25.5 mm"
      },
      "plate": {
            "ru": "Карбоновая пластина 2.5 мм",
            "uz": "Karbon plastina 2.5 mm",
            "en": "Carbon plate 2.5 mm"
      },
      "check": {
            "ru": "Проверьте упругость демпфера",
            "uz": "Elastikligini tekshiring!",
            "en": "Check grommet elasticity!"
      }
}
  },
  // Step 2
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img" font-family="Rajdhani, Inter, Arial, sans-serif">
<title>Step 2 - BetaFPV 1404 4500KV motor mounted under a Pavo25 arm in pusher orientation: four M2 screws with blue threadlocker, three phase wires routed in the arm channel, propeller facing down; zoomed detail warns that a screw that is too long reaches the stator winding</title>
<defs>
<clipPath id="s2-clip"><circle cx="516" cy="160" r="69"/></clipPath>
<pattern id="s2-coil" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="7" height="7" fill="#0f172a"/><line x1="0" y1="0" x2="0" y2="7" stroke="#f59e0b" stroke-width="2.2"/></pattern>
</defs>
<!-- Mini top view of the Pavo25 (4 ducts); highlighted motor = the one shown, x4 -->
<g stroke="#94a3b8" stroke-width="1.5" fill="none">
<line x1="66" y1="282" x2="102" y2="318"/><line x1="102" y1="282" x2="66" y2="318"/>
<circle cx="66" cy="282" r="17" stroke-dasharray="4 3"/>
<circle cx="66" cy="318" r="17" stroke-dasharray="4 3"/>
<circle cx="102" cy="318" r="17" stroke-dasharray="4 3"/>
<circle cx="66" cy="282" r="3" fill="#94a3b8" stroke="none"/>
<circle cx="66" cy="318" r="3" fill="#94a3b8" stroke="none"/>
<circle cx="102" cy="318" r="3" fill="#94a3b8" stroke="none"/>
<rect x="74" y="290" width="20" height="20" rx="2" fill="#131a27" stroke="#00f0ff"/>
<circle cx="102" cy="282" r="17" stroke="#a855f7" stroke-width="2"/>
<circle cx="102" cy="282" r="5" fill="#a855f7" stroke="none"/>
</g>
<text x="126" y="287" font-size="13" font-weight="700" fill="#a855f7">×4</text>
<!-- MAIN VIEW (scaled 1.2): section through one arm, motor hanging below = pusher -->
<g transform="matrix(1.2 0 0 1.2 -64 -18)">
<!-- wire channel under the arm + 3 phase wires going to the ESC -->
<path d="M228,101 H290 V115 H228" fill="none" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="5 4" stroke-opacity="0.8"/>
<g stroke="#94a3b8" stroke-width="2" fill="none">
<line x1="289" y1="104" x2="236" y2="104"/><line x1="289" y1="108" x2="236" y2="108"/><line x1="289" y1="112" x2="236" y2="112"/>
<path d="M240,102 L233,108 L240,114"/>
</g>
<text x="222" y="112" font-size="12" font-weight="700" fill="#94a3b8" text-anchor="end">ESC</text>
<!-- carbon arm -->
<rect x="223" y="80" width="187" height="20" rx="2" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
<!-- motor base (mount) pressed against the underside of the arm -->
<rect x="290" y="100" width="60" height="16" fill="#131a27" stroke="#a855f7" stroke-width="2"/>
<!-- bell (rotor cup) with magnets, opening upward -->
<path d="M278,118 V178 H362 V118 H354 V170 H286 V118 Z" fill="#1e293b" stroke="#a855f7" stroke-width="2" stroke-linejoin="round"/>
<rect x="286" y="126" width="6" height="40" fill="#94a3b8"/>
<rect x="348" y="126" width="6" height="40" fill="#94a3b8"/>
<!-- stator with copper winding -->
<rect x="302" y="116" width="36" height="46" fill="url(#s2-coil)" stroke="#a855f7" stroke-width="1.5"/>
<!-- shaft down to the prop -->
<rect x="317" y="116" width="6" height="76" fill="#94a3b8"/>
<!-- M2 screws through the arm into the base, blue threadlocker on the thread -->
<g>
<rect x="299.5" y="80" width="3" height="32" fill="#f59e0b"/>
<line x1="301" y1="82" x2="301" y2="111" stroke="#b45309" stroke-width="3" stroke-dasharray="1.5 2"/>
<ellipse cx="301" cy="106" rx="5" ry="3.5" fill="#3b82f6" fill-opacity="0.9"/>
<rect x="296" y="72" width="10" height="8" rx="1.5" fill="#f59e0b" stroke="#b45309"/>
<rect x="299" y="74" width="4" height="4" fill="#0f172a"/>
<rect x="337.5" y="80" width="3" height="32" fill="#f59e0b"/>
<line x1="339" y1="82" x2="339" y2="111" stroke="#b45309" stroke-width="3" stroke-dasharray="1.5 2"/>
<ellipse cx="339" cy="106" rx="5" ry="3.5" fill="#3b82f6" fill-opacity="0.9"/>
<rect x="334" y="72" width="10" height="8" rx="1.5" fill="#f59e0b" stroke="#b45309"/>
<rect x="337" y="74" width="4" height="4" fill="#0f172a"/>
</g>
<!-- propeller below the bell (pusher) -->
<path d="M312,193 Q268,180 224,194 Q268,208 312,199 Z" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
<path d="M328,193 Q372,180 416,194 Q372,208 328,199 Z" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
<circle cx="320" cy="196" r="8" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
<!-- airflow: thrust goes down -->
<g fill="none" stroke="#00f0ff" stroke-width="2" stroke-opacity="0.7">
<path d="M262,214 v22 m-5,-7 l5,7 l5,-7"/><path d="M292,214 v22 m-5,-7 l5,7 l5,-7"/>
<path d="M348,214 v22 m-5,-7 l5,7 l5,-7"/><path d="M378,214 v22 m-5,-7 l5,7 l5,-7"/>
</g>
<!-- zoom marker around the screw -->
<circle cx="339" cy="94" r="22" fill="none" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="4 3"/>
<!-- callout dots on the parts (scaled with the drawing) -->
<circle cx="301" cy="74" r="2.6" fill="#f59e0b"/>
<circle cx="241" cy="90" r="2.6" fill="#00f0ff"/>
<circle cx="250" cy="110" r="2.6" fill="#ffffff"/>
<circle cx="282" cy="150" r="2.6" fill="#a855f7"/>
<circle cx="320" cy="204" r="2.6" fill="#ffffff"/>
</g>
<line x1="367" y1="106" x2="452" y2="135" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="4 3"/>
<!-- DETAIL INSET: screw length check -->
<g clip-path="url(#s2-clip)">
<circle cx="516" cy="160" r="69" fill="#0f172a"/>
<rect x="440" y="108" width="160" height="22" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
<rect x="440" y="130" width="160" height="18" fill="#131a27" stroke="#a855f7" stroke-width="2"/>
<rect x="456" y="162" width="120" height="72" fill="url(#s2-coil)" stroke="#a855f7" stroke-width="1.5"/>
<!-- screw A: correct length, ends inside the base -->
<rect x="477" y="108" width="6" height="36" fill="#f59e0b"/>
<line x1="480" y1="110" x2="480" y2="143" stroke="#b45309" stroke-width="6" stroke-dasharray="1.5 2.5"/>
<ellipse cx="480" cy="137" rx="7" ry="5" fill="#3b82f6" fill-opacity="0.9"/>
<rect x="472" y="96" width="16" height="12" rx="2" fill="#f59e0b" stroke="#b45309"/>
<rect x="477" y="99" width="6" height="6" fill="#0f172a"/>
<circle cx="480" cy="155" r="7" fill="#10b981"/>
<path d="M476,155 l3,3 l5,-6" fill="none" stroke="#0f172a" stroke-width="2"/>
<!-- screw B: too long, goes through the base into the winding -->
<circle cx="552" cy="179" r="13" fill="#ff3366" fill-opacity="0.3"/>
<rect x="549" y="108" width="6" height="40" fill="#f59e0b"/>
<line x1="552" y1="110" x2="552" y2="147" stroke="#b45309" stroke-width="6" stroke-dasharray="1.5 2.5"/>
<rect x="549" y="148" width="6" height="30" fill="#ff3366"/>
<rect x="544" y="96" width="16" height="12" rx="2" fill="#f59e0b" stroke="#b45309"/>
<rect x="549" y="99" width="6" height="6" fill="#0f172a"/>
<path d="M552,178 l7,-5 l-3,9 l8,-3 l-10,11" fill="none" stroke="#ff3366" stroke-width="2" stroke-linejoin="round"/>
</g>
<circle cx="516" cy="160" r="69" fill="none" stroke="#00f0ff" stroke-width="2"/>
<!-- step chips: 1 check length, 2 screws + threadlocker, 3 wires -->
<g font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">
<circle cx="462" cy="104" r="9" fill="#f59e0b"/><text x="462" y="108.3" fill="#0f172a">1</text>
<circle cx="384" cy="60" r="9" fill="#f59e0b"/><text x="384" y="64.3" fill="#0f172a">2</text>
<circle cx="231" cy="141" r="9" fill="#f59e0b"/><text x="231" y="145.3" fill="#0f172a">3</text>
</g>
<!-- leader lines (label -> dot on the part) -->
<g stroke="#94a3b8" stroke-width="1.5">
<line x1="198" y1="48" x2="296" y2="70"/>
<line x1="198" y1="84" x2="224" y2="90"/>
<line x1="198" y1="156" x2="235" y2="115"/>
<line x1="198" y1="196" x2="273" y2="163"/>
<line x1="320" y1="280" x2="320" y2="228"/>
<line x1="522" y1="58" x2="481" y2="95"/>
<line x1="592" y1="266" x2="555" y2="181"/>
<line x1="462" y1="251" x2="485" y2="213"/>
</g>
<g stroke="none">
<circle cx="480" cy="97" r="3" fill="#f59e0b"/>
<circle cx="554" cy="180" r="3" fill="#ff3366"/>
<circle cx="486" cy="212" r="3" fill="#ffffff"/>
</g>
<!-- callouts -->
<g font-size="13" font-weight="600">
<text data-l="screws" x="24" y="52" fill="#f59e0b">4× M2 + blue threadlocker</text>
<text data-l="arm" x="24" y="88" fill="#00f0ff">Frame arm (carbon)</text>
<text data-l="wires" x="24" y="160" fill="#ffffff">3 phase wires in channel</text>
<text data-l="motor" x="24" y="200" fill="#a855f7">1404 4500KV motor (pusher)</text>
<text data-l="prop" x="320" y="293" fill="#ffffff" text-anchor="middle">Prop faces down</text>
<text data-l="check" x="616" y="52" fill="#f59e0b" font-size="14" font-weight="700" text-anchor="end">Check screw length!</text>
<text data-l="winding" x="440" y="262" fill="#ffffff">Stator winding</text>
<text data-l="toolong" x="616" y="288" fill="#ff3366" font-size="14" font-weight="700" text-anchor="end">Screw too long!</text>
</g>
</svg>
    `,
    labels: {
      "arm": {
            "ru": "Луч рамы (карбон)",
            "uz": "Rama nuri (karbon)",
            "en": "Frame arm (carbon)"
      },
      "screws": {
            "ru": "4× M2 + синий фиксатор",
            "uz": "4× M2 + ko‘k fiksator",
            "en": "4× M2 + blue threadlocker"
      },
      "wires": {
            "ru": "3 фазных провода в пазу",
            "uz": "3 faza simi kanal bo‘ylab",
            "en": "3 phase wires in channel"
      },
      "motor": {
            "ru": "Мотор 1404 4500KV (pusher)",
            "uz": "Motor 1404 4500KV (pusher)",
            "en": "1404 4500KV motor (pusher)"
      },
      "prop": {
            "ru": "Пропеллер смотрит вниз",
            "uz": "Propeller pastga qaraydi",
            "en": "Prop faces down"
      },
      "check": {
            "ru": "Проверь длину винта!",
            "uz": "Vint uzunligini tekshir!",
            "en": "Check screw length!"
      },
      "toolong": {
            "ru": "Винт слишком длинный!",
            "uz": "Vint juda uzun!",
            "en": "Screw too long!"
      },
      "winding": {
            "ru": "Обмотка статора",
            "uz": "Stator o‘rami",
            "en": "Stator winding"
      }
}
  },
  // Step 3
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img">
<title>Step 3: F405 20A AIO board with tinned BAT+ / BAT- pads, XT30 16AWG pigtail and a Low ESR 470uF 35V capacitor soldered across the same pads (stripe = negative leg)</title>
<!-- ===== F405 20A AIO board ===== -->
<g id="board">
<rect x="222" y="48" width="150" height="150" rx="8" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
<!-- mounting holes -->
<circle cx="232" cy="58" r="4" fill="#090d16" stroke="#94a3b8" stroke-width="1.5"/>
<circle cx="362" cy="58" r="4" fill="#090d16" stroke="#94a3b8" stroke-width="1.5"/>
<circle cx="232" cy="188" r="4" fill="#090d16" stroke="#94a3b8" stroke-width="1.5"/>
<circle cx="362" cy="188" r="4" fill="#090d16" stroke="#94a3b8" stroke-width="1.5"/>
<!-- motor pad trios M1..M4 -->
<g fill="#f59e0b" opacity="0.9">
<rect x="244" y="56" width="4" height="8"/><rect x="250" y="56" width="4" height="8"/><rect x="256" y="56" width="4" height="8"/>
<rect x="334" y="56" width="4" height="8"/><rect x="340" y="56" width="4" height="8"/><rect x="346" y="56" width="4" height="8"/>
<rect x="244" y="186" width="4" height="8"/><rect x="250" y="186" width="4" height="8"/><rect x="256" y="186" width="4" height="8"/>
<rect x="334" y="186" width="4" height="8"/><rect x="340" y="186" width="4" height="8"/><rect x="346" y="186" width="4" height="8"/>
</g>
<g font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="600" fill="#94a3b8" text-anchor="middle">
<text x="252" y="78">M4</text><text x="342" y="78">M2</text>
<text x="252" y="181">M3</text><text x="342" y="181">M1</text>
</g>
<!-- MCU -->
<rect x="279" y="105" width="36" height="36" rx="3" fill="#131a27" stroke="#94a3b8" stroke-width="1.5"/>
<text x="297" y="127" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">F405</text>
<!-- USB-C at top edge -->
<rect x="288" y="48" width="18" height="7" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
<!-- tinned battery pads -->
<rect x="266" y="172" width="24" height="24" rx="4" fill="#cbd5e1" stroke="#ff3366" stroke-width="2"/>
<ellipse cx="274" cy="179" rx="5" ry="2.5" fill="#ffffff" opacity="0.8"/>
<text x="278" y="191" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="17" font-weight="700" fill="#0f172a" text-anchor="middle">+</text>
<rect x="300" y="172" width="24" height="24" rx="4" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>
<ellipse cx="308" cy="179" rx="5" ry="2.5" fill="#ffffff" opacity="0.8"/>
<text x="312" y="191" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="17" font-weight="700" fill="#0f172a" text-anchor="middle">−</text>
</g>
<!-- ===== XT30 pigtail 16AWG ===== -->
<g id="pigtail" fill="none" stroke-linecap="round">
<path d="M276,196 C276,250 214,250 214,282" stroke="#ff3366" stroke-width="5"/>
<path d="M312,196 C312,256 232,256 232,282" stroke="#94a3b8" stroke-width="7"/>
<path d="M312,196 C312,256 232,256 232,282" stroke="#131a27" stroke-width="4"/>
</g>
<g id="xt30">
<rect x="198" y="280" width="50" height="34" rx="5" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
<g font-family="Rajdhani, Inter, Arial, sans-serif" font-weight="700" fill="#0f172a" text-anchor="middle">
<text x="214" y="294" font-size="13">+</text><text x="232" y="294" font-size="13">−</text>
<text x="223" y="309" font-size="12">XT30</text>
</g>
</g>
<!-- ===== Low ESR capacitor ===== -->
<g id="capacitor">
<!-- legs: + upper, - lower (stripe side) -->
<path d="M390,120 H352 V156 H278 V172" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-linejoin="round"/>
<path d="M390,136 H364 V166 H312 V172" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-linejoin="round"/>
<text x="384" y="115" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#ff3366" text-anchor="middle">+</text>
<!-- body -->
<rect x="390" y="110" width="68" height="34" rx="6" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
<rect x="392" y="133" width="62" height="9" rx="2" fill="#94a3b8" opacity="0.9"/>
<text x="400" y="141" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#0f172a">−</text>
<ellipse cx="457" cy="127" rx="6" ry="17" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
<text x="422" y="128" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">470uF 35V</text>
</g>
<!-- ===== soldering iron ===== -->
<g id="iron" stroke-linecap="round">
<circle cx="318" cy="190" r="5" fill="#f59e0b" opacity="0.55"/>
<polygon points="316,192 342.4,202.3 338.4,209.3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"/>
<line x1="340" y1="206" x2="388" y2="233" stroke="#94a3b8" stroke-width="7"/>
<line x1="388" y1="233" x2="450" y2="268" stroke="#94a3b8" stroke-width="20"/>
<line x1="388" y1="233" x2="450" y2="268" stroke="#1e293b" stroke-width="16"/>
</g>
<!-- ===== step chips ===== -->
<g font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">
<circle cx="292" cy="212" r="9" fill="#f59e0b"/><text x="292" y="216">1</text>
<circle cx="266" cy="297" r="9" fill="#f59e0b"/><text x="266" y="301">2</text>
<circle cx="474" cy="127" r="9" fill="#f59e0b"/><text x="474" y="131">3</text>
</g>
<!-- ===== leader lines (underline + diagonal to the part) ===== -->
<g fill="none" stroke="#00f0ff" stroke-width="1.5" opacity="0.85" stroke-linejoin="round">
<path d="M24,74 H222"/>
<path d="M24,236 H214 L266,196"/>
<path d="M24,262 H208 L245,247"/>
<path d="M24,305 H157 L198,300"/>
<path d="M616,74 H427 L436,110"/>
<path d="M616,190 H410 L446,140"/>
<path d="M616,216 H429 L364,156"/>
<path d="M616,304 H436 L444,268"/>
</g>
<g fill="#00f0ff">
<circle cx="222" cy="74" r="3"/><circle cx="266" cy="196" r="3"/><circle cx="245" cy="247" r="3"/><circle cx="198" cy="300" r="3"/>
<circle cx="436" cy="110" r="3"/><circle cx="446" cy="140" r="3"/><circle cx="364" cy="156" r="3"/><circle cx="444" cy="268" r="3"/>
</g>
<!-- ===== callouts ===== -->
<g font-family="Rajdhani, Inter, Arial, sans-serif" font-size="14" font-weight="600" fill="#ffffff">
<text data-l="board" x="24" y="70" text-anchor="start">F405 20A AIO board</text>
<text data-l="pads" x="24" y="232" text-anchor="start">Tinned BAT+ / BAT− pads</text>
<text data-l="polarity" x="24" y="258" text-anchor="start">Red → +, black → −</text>
<text data-l="xt30" x="24" y="301" text-anchor="start">XT30 pigtail, 16AWG</text>
<text data-l="cap" x="616" y="70" text-anchor="end">Low ESR 470uF 35V cap</text>
<text data-l="stripe" x="616" y="186" text-anchor="end">Stripe = negative leg (−)</text>
<text data-l="legs" x="616" y="212" text-anchor="end">Cap legs on the same pads</text>
<text data-l="iron" x="616" y="300" text-anchor="end">Iron 380°C, Sn63Pb37</text>
</g>
</svg>
    `,
    labels: {
      "board": {
            "ru": "Плата F405 20A AIO",
            "uz": "F405 20A AIO platasi",
            "en": "F405 20A AIO board"
      },
      "pads": {
            "ru": "Лужёные площадки BAT+/−",
            "uz": "Qalaylangan BAT+/BAT− pad",
            "en": "Tinned BAT+ / BAT− pads"
      },
      "polarity": {
            "ru": "Красный → +, чёрный → −",
            "uz": "Qizil → +, qora → −",
            "en": "Red → +, black → −"
      },
      "xt30": {
            "ru": "Кабель XT30, 16AWG",
            "uz": "XT30 kabeli, 16AWG",
            "en": "XT30 pigtail, 16AWG"
      },
      "cap": {
            "ru": "Конденсатор Low ESR 470uF",
            "uz": "Low ESR 470uF kondensator",
            "en": "Low ESR 470uF 35V cap"
      },
      "stripe": {
            "ru": "Полоса = минусовая ножка",
            "uz": "Chiziq = minus (−) oyoqcha",
            "en": "Stripe = negative leg (−)"
      },
      "legs": {
            "ru": "Ножки на те же площадки",
            "uz": "Oyoqchalari shu padlarga",
            "en": "Cap legs on the same pads"
      },
      "iron": {
            "ru": "Паяльник 380°C, Sn63Pb37",
            "uz": "Lehimlagich 380°C, Sn63Pb37",
            "en": "Iron 380°C, Sn63Pb37"
      }
}
  },
  // Step 4
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img">
<title>Step 4: F405 AIO flight controller placed on 4 rubber grommets in the centre of the Pavo25 frame; 3 phase wires from each of the 4 motors soldered to pads M1-M4; side view of a board corner with grommet, nylon nut and a clean rounded solder joint</title>
<!-- ===== TOP VIEW: Pavo25 frame (ghosted ducts), AIO board, 4 motors, 12 phase wires ===== -->
<g id="top-view" transform="translate(12 0)">
<g id="frame-ghost" fill="none" stroke-dasharray="5 4">
  <rect x="103" y="84" width="224" height="224" rx="34" stroke="#94a3b8" stroke-width="1.5" opacity="0.3"/>
  <g stroke="#00f0ff" stroke-width="2" opacity="0.35">
    <circle cx="139" cy="120" r="32"/><circle cx="291" cy="120" r="32"/>
    <circle cx="139" cy="272" r="32"/><circle cx="291" cy="272" r="32"/>
  </g>
  <g stroke="#00f0ff" stroke-width="1.5" opacity="0.2">
    <circle cx="139" cy="120" r="25"/><circle cx="291" cy="120" r="25"/>
    <circle cx="139" cy="272" r="25"/><circle cx="291" cy="272" r="25"/>
  </g>
</g>
<!-- FRONT arrow -->
<g id="front-arrow">
  <line x1="215" y1="100" x2="215" y2="72" stroke="#00f0ff" stroke-width="2"/>
  <polygon points="215,62 208,74 222,74" fill="#00f0ff"/>
  <text data-l="front" x="228" y="78" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="14" font-weight="600" fill="#ffffff" text-anchor="start">Front of drone</text>
</g>
<!-- Motors: bell + shaft -->
<g id="motors" stroke="#a855f7" stroke-width="2">
  <g fill="#1e293b">
    <circle cx="139" cy="120" r="12"/><circle cx="291" cy="120" r="12"/>
    <circle cx="139" cy="272" r="12"/><circle cx="291" cy="272" r="12"/>
  </g>
  <g fill="none" stroke-width="1.5" opacity="0.6">
    <circle cx="139" cy="120" r="7"/><circle cx="291" cy="120" r="7"/>
    <circle cx="139" cy="272" r="7"/><circle cx="291" cy="272" r="7"/>
  </g>
  <g fill="#a855f7" stroke="none">
    <circle cx="139" cy="120" r="3"/><circle cx="291" cy="120" r="3"/>
    <circle cx="139" cy="272" r="3"/><circle cx="291" cy="272" r="3"/>
  </g>
</g>
<!-- 3 phase wires per motor -->
<g id="wires" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" fill="none">
  <!-- M4 front-left -->
  <line x1="150" y1="126" x2="175" y2="171"/><line x1="147" y1="130" x2="175" y2="179"/><line x1="143" y1="132" x2="175" y2="187"/>
  <!-- M2 front-right -->
  <line x1="280" y1="126" x2="255" y2="171"/><line x1="283" y1="130" x2="255" y2="179"/><line x1="287" y1="132" x2="255" y2="187"/>
  <!-- M3 rear-left -->
  <line x1="150" y1="266" x2="175" y2="221"/><line x1="147" y1="262" x2="175" y2="213"/><line x1="143" y1="260" x2="175" y2="205"/>
  <!-- M1 rear-right -->
  <line x1="280" y1="266" x2="255" y2="221"/><line x1="283" y1="262" x2="255" y2="213"/><line x1="287" y1="260" x2="255" y2="205"/>
</g>
<!-- AIO board -->
<g id="board">
  <rect x="169" y="150" width="92" height="92" rx="5" fill="#131a27" stroke="#00f0ff" stroke-width="2"/>
  <!-- nylon nuts on the 4 mounting holes -->
  <g fill="#f59e0b" fill-opacity="0.35" stroke="#f59e0b" stroke-width="1.5">
    <polygon points="177,152 182.2,155 182.2,161 177,164 171.8,161 171.8,155"/>
    <polygon points="253,152 258.2,155 258.2,161 253,164 247.8,161 247.8,155"/>
    <polygon points="177,228 182.2,231 182.2,237 177,240 171.8,237 171.8,231"/>
    <polygon points="253,228 258.2,231 258.2,237 253,240 247.8,237 247.8,231"/>
  </g>
  <g fill="#0f172a">
    <circle cx="177" cy="158" r="2"/><circle cx="253" cy="158" r="2"/><circle cx="177" cy="234" r="2"/><circle cx="253" cy="234" r="2"/>
  </g>
  <!-- motor pads (3 per corner) -->
  <g fill="#f59e0b" opacity="0.9">
    <rect x="171.5" y="168" width="7" height="6" rx="1"/><rect x="171.5" y="176" width="7" height="6" rx="1"/><rect x="171.5" y="184" width="7" height="6" rx="1"/>
    <rect x="251.5" y="168" width="7" height="6" rx="1"/><rect x="251.5" y="176" width="7" height="6" rx="1"/><rect x="251.5" y="184" width="7" height="6" rx="1"/>
    <rect x="171.5" y="202" width="7" height="6" rx="1"/><rect x="171.5" y="210" width="7" height="6" rx="1"/><rect x="171.5" y="218" width="7" height="6" rx="1"/>
    <rect x="251.5" y="202" width="7" height="6" rx="1"/><rect x="251.5" y="210" width="7" height="6" rx="1"/><rect x="251.5" y="218" width="7" height="6" rx="1"/>
  </g>
  <!-- solder joints -->
  <g fill="#10b981">
    <circle cx="175" cy="171" r="3"/><circle cx="175" cy="179" r="3"/><circle cx="175" cy="187" r="3"/>
    <circle cx="255" cy="171" r="3"/><circle cx="255" cy="179" r="3"/><circle cx="255" cy="187" r="3"/>
    <circle cx="175" cy="205" r="3"/><circle cx="175" cy="213" r="3"/><circle cx="175" cy="221" r="3"/>
    <circle cx="255" cy="205" r="3"/><circle cx="255" cy="213" r="3"/><circle cx="255" cy="221" r="3"/>
  </g>
  <!-- silkscreen pad codes -->
  <g font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#00f0ff">
    <text x="184" y="183" text-anchor="start">M4</text><text x="246" y="183" text-anchor="end">M2</text>
    <text x="184" y="217" text-anchor="start">M3</text><text x="246" y="217" text-anchor="end">M1</text>
  </g>
  <!-- MCU -->
  <rect x="202" y="186" width="26" height="26" rx="2" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="206" cy="190" r="1.5" fill="#94a3b8"/>
  <text x="215" y="203" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">F405</text>
</g>
</g>
<!-- ===== SIDE VIEW INSET: one board corner (post, grommet, nut, solder joint) ===== -->
<g id="side-view">
  <!-- frame plate -->
  <rect x="396" y="210" width="204" height="12" rx="2" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- frame post / screw -->
  <rect x="436" y="140" width="10" height="72" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="436" y1="146" x2="446" y2="146" stroke="#f59e0b" stroke-width="1"/>
  <line x1="436" y1="151" x2="446" y2="151" stroke="#f59e0b" stroke-width="1"/>
  <!-- board with hole -->
  <rect x="396" y="188" width="31" height="12" fill="#131a27" stroke="#00f0ff" stroke-width="2"/>
  <rect x="455" y="188" width="145" height="12" fill="#131a27" stroke="#00f0ff" stroke-width="2"/>
  <!-- silicone grommet: waist through the hole + two flanges -->
  <g fill="#94a3b8" fill-opacity="0.3" stroke="#94a3b8" stroke-width="1.5">
    <rect x="429" y="186" width="24" height="16"/>
    <rect x="421" y="178" width="40" height="10" rx="4"/>
    <rect x="421" y="200" width="40" height="10" rx="4"/>
  </g>
  <!-- nylon nut (side) -->
  <polygon points="433,158 449,158 452,162 452,174 449,178 433,178 430,174 430,162" fill="#f59e0b" fill-opacity="0.35" stroke="#f59e0b" stroke-width="2"/>
  <!-- motor wire + clean rounded solder joint on a pad -->
  <rect x="530" y="184" width="26" height="4" fill="#f59e0b"/>
  <line x1="598" y1="166" x2="549" y2="180" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
  <path d="M530 188 A13 13 0 0 1 556 188 Z" fill="#10b981" fill-opacity="0.45" stroke="#10b981" stroke-width="2"/>
</g>
<!-- ===== CALLOUTS ===== -->
<g id="callouts" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="14" font-weight="600" fill="#ffffff">
  <g stroke="#00f0ff" stroke-width="1.5" fill="none" opacity="0.9">
    <line x1="152" y1="166" x2="169" y2="154"/>
    <line x1="166" y1="212" x2="180" y2="213"/>
    <line x1="188" y1="324" x2="225" y2="246"/>
    <line x1="426" y1="64" x2="431" y2="161"/>
    <line x1="450" y1="90" x2="461" y2="181"/>
    <line x1="486" y1="114" x2="538" y2="176"/>
  </g>
  <g fill="#00f0ff">
    <circle cx="172" cy="152" r="3"/><circle cx="183" cy="213" r="3"/><circle cx="227" cy="244" r="3"/>
    <circle cx="431" cy="161" r="3"/><circle cx="461" cy="181" r="3"/><circle cx="538" cy="176" r="3"/>
  </g>
  <!-- numbered action chips -->
  <g fill="#f59e0b"><circle cx="33" cy="328" r="9"/><circle cx="33" cy="210" r="9"/><circle cx="606" cy="52" r="9"/></g>
  <g font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">
    <text x="33" y="332">1</text><text x="33" y="214">3</text><text x="606" y="56">2</text>
  </g>
  <!-- left / bottom labels -->
  <text data-l="wires" x="24" y="170" text-anchor="start">3 motor phase wires</text>
  <text data-l="pads" x="48" y="214" text-anchor="start">Solder to M1-M4</text>
  <text data-l="board" x="48" y="332" text-anchor="start">F405 AIO 20A board</text>
  <!-- right labels -->
  <text data-l="nut" x="592" y="56" text-anchor="end">Nut: do not over-tighten</text>
  <text data-l="grommet" x="616" y="84" text-anchor="end">Silicone rubber grommet</text>
  <text data-l="joint" x="616" y="110" text-anchor="end">Clean rounded joint</text>
  <text data-l="sideview" x="616" y="250" text-anchor="end" fill="#94a3b8">Side view: board corner</text>
</g>
</svg>
    `,
    labels: {
      "front": {
            "ru": "Перёд дрона",
            "uz": "Dron old tomoni",
            "en": "Front of drone"
      },
      "wires": {
            "ru": "3 фазных провода",
            "uz": "Motorning 3 ta simi",
            "en": "3 motor phase wires"
      },
      "pads": {
            "ru": "Пайка на M1–M4",
            "uz": "M1–M4 ga lehimlash",
            "en": "Solder to M1–M4"
      },
      "board": {
            "ru": "Плата F405 AIO 20A",
            "uz": "F405 AIO 20A platasi",
            "en": "F405 AIO 20A board"
      },
      "nut": {
            "ru": "Гайка: не перетягивать",
            "uz": "Gayka: qattiq buramang",
            "en": "Nut: do not over-tighten"
      },
      "grommet": {
            "ru": "Резиновый демпфер",
            "uz": "Silikon rezina amortizator",
            "en": "Silicone rubber grommet"
      },
      "joint": {
            "ru": "Аккуратная пайка",
            "uz": "Silliq yumaloq lehim",
            "en": "Clean rounded joint"
      },
      "sideview": {
            "ru": "Вид сбоку: угол платы",
            "uz": "Yon ko‘rinish: burchak",
            "en": "Side view: board corner"
      }
}
  },
  // Step 5
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img">
<title>ELRS 2.4GHz Nano receiver wired to flight controller UART1: 5V to 5V, GND to GND, receiver RX to TX1 and receiver TX to RX1 (crossed), heat shrink over the receiver</title>
<!-- ===== Heat shrink sleeve (ghosted, over the receiver) ===== -->
<g>
<rect x="252" y="46" width="146" height="88" rx="10" fill="#00f0ff" fill-opacity="0.05" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="5 4"/>
</g>
<!-- ===== ELRS Nano receiver PCB ===== -->
<g>
<rect x="262" y="58" width="126" height="62" rx="4" fill="#131a27" stroke="#00f0ff" stroke-width="2"/>
<rect x="296" y="63" width="8" height="5" rx="1" fill="#10b981"/>
<text x="272" y="82" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="13" font-weight="700" fill="#ffffff">ELRS 2.4G</text>
<rect x="336" y="66" width="24" height="18" rx="2" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5"/>
<circle cx="370" cy="88" r="4.5" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
<!-- u.FL connector + T antenna -->
<rect x="370" y="55" width="10" height="7" rx="1.5" fill="#94a3b8"/>
<line x1="375" y1="55" x2="375" y2="36" stroke="#94a3b8" stroke-width="2"/>
<line x1="363" y1="36" x2="387" y2="36" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
<line x1="363" y1="32" x2="363" y2="40" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
<line x1="387" y1="32" x2="387" y2="40" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
<!-- pad names on the receiver -->
<text x="280" y="107" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#ff3366">5V</text>
<text x="310" y="107" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#94a3b8">GND</text>
<text x="340" y="107" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#10b981">RX</text>
<text x="370" y="107" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#00f0ff">TX</text>
</g>
<!-- ===== Flight controller PCB ===== -->
<g>
<rect x="252" y="204" width="146" height="128" rx="6" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
<circle cx="262" cy="214" r="4" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
<circle cx="388" cy="214" r="4" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
<circle cx="262" cy="322" r="4" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
<circle cx="388" cy="322" r="4" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
<!-- UART1 pad group highlight -->
<rect x="268" y="206" width="114" height="36" rx="5" fill="#00f0ff" fill-opacity="0.06" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="4 3"/>
<text x="280" y="237" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#ff3366">5V</text>
<text x="310" y="237" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#94a3b8">GND</text>
<text x="340" y="237" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#00f0ff">RX1</text>
<text x="370" y="237" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#10b981">TX1</text>
<text x="325" y="258" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="13" font-weight="700" fill="#00f0ff">UART1</text>
<!-- MCU, gyro, USB-C -->
<rect x="289" y="268" width="74" height="36" rx="3" fill="#131a27" stroke="#94a3b8" stroke-width="1.5"/>
<text x="326" y="290" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#cbd5e1">STM32F405</text>
<rect x="372" y="274" width="14" height="14" rx="2" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
<rect x="396" y="292" width="12" height="16" rx="2" fill="#94a3b8"/>
</g>
<!-- ===== Four wires receiver -> FC (data pair crossed) ===== -->
<g fill="none" stroke-linecap="round">
<line x1="280" y1="114" x2="280" y2="216" stroke="#ff3366" stroke-width="3"/>
<line x1="310" y1="114" x2="310" y2="216" stroke="#94a3b8" stroke-width="4"/>
<line x1="310" y1="114" x2="310" y2="216" stroke="#0b1220" stroke-width="2"/>
<path d="M340 114 C340 170 370 158 370 216" stroke="#10b981" stroke-width="3"/>
<path d="M370 114 C370 170 340 158 340 216" stroke="#00f0ff" stroke-width="3"/>
</g>
<!-- crossing highlight -->
<circle cx="355" cy="164" r="20" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 4"/>
<!-- solder pads (drawn over wire ends) -->
<g fill="#f59e0b" stroke="#b45309" stroke-width="1.2">
<circle cx="280" cy="114" r="4.5"/><circle cx="310" cy="114" r="4.5"/><circle cx="340" cy="114" r="4.5"/><circle cx="370" cy="114" r="4.5"/>
<circle cx="280" cy="216" r="4.5"/><circle cx="310" cy="216" r="4.5"/><circle cx="340" cy="216" r="4.5"/><circle cx="370" cy="216" r="4.5"/>
</g>
<!-- ===== Leader lines ===== -->
<g stroke="#94a3b8" stroke-width="1.5" fill="none">
<line x1="214" y1="88" x2="262" y2="90"/>
<line x1="214" y1="132" x2="252" y2="128"/>
<line x1="214" y1="176" x2="280" y2="168"/>
<line x1="214" y1="258" x2="252" y2="262"/>
<line x1="414" y1="36" x2="375" y2="44"/>
<line x1="414" y1="116" x2="372" y2="124"/>
<line x1="414" y1="162" x2="375" y2="164"/>
<line x1="414" y1="222" x2="398" y2="222"/>
</g>
<g fill="#ffffff">
<circle cx="262" cy="90" r="3"/><circle cx="252" cy="128" r="3"/><circle cx="280" cy="168" r="3"/><circle cx="252" cy="262" r="3"/>
<circle cx="375" cy="44" r="3"/><circle cx="372" cy="124" r="3"/><circle cx="375" cy="164" r="3"/><circle cx="398" cy="222" r="3"/>
</g>
<!-- ===== Callout labels (localized) ===== -->
<g font-family="Rajdhani, Inter, Arial, sans-serif" font-size="14" font-weight="600" fill="#f1f5f9">
<text data-l="rx" x="24" y="92" text-anchor="start">ELRS Nano receiver</text>
<text data-l="shrink" x="24" y="136" text-anchor="start">3 · Heat shrink 10mm</text>
<text data-l="pwr" x="24" y="180" text-anchor="start">5V (red), GND (black)</text>
<text data-l="fc" x="24" y="262" text-anchor="start">Flight controller (FC)</text>
<text data-l="ant" x="616" y="40" text-anchor="end">2.4GHz antenna</text>
<text data-l="solder" x="616" y="120" text-anchor="end">1 · Solder 4 wires (30AWG)</text>
<text data-l="cross" x="616" y="166" text-anchor="end">2 · TX and RX are crossed!</text>
<text data-l="uart" x="616" y="226" text-anchor="end">Free UART1 port</text>
</g>
<!-- golden rule (technical codes only) -->
<text x="616" y="184" text-anchor="end" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="13" font-weight="700" fill="#10b981">RX → TX1   ·   TX → RX1</text>
</svg>
    `,
    labels: {
      "rx": {
            "ru": "Приёмник ELRS Nano",
            "uz": "ELRS Nano qabul qilgich",
            "en": "ELRS Nano receiver"
      },
      "ant": {
            "ru": "Антенна 2.4GHz",
            "uz": "2.4GHz antenna",
            "en": "2.4GHz antenna"
      },
      "shrink": {
            "ru": "3 · Термоусадка 10mm",
            "uz": "3 · Termokembrik 10mm",
            "en": "3 · Heat shrink 10mm"
      },
      "pwr": {
            "ru": "5V (красный), GND (чёрный)",
            "uz": "5V (qizil), GND (qora)",
            "en": "5V (red), GND (black)"
      },
      "fc": {
            "ru": "Полётный контроллер (FC)",
            "uz": "Parvoz kontrolleri (FC)",
            "en": "Flight controller (FC)"
      },
      "solder": {
            "ru": "1 · Пайка 4 проводов 30AWG",
            "uz": "1 · 4 sim lehimlang (30AWG)",
            "en": "1 · Solder 4 wires (30AWG)"
      },
      "cross": {
            "ru": "2 · TX и RX — крест-накрест!",
            "uz": "2 · TX–RX almashtirib ulang!",
            "en": "2 · TX and RX are crossed!"
      },
      "uart": {
            "ru": "Свободный порт UART1",
            "uz": "Bo‘sh UART1 porti",
            "en": "Free UART1 port"
      }
}
  },
  // Step 6
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img">
  <title>Step 6: Nano FPV camera fixed in the front TPU canopy, tilted 15-20 degrees; three wires 5V, GND and CAM soldered to the flight controller (CAM pad goes to the OSD chip)</title>
  <defs>
    <marker id="s6arr" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0.5 L8,4 L0,7.5 Z" fill="#00f0ff"/>
    </marker>
  </defs>
  <!-- ===== Carbon frame front plate + TPU canopy base ===== -->
  <g>
    <rect x="206" y="272" width="177" height="11" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="228" y="252" width="138" height="20" rx="4" fill="#131a27" stroke="#00f0ff" stroke-width="2"/>
  </g>
  <!-- ===== TPU canopy side wall (behind the camera; near wall cut away) ===== -->
  <g>
    <path d="M256,149.5 H342 Q356,149.5 356,163 V252 H238 V185 Q238,149.5 256,149.5 Z" fill="#131a27" stroke="#00f0ff" stroke-width="2"/>
    <path d="M252,162 L245,180 M262,159 L254,178 M272,158 L264,176" stroke="#00f0ff" stroke-width="1" opacity="0.45"/>
  </g>
  <!-- ===== Tilt angle: horizontal reference, line of sight, arc (vertex = pivot 262,212) ===== -->
  <g>
    <line x1="190" y1="212" x2="233" y2="212" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="5 4"/>
    <line x1="243.5" y1="196.2" x2="160" y2="169" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#s6arr)"/>
    <path d="M202,212 A90,90 0 0 1 206.4,184.2" fill="none" stroke="#f59e0b" stroke-width="2"/>
  </g>
  <!-- ===== Nano camera, rotated 18 deg (tilt up) around its side screw ===== -->
  <g transform="rotate(18 292 212)">
    <!-- lens front ring + barrel -->
    <rect x="241" y="196" width="8.5" height="32" rx="2" fill="#00f0ff" fill-opacity="0.3" stroke="#00f0ff" stroke-width="2"/>
    <rect x="247" y="198.5" width="21" height="27" rx="2" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
    <line x1="257" y1="198.5" x2="257" y2="225.5" stroke="#00f0ff" stroke-width="1" opacity="0.6"/>
    <!-- body -->
    <rect x="267" y="187" width="50" height="50" rx="5" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
    <!-- side mounting screw head (M1.5 hex socket) -->
    <circle cx="292" cy="212" r="8" fill="#f59e0b" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M292,207.8 L295.6,209.9 L295.6,214.1 L292,216.2 L288.4,214.1 L288.4,209.9 Z" fill="#0f172a"/>
    <!-- rear solder pads -->
    <circle cx="318" cy="199.5" r="3" fill="#ff3366"/>
    <circle cx="318" cy="212" r="3" fill="#94a3b8"/>
    <circle cx="318" cy="224.5" r="3" fill="#10b981"/>
  </g>
  <!-- ===== Three wires camera -> FC pads ===== -->
  <g fill="none" stroke-width="2.5" stroke-linecap="round">
    <path d="M321,208 C380,207 440,208 499,210" stroke="#ff3366"/>
    <path d="M317,220 C380,222 440,240 499,240" stroke="#94a3b8"/>
    <path d="M313,232 C380,238 430,272 499,270" stroke="#10b981"/>
  </g>
  <!-- ===== Flight controller PCB (top view) ===== -->
  <g>
    <rect x="490" y="190" width="100" height="100" rx="6" fill="#131a27" stroke="#00f0ff" stroke-width="2"/>
    <g fill="none" stroke="#94a3b8" stroke-width="1.2">
      <circle cx="497.5" cy="197.5" r="2.6"/><circle cx="582.5" cy="197.5" r="2.6"/>
      <circle cx="497.5" cy="282.5" r="2.6"/><circle cx="582.5" cy="282.5" r="2.6"/>
    </g>
    <!-- MCU -->
    <rect x="538" y="202" width="38" height="38" rx="3" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="557" y="225" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#e2e8f0" text-anchor="middle">STM32</text>
    <!-- OSD chip + trace from CAM pad -->
    <path d="M505,270 H538" stroke="#10b981" stroke-width="1.5" fill="none"/>
    <rect x="538" y="258" width="38" height="24" rx="3" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <text x="557" y="274" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#10b981" text-anchor="middle">OSD</text>
    <!-- solder pads with silkscreen codes -->
    <circle cx="499" cy="210" r="5.5" fill="#f59e0b" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="499" cy="240" r="5.5" fill="#f59e0b" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="499" cy="270" r="5.5" fill="#f59e0b" stroke="#0f172a" stroke-width="1.5"/>
    <text x="509" y="206" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#ff3366">5V</text>
    <text x="509" y="236" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#94a3b8">GND</text>
    <text x="509" y="266" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#10b981">CAM</text>
  </g>
  <!-- ===== Leader lines (underline + diagonal + end dot) ===== -->
  <g fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-linejoin="round">
    <path d="M28,69 H232 L330,150"/>
    <path d="M28,105 H250 L292,212"/>
    <path d="M28,141 H150 L248,181"/>
    <path d="M176,200 H199"/>
    <path d="M612,155 H432 L500,190"/>
  </g>
  <g fill="#94a3b8">
    <circle cx="330" cy="150" r="3"/>
    <circle cx="292" cy="212" r="3"/>
    <circle cx="248" cy="181" r="3"/>
    <circle cx="203" cy="198" r="3"/>
    <circle cx="500" cy="190" r="3"/>
  </g>
  <!-- ===== Callout labels ===== -->
  <g font-family="Rajdhani, Inter, Arial, sans-serif" font-size="14" font-weight="600" fill="#e2e8f0">
    <text data-l="tpu" x="28" y="64" text-anchor="start">TPU vibration-damped mount</text>
    <text data-l="screw" x="28" y="100" text-anchor="start">Camera screws (M1.5 hex key)</text>
    <text data-l="cam" x="28" y="136" text-anchor="start">Nano FPV camera</text>
    <text data-l="tilt" x="28" y="205" text-anchor="start">Tilt angle 15-20°</text>
    <text data-l="fc" x="612" y="150" text-anchor="end">Flight controller (FC)</text>
  </g>
  <!-- ===== Wire colour legend (top right) ===== -->
  <g>
    <rect x="440" y="44" width="172" height="70" rx="6" fill="#0f172a" fill-opacity="0.6" stroke="#94a3b8" stroke-width="1" opacity="0.9"/>
    <circle cx="454" cy="59.5" r="4.5" fill="#ff3366"/>
    <circle cx="454" cy="79.5" r="4.5" fill="#94a3b8"/>
    <circle cx="454" cy="99.5" r="4.5" fill="#10b981"/>
    <g font-family="Rajdhani, Inter, Arial, sans-serif" font-size="13" font-weight="600" fill="#e2e8f0">
      <text data-l="w5v" x="465" y="64" text-anchor="start">5V - power</text>
      <text data-l="wgnd" x="465" y="84" text-anchor="start">GND - ground</text>
      <text data-l="wcam" x="465" y="104" text-anchor="start">CAM - video to OSD</text>
    </g>
  </g>
  <!-- ===== Action order chips: 1 mount camera, 2 solder wires, 3 set tilt ===== -->
  <g font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#f59e0b" text-anchor="middle">
    <circle cx="370" cy="166" r="9" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
    <text x="370" y="170.5">1</text>
    <circle cx="474" cy="302" r="9" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
    <text x="474" y="306.5">2</text>
    <circle cx="176" cy="230" r="9" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
    <text x="176" y="234.5">3</text>
  </g>
</svg>
    `,
    labels: {
      "tpu": {
            "ru": "Виброгасящий TPU-кронштейн",
            "uz": "Amortizatorli TPU ushlagich",
            "en": "TPU vibration-damped mount"
      },
      "screw": {
            "ru": "Винты камеры (ключ M1.5)",
            "uz": "Kamera vintlari (M1.5 kalit)",
            "en": "Camera screws (M1.5 hex key)"
      },
      "cam": {
            "ru": "Nano FPV-камера",
            "uz": "Nano FPV-kamera",
            "en": "Nano FPV camera"
      },
      "tilt": {
            "ru": "Угол наклона 15–20°",
            "uz": "Qiyalik burchagi 15–20°",
            "en": "Tilt angle 15–20°"
      },
      "fc": {
            "ru": "Полётный контроллер (FC)",
            "uz": "Parvoz kontrolleri (FC)",
            "en": "Flight controller (FC)"
      },
      "w5v": {
            "ru": "5V — питание",
            "uz": "5V — quvvat",
            "en": "5V — power"
      },
      "wgnd": {
            "ru": "GND — земля",
            "uz": "GND — yer (minus)",
            "en": "GND — ground"
      },
      "wcam": {
            "ru": "CAM — видео → OSD",
            "uz": "CAM — video → OSD",
            "en": "CAM — video → OSD"
      }
}
  },
  // Step 7
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img" font-family="Rajdhani, Inter, Arial, sans-serif">
  <title>Step 7: Tiny Rocket 5.8GHz VTX taped to the rear carbon plate and wired to the flight controller: 5V/9V, GND, video from the FC OSD output, SmartAudio to TX2; u.FL antenna must be attached before power.</title>
  <defs>
    <pattern id="carbon7" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#94a3b8" stroke-width="1" opacity="0.12"/>
    </pattern>
  </defs>
  <!-- Title -->
  <text data-l="title" x="24" y="44" font-size="17" font-weight="700" fill="#ffffff" text-anchor="start">Tiny Rocket VTX wiring</text>
  <!-- Flight controller (left) -->
  <g id="fc">
    <rect x="50" y="98" width="100" height="166" rx="6" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
    <circle cx="60" cy="108" r="3.5" fill="#131a27" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="140" cy="108" r="3.5" fill="#131a27" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="60" cy="254" r="3.5" fill="#131a27" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="140" cy="254" r="3.5" fill="#131a27" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="62" y="124" font-size="13" font-weight="700" fill="#00f0ff">FC</text>
    <rect x="66" y="162" width="40" height="40" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="86" y="186" font-size="12" font-weight="600" fill="#94a3b8" text-anchor="middle">F405</text>
    <!-- FC pads: power pair (top) and signal pair (bottom) -->
    <rect x="144" y="113" width="12" height="10" rx="2" fill="#f59e0b"/>
    <rect x="144" y="131" width="12" height="10" rx="2" fill="#f59e0b"/>
    <rect x="144" y="225" width="12" height="10" rx="2" fill="#f59e0b"/>
    <rect x="144" y="243" width="12" height="10" rx="2" fill="#f59e0b"/>
    <text x="140" y="122" font-size="12" font-weight="700" fill="#ff3366" text-anchor="end">5V/9V</text>
    <text x="140" y="140" font-size="12" font-weight="700" fill="#94a3b8" text-anchor="end">GND</text>
    <text x="140" y="234" font-size="12" font-weight="700" fill="#10b981" text-anchor="end">VTX</text>
    <text x="140" y="252" font-size="12" font-weight="700" fill="#f59e0b" text-anchor="end">TX2</text>
  </g>
  <!-- Rear carbon plate + foam tape + VTX (right) -->
  <g id="plate">
    <rect x="298" y="116" width="140" height="146" rx="8" fill="#131a27" stroke="#94a3b8" stroke-width="2"/>
    <rect x="298" y="116" width="140" height="146" rx="8" fill="url(#carbon7)"/>
    <rect x="312" y="130" width="112" height="116" rx="5" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 4"/>
  </g>
  <g id="vtx">
    <rect x="320" y="136" width="96" height="104" rx="4" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
    <!-- VTX pads on its left edge -->
    <rect x="314" y="145" width="12" height="10" rx="2" fill="#f59e0b"/>
    <rect x="314" y="161" width="12" height="10" rx="2" fill="#f59e0b"/>
    <rect x="314" y="205" width="12" height="10" rx="2" fill="#f59e0b"/>
    <rect x="314" y="221" width="12" height="10" rx="2" fill="#f59e0b"/>
    <text x="332" y="154" font-size="12" font-weight="700" fill="#ff3366">5V/9V</text>
    <text x="332" y="170" font-size="12" font-weight="700" fill="#94a3b8">GND</text>
    <text x="332" y="214" font-size="12" font-weight="700" fill="#10b981">VID</text>
    <text x="332" y="230" font-size="12" font-weight="700" fill="#f59e0b">SA</text>
    <text x="378" y="177" font-size="13" font-weight="700" fill="#00f0ff">VTX</text>
    <rect x="362" y="184" width="40" height="26" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="382" y="202" font-size="12" font-weight="600" fill="#94a3b8" text-anchor="middle">5.8G</text>
    <!-- u.FL connector on the top edge -->
    <circle cx="380" cy="146" r="5.5" fill="#1e293b" stroke="#00f0ff" stroke-width="1.5"/>
    <circle cx="380" cy="146" r="1.8" fill="#00f0ff"/>
    <text x="390" y="150" font-size="12" font-weight="700" fill="#00f0ff">u.FL</text>
  </g>
  <!-- Wires FC -> VTX -->
  <g id="wires" fill="none" stroke-width="2.5" stroke-linecap="round">
    <path d="M156,118 C235,118 240,150 318,150" stroke="#ff3366"/>
    <path d="M156,136 C235,136 240,166 318,166" stroke="#94a3b8"/>
    <path d="M156,230 C235,230 240,210 318,210" stroke="#10b981"/>
    <path d="M156,248 C235,248 240,226 318,226" stroke="#f59e0b"/>
  </g>
  <!-- Antenna: coax from u.FL up to a mushroom antenna above the plate -->
  <g id="antenna">
    <line x1="380" y1="140" x2="380" y2="104" stroke="#94a3b8" stroke-width="2"/>
    <rect x="374" y="98" width="12" height="8" rx="2" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="380" y1="98" x2="380" y2="60" stroke="#00f0ff" stroke-width="2"/>
    <circle cx="380" cy="50" r="10" fill="#131a27" stroke="#00f0ff" stroke-width="2"/>
    <circle cx="380" cy="50" r="3.5" fill="none" stroke="#00f0ff" stroke-width="1.5"/>
  </g>
  <!-- Order chips -->
  <g id="chips" font-size="12" font-weight="700" text-anchor="middle">
    <circle cx="427" cy="129" r="9" fill="#f59e0b"/>
    <text x="427" y="133" fill="#0f172a">1</text>
    <circle cx="150" cy="182" r="9" fill="#f59e0b"/>
    <text x="150" y="186" fill="#0f172a">2</text>
    <circle cx="356" cy="50" r="9" fill="#f59e0b"/>
    <text x="356" y="54" fill="#0f172a">3</text>
  </g>
  <!-- Inset: Pavo25 top view, rear plate highlighted -->
  <g id="inset" fill="none" stroke-width="1.5">
    <circle cx="40" cy="292" r="11" stroke="#94a3b8"/>
    <circle cx="78" cy="292" r="11" stroke="#94a3b8"/>
    <circle cx="40" cy="325" r="11" stroke="#94a3b8"/>
    <circle cx="78" cy="325" r="11" stroke="#94a3b8"/>
    <rect x="51" y="300" width="16" height="18" rx="2" stroke="#94a3b8"/>
    <rect x="49" y="329" width="20" height="5" rx="1.5" fill="#00f0ff" stroke="none"/>
  </g>
  <!-- Callouts: leaders + dots -->
  <g id="leaders" stroke="#94a3b8" stroke-width="1.5" fill="none">
    <line x1="188" y1="98" x2="196" y2="120"/>
    <line x1="182" y1="167" x2="178" y2="140"/>
    <line x1="182" y1="201" x2="178" y2="227"/>
    <line x1="188" y1="282" x2="196" y2="246"/>
    <line x1="446" y1="52" x2="391" y2="50"/>
    <line x1="404" y1="89" x2="381" y2="89"/>
    <line x1="444" y1="228" x2="417" y2="228"/>
  </g>
  <g id="dots">
    <circle cx="196" cy="121" r="3" fill="#ff3366"/>
    <circle cx="178" cy="137" r="3" fill="#94a3b8"/>
    <circle cx="178" cy="229" r="3" fill="#10b981"/>
    <circle cx="196" cy="246" r="3" fill="#f59e0b"/>
    <circle cx="391" cy="50" r="3" fill="#00f0ff"/>
    <circle cx="381" cy="89" r="3" fill="#ff3366"/>
    <circle cx="417" cy="228" r="3" fill="#00f0ff"/>
  </g>
  <!-- Danger box (attached to the antenna stem) -->
  <g id="danger">
    <rect x="432" y="72" width="184" height="34" rx="6" fill="#ff3366" fill-opacity="0.12" stroke="#ff3366" stroke-width="1.5"/>
    <path d="M416,79 L426,97 L406,97 Z" fill="none" stroke="#ff3366" stroke-width="1.5" stroke-linejoin="round"/>
    <text x="416" y="95" font-size="12" font-weight="700" fill="#ff3366" text-anchor="middle">!</text>
  </g>
  <!-- Localized labels -->
  <g font-size="13" font-weight="600">
    <text data-l="power" x="170" y="92" fill="#ff3366" text-anchor="start">Power 5V or 9V</text>
    <text data-l="gnd" x="186" y="176" fill="#94a3b8" text-anchor="start">Ground GND</text>
    <text data-l="video" x="186" y="198" fill="#10b981" text-anchor="start">Video from FC OSD</text>
    <text data-l="sa" x="170" y="292" fill="#f59e0b" text-anchor="start">SmartAudio to TX2</text>
    <text data-l="ant" x="616" y="54" fill="#00f0ff" text-anchor="end">Antenna before power-on</text>
    <text data-l="danger" x="609" y="94" fill="#ff3366" font-weight="700" text-anchor="end">Never power w/o antenna!</text>
    <text data-l="vtx" x="616" y="232" fill="#ffffff" text-anchor="end">VTX on rear plate, 3M tape</text>
  </g>
</svg>
    `,
    labels: {
      "title": {
            "ru": "Подключение VTX Tiny Rocket",
            "uz": "Tiny Rocket VTX ulanishi",
            "en": "Tiny Rocket VTX wiring"
      },
      "power": {
            "ru": "Питание 5V или 9V",
            "uz": "Quvvat 5V yoki 9V",
            "en": "Power 5V or 9V"
      },
      "gnd": {
            "ru": "Земля GND",
            "uz": "Yer simi GND",
            "en": "Ground GND"
      },
      "video": {
            "ru": "Видео с OSD FC",
            "uz": "FC OSD dan video",
            "en": "Video from FC OSD"
      },
      "sa": {
            "ru": "SmartAudio на TX2",
            "uz": "SmartAudio TX2 ga",
            "en": "SmartAudio to TX2"
      },
      "ant": {
            "ru": "Антенна до включения",
            "uz": "Yoqishdan oldin antenna",
            "en": "Antenna before power-on"
      },
      "danger": {
            "ru": "Не включать без антенны",
            "uz": "Antennasiz yoqmang!",
            "en": "Never power w/o antenna!"
      },
      "vtx": {
            "ru": "VTX сзади на скотче 3M",
            "uz": "VTX orqada, 3M skotch bilan",
            "en": "VTX on rear plate, 3M tape"
      }
}
  },
  // Step 8
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img">
<title>Step 8: 5.8 GHz RHCP antenna in the TPU tail mount pointing up and back, u.FL pigtail to VTX with glue bead and zip-tie strain relief, radiation pattern</title>
<!-- ===== Pavo25 side view: nose left, tail right ===== -->
<!-- carbon plate -->
<rect x="136" y="214" width="266" height="8" rx="2" fill="#131a27" stroke="#00f0ff" stroke-width="2"/>
<!-- front duct + motor -->
<g>
<rect x="150" y="224" width="90" height="38" rx="10" fill="#0f172a" stroke="#00f0ff" stroke-width="2" opacity="0.85"/>
<line x1="158" y1="232" x2="232" y2="232" stroke="#00f0ff" stroke-width="2" opacity="0.7"/>
<path d="M186 234 L204 234 L201 250 L189 250 Z" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
<path d="M191 250 V256 M195 250 V256 M199 250 V256" stroke="#a855f7" stroke-width="1.5"/>
</g>
<!-- rear duct + motor -->
<g>
<rect x="300" y="224" width="90" height="38" rx="10" fill="#0f172a" stroke="#00f0ff" stroke-width="2" opacity="0.85"/>
<line x1="308" y1="232" x2="382" y2="232" stroke="#00f0ff" stroke-width="2" opacity="0.7"/>
<path d="M336 234 L354 234 L351 250 L339 250 Z" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
<path d="M341 250 V256 M345 250 V256 M349 250 V256" stroke="#a855f7" stroke-width="1.5"/>
</g>
<!-- camera at the nose -->
<g>
<rect x="116" y="192" width="22" height="20" rx="3" fill="#131a27" stroke="#00f0ff" stroke-width="2"/>
<circle cx="116" cy="202" r="6" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
</g>
<!-- battery (keep the antenna away from it) -->
<g>
<rect x="150" y="188" width="108" height="24" rx="4" fill="#131a27" stroke="#ff3366" stroke-width="2"/>
<text x="204" y="204" text-anchor="middle" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#ff3366">4S LIPO</text>
</g>
<!-- FC + VTX stack -->
<g>
<path d="M298 199 V214 M336 199 V214" stroke="#94a3b8" stroke-width="2"/>
<rect x="292" y="205" width="50" height="5" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
<rect x="292" y="194" width="50" height="5" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<rect x="297" y="190" width="4" height="4" fill="#10b981"/>
<rect x="305" y="190" width="4" height="4" fill="#10b981"/>
<rect x="313" y="190" width="4" height="4" fill="#10b981"/>
<text x="288" y="199" text-anchor="end" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#10b981">VTX</text>
<text x="288" y="211" text-anchor="end" font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" fill="#94a3b8">FC</text>
</g>
<!-- u.FL connector + glue bead + coax pigtail -->
<g>
<circle cx="337" cy="189" r="7" fill="#f59e0b" opacity="0.3"/>
<rect x="333" y="188" width="8" height="6" rx="1" fill="#f59e0b"/>
<path d="M337 188 C 343 168, 370 170, 386 200" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
<!-- zip-tie loop around the coax -->
<ellipse cx="358" cy="175" rx="4" ry="8" fill="none" stroke="#f59e0b" stroke-width="2"/>
<path d="M358 167 L365 160" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
</g>
<!-- TPU tail mount: block + 45 deg tube -->
<g>
<rect x="372" y="196" width="32" height="28" rx="6" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
<rect x="381" y="170" width="14" height="42" rx="3" fill="#1e293b" stroke="#00f0ff" stroke-width="2" transform="rotate(45 388 212)"/>
</g>
<!-- radiation pattern (light) -->
<g fill="none" stroke="#00f0ff" stroke-width="1" stroke-dasharray="5 4">
<circle cx="452" cy="148" r="20" opacity="0.4"/>
<circle cx="452" cy="148" r="33" opacity="0.28"/>
<circle cx="452" cy="148" r="46" opacity="0.16"/>
</g>
<!-- antenna: stem + RHCP lollipop head -->
<g>
<line x1="418" y1="182" x2="441" y2="159" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
<circle cx="452" cy="148" r="12" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
<circle cx="452" cy="148" r="4" fill="#00f0ff"/>
</g>
<!-- direction arrow: up and back -->
<g>
<line x1="461" y1="139" x2="480" y2="120" stroke="#00f0ff" stroke-width="2.5"/>
<polygon points="488,112 483.5,125 475,116.5" fill="#00f0ff"/>
</g>
<!-- ===== step chips ===== -->
<g font-family="Rajdhani, Inter, Arial, sans-serif" font-size="12" font-weight="700" text-anchor="middle">
<circle cx="426" cy="204" r="9" fill="#f59e0b"/>
<text x="426" y="208" fill="#0f172a">1</text>
<circle cx="356" cy="203" r="9" fill="#f59e0b"/>
<text x="356" y="207" fill="#0f172a">2</text>
<circle cx="372" cy="152" r="9" fill="#f59e0b"/>
<text x="372" y="156" fill="#0f172a">3</text>
</g>
<!-- ===== callouts: left column ===== -->
<g font-family="Rajdhani, Inter, Arial, sans-serif" font-size="14" font-weight="600" fill="#ffffff" text-anchor="start">
<text x="28" y="57" data-l="dir">Up and back, ~45°</text>
<text x="28" y="100" data-l="zip">Zip-tie strain relief</text>
<text x="28" y="148" data-l="ufl">u.FL to VTX + glue bead</text>
<text x="28" y="300" data-l="bat">Away from LiPo &amp; carbon</text>
</g>
<g fill="none" stroke-width="1.5" opacity="0.9">
<polyline points="30,64 100,64 476,124" stroke="#00f0ff"/>
<polyline points="30,107 100,107 355,168" stroke="#f59e0b"/>
<polyline points="30,155 100,155 333,188" stroke="#f59e0b"/>
<polyline points="30,307 100,307 150,205" stroke="#ff3366"/>
</g>
<circle cx="476" cy="124" r="3" fill="#00f0ff"/>
<circle cx="355" cy="168" r="3" fill="#f59e0b"/>
<circle cx="333" cy="188" r="3" fill="#f59e0b"/>
<circle cx="150" cy="205" r="3" fill="#ff3366"/>
<!-- ===== callouts: right column ===== -->
<g font-family="Rajdhani, Inter, Arial, sans-serif" font-size="14" font-weight="600" fill="#ffffff" text-anchor="end">
<text x="612" y="90" data-l="rf">360° omni coverage</text>
<text x="612" y="212" data-l="ant">5.8 GHz RHCP antenna</text>
<text x="612" y="300" data-l="mount">TPU tail mount</text>
</g>
<g fill="none" stroke-width="1.5" opacity="0.9">
<polyline points="610,97 498,97 498,148" stroke="#10b981"/>
<polyline points="610,219 452,219 452,160" stroke="#00f0ff"/>
<polyline points="610,307 404,307 404,224" stroke="#00f0ff"/>
</g>
<circle cx="498" cy="148" r="3" fill="#10b981"/>
<circle cx="452" cy="160" r="3" fill="#00f0ff"/>
<circle cx="404" cy="224" r="3" fill="#00f0ff"/>
</svg>
    `,
    labels: {
      "zip": {
            "ru": "Фиксация кабеля стяжкой",
            "uz": "Bog‘ich bilan mahkamlash",
            "en": "Zip-tie strain relief"
      },
      "ufl": {
            "ru": "u.FL в VTX + капля клея",
            "uz": "u.FL ni VTX ga + termokley",
            "en": "u.FL to VTX + glue bead"
      },
      "bat": {
            "ru": "Дальше от LiPo и карбона",
            "uz": "LiPo va karbondan uzoqroq",
            "en": "Away from LiPo & carbon"
      },
      "dir": {
            "ru": "Вверх и назад, ~45°",
            "uz": "Yuqoriga va orqaga, ~45°",
            "en": "Up and back, ~45°"
      },
      "ant": {
            "ru": "Антенна 5.8 GHz RHCP",
            "uz": "5.8 GHz RHCP antenna",
            "en": "5.8 GHz RHCP antenna"
      },
      "rf": {
            "ru": "Круговое покрытие 360°",
            "uz": "360° aylana qamrov",
            "en": "360° omni coverage"
      },
      "mount": {
            "ru": "TPU держатель на хвосте",
            "uz": "Orqa TPU ushlagich",
            "en": "TPU tail mount"
      }
}
  },
  // Step 9
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img" font-family="Rajdhani, Inter, Arial, sans-serif">
  <title>Step 9: side view of the Pavo25 with the 2.5 mm carbon top plate screwed on with M2 screws, the anti-slip silicone pad on the plate, the LiPo battery on top held by a Kevlar strap threaded through the plate slot and closed with a buckle, and the neon LED strip glowing along each duct rim; inset: top view with four glowing LED rings.</title>
  <defs>
    <!-- One duct, side view, with the neon LED line in the rim groove -->
    <g id="duct9">
      <rect x="0" y="0" width="74" height="64" rx="10" fill="#131a27" stroke="#94a3b8" stroke-width="2"/>
      <line x1="5" y1="18" x2="69" y2="18" stroke="#94a3b8" stroke-width="1" opacity="0.5"/>
      <line x1="6" y1="10" x2="68" y2="10" stroke="#00f0ff" stroke-width="9" opacity="0.22" stroke-linecap="round"/>
      <line x1="6" y1="10" x2="68" y2="10" stroke="#00f0ff" stroke-width="3" stroke-linecap="round"/>
    </g>
    <!-- One M2 hex screw: head on the plate, shank dashed inside the standoff -->
    <g id="scr9">
      <line x1="7" y1="10" x2="7" y2="38" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 2"/>
      <rect x="0" y="0" width="14" height="10" rx="2" fill="#f59e0b"/>
      <path d="M4,5 L7,2.5 L10,5 L7,7.5 Z" fill="#0f172a"/>
    </g>
    <!-- One duct, top view, with the glowing LED ring -->
    <g id="ring9">
      <circle r="18" fill="#131a27" stroke="#94a3b8" stroke-width="1.5"/>
      <circle r="14.5" fill="none" stroke="#00f0ff" stroke-width="5" opacity="0.25"/>
      <circle r="14.5" fill="none" stroke="#00f0ff" stroke-width="2"/>
      <circle r="3" fill="#a855f7"/>
    </g>
  </defs>
  <!-- Title -->
  <text data-l="title" x="24" y="44" font-size="17" font-weight="700" fill="#ffffff" text-anchor="start">Top plate, battery and LED</text>
  <!-- Frame: two ducts (side view), central body, posts and standoffs -->
  <g id="frame">
    <use href="#duct9" x="218" y="244"/>
    <use href="#duct9" x="384" y="244"/>
    <rect x="292" y="238" width="92" height="74" rx="4" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
    <rect x="300" y="224" width="6" height="14" fill="#1e293b" stroke="#94a3b8" stroke-width="1"/>
    <rect x="370" y="224" width="6" height="14" fill="#1e293b" stroke="#94a3b8" stroke-width="1"/>
    <rect x="248" y="224" width="8" height="20" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="420" y="224" width="8" height="20" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  </g>
  <!-- Strap: hidden part under the plate (dashed) -->
  <path d="M326,224 L326,230 L354,230 L354,224" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/>
  <!-- Carbon top plate 2.5 mm with the strap slot -->
  <g id="plate">
    <rect x="244" y="216" width="188" height="8" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
    <rect x="323" y="215" width="34" height="10" fill="#090d16"/>
  </g>
  <!-- M2 screws at both ends of the plate -->
  <use href="#scr9" x="245" y="206"/>
  <use href="#scr9" x="417" y="206"/>
  <!-- Anti-slip silicone pad on the plate -->
  <rect x="272" y="208" width="136" height="8" rx="1" fill="#10b981"/>
  <!-- LiPo battery on the pad -->
  <g id="battery">
    <rect x="276" y="144" width="128" height="64" rx="4" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
    <text x="301" y="181" font-size="12" font-weight="700" fill="#94a3b8" text-anchor="middle">LIPO 4S</text>
    <text x="379" y="181" font-size="12" font-weight="700" fill="#94a3b8" text-anchor="middle">450mAh</text>
  </g>
  <!-- Kevlar strap over the battery, through the slot, buckle on top -->
  <g id="strap">
    <rect x="326" y="139" width="28" height="85" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <g fill="#f59e0b" opacity="0.6">
      <circle cx="334" cy="160" r="1.5"/><circle cx="346" cy="160" r="1.5"/>
      <circle cx="334" cy="176" r="1.5"/><circle cx="346" cy="176" r="1.5"/>
      <circle cx="334" cy="192" r="1.5"/><circle cx="346" cy="192" r="1.5"/>
    </g>
    <rect x="332" y="128" width="24" height="11" rx="2" fill="#f59e0b"/>
    <rect x="336" y="131" width="16" height="5" rx="1" fill="#0f172a"/>
  </g>
  <!-- Inset: top view, neon LED ring on all four ducts -->
  <g id="inset">
    <rect x="522" y="236" width="92" height="96" rx="8" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3" opacity="0.45"/>
    <use href="#ring9" x="546" y="262"/>
    <use href="#ring9" x="592" y="262"/>
    <use href="#ring9" x="546" y="308"/>
    <use href="#ring9" x="592" y="308"/>
    <rect x="560" y="252" width="18" height="66" rx="2" fill="#1e293b" stroke="#00f0ff" stroke-width="1.2"/>
    <rect x="563" y="261" width="12" height="48" rx="2" fill="#131a27" stroke="#94a3b8" stroke-width="1"/>
    <rect x="556" y="282" width="26" height="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
  </g>
  <!-- Leader lines -->
  <g id="leaders" stroke="#94a3b8" stroke-width="1.5" fill="none">
    <line x1="206" y1="100" x2="326" y2="141"/>
    <line x1="206" y1="154" x2="277" y2="212"/>
    <line x1="206" y1="220" x2="244" y2="220"/>
    <line x1="206" y1="260" x2="226" y2="255"/>
    <line x1="460" y1="100" x2="358" y2="133"/>
    <line x1="460" y1="160" x2="406" y2="168"/>
    <line x1="460" y1="216" x2="432" y2="211"/>
  </g>
  <g id="dots">
    <circle cx="327" cy="141" r="3" fill="#f59e0b"/>
    <circle cx="278" cy="212" r="3" fill="#10b981"/>
    <circle cx="245" cy="220" r="3" fill="#00f0ff"/>
    <circle cx="227" cy="254" r="3" fill="#00f0ff"/>
    <circle cx="357" cy="133" r="3" fill="#f59e0b"/>
    <circle cx="405" cy="168" r="3" fill="#ffffff"/>
    <circle cx="431" cy="211" r="3" fill="#f59e0b"/>
  </g>
  <!-- Order chips next to the labels -->
  <g id="chips" font-size="12" font-weight="700" text-anchor="middle">
    <circle cx="33" cy="100" r="8" fill="#f59e0b"/><text x="33" y="104" fill="#0f172a">2</text>
    <circle cx="33" cy="154" r="8" fill="#f59e0b"/><text x="33" y="158" fill="#0f172a">3</text>
    <circle cx="33" cy="220" r="8" fill="#f59e0b"/><text x="33" y="224" fill="#0f172a">1</text>
    <circle cx="33" cy="260" r="8" fill="#f59e0b"/><text x="33" y="264" fill="#0f172a">4</text>
    <circle cx="607" cy="160" r="8" fill="#f59e0b"/><text x="607" y="164" fill="#0f172a">5</text>
  </g>
  <!-- Localized labels -->
  <g font-size="13" font-weight="600">
    <text data-l="strap" x="46" y="104" fill="#f59e0b" text-anchor="start">Strap through plate slots</text>
    <text data-l="pad" x="46" y="158" fill="#10b981" text-anchor="start">Anti-slip silicone pad</text>
    <text data-l="plate" x="46" y="224" fill="#00f0ff" text-anchor="start">Carbon top plate 2.5 mm</text>
    <text data-l="led" x="46" y="264" fill="#00f0ff" text-anchor="start">Neon LED along duct rim</text>
    <text data-l="buckle" x="594" y="104" fill="#f59e0b" text-anchor="end">Buckle: pull tight</text>
    <text data-l="batt" x="594" y="164" fill="#ffffff" text-anchor="end">LiPo battery on top</text>
    <text data-l="screws" x="594" y="220" fill="#f59e0b" text-anchor="end">M2 hex screws, 4 pcs</text>
  </g>
</svg>
    `,
    labels: {
      "title": {
            "ru": "Верхняя дека, АКБ и LED",
            "uz": "Yuqori deka, batareya, LED",
            "en": "Top plate, battery & LED"
      },
      "strap": {
            "ru": "Ремешок через пазы",
            "uz": "Tasma deka tirqishidan",
            "en": "Strap through plate slots"
      },
      "pad": {
            "ru": "Нескользящий коврик",
            "uz": "Sirpanmas silikon taglik",
            "en": "Anti-slip silicone pad"
      },
      "plate": {
            "ru": "Верхняя дека 2.5 мм",
            "uz": "Karbon yuqori deka 2.5 mm",
            "en": "Carbon top plate 2.5 mm"
      },
      "led": {
            "ru": "Неон LED в паз дакта",
            "uz": "Neon LED dakt aylanasida",
            "en": "Neon LED along duct rim"
      },
      "buckle": {
            "ru": "Затянуть пряжку",
            "uz": "To‘qani qattiq torting",
            "en": "Buckle: pull tight"
      },
      "batt": {
            "ru": "LiPo АКБ сверху",
            "uz": "LiPo batareya tepada",
            "en": "LiPo battery on top"
      },
      "screws": {
            "ru": "Винты M2 hex, 4 шт",
            "uz": "M2 hex vintlar, 4 dona",
            "en": "M2 hex screws, 4 pcs"
      }
}
  },
  // Step 10
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img" font-family="Rajdhani, Inter, Arial, sans-serif">
  <title>Step 10: Pavo25 connected by a USB-C data cable (into the USB-C port on the side of the flight controller) to a laptop running Betaflight Configurator. The screen shows the 5-item setup checklist in order: 1 firmware target BETAFPVF405, 2 UART ports (UART1 Serial RX, UART2 SmartAudio), 3 ESC protocol DSHOT300, 4 motor direction Props Out, 5 flight modes ARM / ANGLE / AIR. The drone top view, captioned with the amber chip 4 and PROPS OUT, shows the resulting rotation per motor (front-left CCW, front-right CW, rear-left CW, rear-right CCW). Warning leader on the front-right motor hub: test motors only with propellers removed.</title>
  <defs>
    <marker id="ah10" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#a855f7"/>
    </marker>
  </defs>
  <!-- Title -->
  <text data-l="title" x="24" y="44" font-size="17" font-weight="700" fill="#ffffff" text-anchor="start">Betaflight setup via USB-C</text>
  <!-- Laptop: screen bezel + base -->
  <g id="laptop">
    <rect x="40" y="62" width="300" height="200" rx="8" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
    <rect x="50" y="72" width="280" height="180" rx="3" fill="#131a27"/>
    <rect x="28" y="264" width="326" height="14" rx="4" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
    <rect x="160" y="268" width="62" height="6" rx="2" fill="#0f172a"/>
    <!-- USB-C port on the base -->
    <rect x="352" y="267" width="9" height="8" rx="2" fill="#00f0ff"/>
  </g>
  <!-- Betaflight UI mock inside the screen -->
  <g id="ui">
    <!-- header bar -->
    <rect x="50" y="72" width="280" height="20" rx="3" fill="#1e293b"/>
    <text x="78" y="86" font-size="12" font-weight="700" fill="#00f0ff">BETAFLIGHT 10.9</text>
    <circle cx="320" cy="82" r="3.5" fill="#10b981"/>
    <text x="312" y="86" font-size="12" font-weight="700" fill="#10b981" text-anchor="end">USB</text>
    <!-- sidebar: decorative tab glyphs (three short lines each, not checkboxes) -->
    <rect x="50" y="92" width="20" height="160" fill="#1e293b"/>
    <g stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" opacity="0.6" fill="none">
      <path d="M54,107 h12 M54,111 h8 M54,115 h12"/>
      <path d="M54,137 h12 M54,141 h8 M54,145 h12"/>
      <path d="M54,167 h12 M54,171 h8 M54,175 h12"/>
      <path d="M54,197 h12 M54,201 h8 M54,205 h12"/>
      <path d="M54,227 h12 M54,231 h8 M54,235 h12"/>
    </g>
    <!-- row separators -->
    <g stroke="#1e293b" stroke-width="1.5">
      <line x1="76" y1="127" x2="326" y2="127"/>
      <line x1="76" y1="157" x2="326" y2="157"/>
      <line x1="76" y1="187" x2="326" y2="187"/>
      <line x1="76" y1="217" x2="326" y2="217"/>
    </g>
    <!-- order chips 1..5 -->
    <g font-size="12" font-weight="700" text-anchor="middle">
      <circle cx="86" cy="111" r="8" fill="#f59e0b"/><text x="86" y="115" fill="#0f172a">1</text>
      <circle cx="86" cy="141" r="8" fill="#f59e0b"/><text x="86" y="145" fill="#0f172a">2</text>
      <circle cx="86" cy="171" r="8" fill="#f59e0b"/><text x="86" y="175" fill="#0f172a">3</text>
      <circle cx="86" cy="201" r="8" fill="#f59e0b"/><text x="86" y="205" fill="#0f172a">4</text>
      <circle cx="86" cy="231" r="8" fill="#f59e0b"/><text x="86" y="235" fill="#0f172a">5</text>
    </g>
    <!-- setting names (localized) -->
    <g font-size="13" font-weight="600" fill="#ffffff" text-anchor="start">
      <text data-l="fw" x="100" y="110">Firmware target</text>
      <text data-l="ports" x="100" y="140">UART ports</text>
      <text data-l="esc" x="100" y="170">ESC protocol</text>
      <text data-l="props" x="100" y="200">Motor direction</text>
      <text data-l="modes" x="100" y="230">Flight modes</text>
    </g>
    <!-- setting values (codes) -->
    <g font-size="12" font-weight="700" fill="#00f0ff" text-anchor="start">
      <text x="100" y="123">BETAFPVF405</text>
      <text x="100" y="153">UART1 SERIAL RX / UART2 SMARTAUDIO</text>
      <text x="100" y="183">DSHOT300</text>
      <text x="100" y="213">PROPS OUT</text>
      <text x="100" y="243">ARM / ANGLE / AIR</text>
    </g>
    <!-- done checks -->
    <g fill="#10b981" fill-opacity="0.18" stroke="#10b981" stroke-width="1.5">
      <rect x="308" y="103" width="14" height="14" rx="3"/>
      <rect x="308" y="133" width="14" height="14" rx="3"/>
      <rect x="308" y="163" width="14" height="14" rx="3"/>
      <rect x="308" y="193" width="14" height="14" rx="3"/>
      <rect x="308" y="223" width="14" height="14" rx="3"/>
    </g>
    <g fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M311,110 l3,3 l6,-6"/>
      <path d="M311,140 l3,3 l6,-6"/>
      <path d="M311,170 l3,3 l6,-6"/>
      <path d="M311,200 l3,3 l6,-6"/>
      <path d="M311,230 l3,3 l6,-6"/>
    </g>
  </g>
  <!-- USB-C cable: laptop base port -> S-curve up -> between the left ducts -> USB-C port on the side of the FC -->
  <g id="cable" fill="none" stroke-linecap="round">
    <path d="M361,271 C405,271 405,170 452,170 L492,170" stroke="#00f0ff" stroke-width="3"/>
    <rect x="490" y="164" width="14" height="12" rx="3" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/>
  </g>
  <!-- Pavo25 top view: 4 ducts, central plate, camera at the front (top) -->
  <g id="drone">
    <!-- ducts -->
    <g fill="#0f172a" stroke="#94a3b8" stroke-width="2">
      <circle cx="484" cy="134" r="26"/>
      <circle cx="556" cy="134" r="26"/>
      <circle cx="484" cy="206" r="26"/>
      <circle cx="556" cy="206" r="26"/>
    </g>
    <g fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4" opacity="0.7">
      <circle cx="484" cy="134" r="21"/>
      <circle cx="556" cy="134" r="21"/>
      <circle cx="484" cy="206" r="21"/>
      <circle cx="556" cy="206" r="21"/>
    </g>
    <!-- central carbon plate + camera -->
    <rect x="502" y="146" width="36" height="48" rx="4" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
    <rect x="516" y="130" width="8" height="16" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="511" y="116" width="18" height="14" rx="2" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5"/>
    <circle cx="520" cy="123" r="3.5" fill="#131a27" stroke="#00f0ff" stroke-width="1.5"/>
    <text x="520" y="176" font-size="12" font-weight="700" fill="#00f0ff" text-anchor="middle">FC</text>
    <!-- motor hubs -->
    <g fill="#131a27" stroke="#a855f7" stroke-width="2">
      <circle cx="484" cy="134" r="5"/>
      <circle cx="556" cy="134" r="5"/>
      <circle cx="484" cy="206" r="5"/>
      <circle cx="556" cy="206" r="5"/>
    </g>
    <!-- Props Out rotation: FL CCW, FR CW, RL CW, RR CCW -->
    <g fill="none" stroke="#a855f7" stroke-width="2" marker-end="url(#ah10)">
      <path d="M498,125 A16,16 0 0 0 470,125"/>
      <path d="M542,125 A16,16 0 0 1 570,125"/>
      <path d="M470,197 A16,16 0 0 1 498,197"/>
      <path d="M570,197 A16,16 0 0 0 542,197"/>
    </g>
    <g font-size="12" font-weight="700" fill="#a855f7" text-anchor="middle">
      <text x="484" y="153">CCW</text>
      <text x="556" y="153">CW</text>
      <text x="484" y="225">CW</text>
      <text x="556" y="225">CCW</text>
    </g>
    <!-- caption linking this rotation view to checklist item 4 -->
    <g id="props-caption">
      <circle cx="495" cy="254" r="8" fill="#f59e0b"/>
      <text x="495" y="258" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">4</text>
      <text x="508" y="259" font-size="13" font-weight="700" fill="#00f0ff" text-anchor="start">PROPS OUT</text>
    </g>
  </g>
  <!-- Callout leaders + dots -->
  <g id="leaders" stroke="#94a3b8" stroke-width="1.5" fill="none" stroke-linejoin="round">
    <line x1="384" y1="304" x2="387" y2="257"/>
    <path d="M598,92 L598,135 L560,135"/>
  </g>
  <g id="dots">
    <circle cx="387" cy="256" r="3" fill="#00f0ff"/>
    <circle cx="558" cy="135" r="3" fill="#f59e0b"/>
  </g>
  <!-- Localized callouts -->
  <g font-size="13" font-weight="600">
    <text data-l="usb" x="330" y="318" fill="#00f0ff" text-anchor="start">USB-C data cable</text>
    <text data-l="warn" x="616" y="86" fill="#f59e0b" font-weight="700" text-anchor="end">Motor test: props removed!</text>
  </g>
</svg>
    `,
    labels: {
      "title": {
            "ru": "Настройка Betaflight (USB-C)",
            "uz": "Betaflight sozlash (USB-C)",
            "en": "Betaflight setup via USB-C"
      },
      "fw": {
            "ru": "Прошивка (target)",
            "uz": "Proshivka (target)",
            "en": "Firmware target"
      },
      "ports": {
            "ru": "Порты UART",
            "uz": "UART portlari",
            "en": "UART ports"
      },
      "esc": {
            "ru": "Протокол ESC",
            "uz": "ESC protokoli",
            "en": "ESC protocol"
      },
      "props": {
            "ru": "Направление моторов",
            "uz": "Motorlar yo'nalishi",
            "en": "Motor direction"
      },
      "modes": {
            "ru": "Режимы полёта",
            "uz": "Parvoz rejimlari",
            "en": "Flight modes"
      },
      "usb": {
            "ru": "Дата-кабель USB-C",
            "uz": "USB-C ma'lumot kabeli",
            "en": "USB-C data cable"
      },
      "warn": {
            "ru": "Тест моторов без пропеллеров",
            "uz": "Motor testi: propellersiz!",
            "en": "Motor test: props removed!"
      }
}
  },
  // Step 11
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img" font-family="Rajdhani, Inter, Arial, sans-serif">
<title>Step 11: first safe power-up of the Pavo25. The LiPo XT30 is plugged through a Smoke Stopper fuse box into the drone XT30 pigtail; a multimeter in continuity mode probes the + and - battery pads on the flight controller and reads OL (no short); the Smoke Stopper green LED shows OK and the ELRS bind LED lights on the FC.</title>
<defs>
<!-- one ducted motor bay: ring wall + 3-spoke mount + motor bell cap -->
<g id="s11duct">
<circle r="33" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
<circle r="27" fill="#0f172a" stroke="#00f0ff" stroke-width="1.2" opacity="0.8"/>
<g stroke="#94a3b8" stroke-width="1.5" opacity="0.6">
<line x1="0" y1="0" x2="0" y2="27"/>
<line x1="0" y1="0" x2="-23.4" y2="-13.5"/>
<line x1="0" y1="0" x2="23.4" y2="-13.5"/>
</g>
<circle r="6" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
</g>
</defs>
<!-- ===== LiPo battery (top-left) ===== -->
<g>
<rect x="200" y="50" width="78" height="40" rx="5" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
<rect x="206" y="56" width="66" height="28" rx="2" fill="none" stroke="#94a3b8" stroke-width="1" opacity="0.4"/>
<text x="239" y="75" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">4S 450mAh</text>
<!-- battery lead to XT30 -->
<line x1="278" y1="64" x2="297" y2="64" stroke="#ff3366" stroke-width="2.5"/>
<line x1="278" y1="76" x2="297" y2="76" stroke="#94a3b8" stroke-width="2.5"/>
<!-- mated XT30 pair (battery / stopper input) -->
<rect x="297" y="60" width="32" height="20" rx="3" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
<line x1="313" y1="60" x2="313" y2="80" stroke="#f59e0b" stroke-width="1.5"/>
<text x="313" y="98" font-size="12" font-weight="600" fill="#94a3b8" text-anchor="middle">XT30</text>
<line x1="329" y1="64" x2="342" y2="64" stroke="#ff3366" stroke-width="2.5"/>
<line x1="329" y1="76" x2="342" y2="76" stroke="#94a3b8" stroke-width="2.5"/>
</g>
<!-- ===== Smoke Stopper box (top-center): bulb + fuse + OK LED ===== -->
<g>
<rect x="342" y="46" width="86" height="52" rx="5" fill="#131a27" stroke="#f59e0b" stroke-width="2"/>
<text x="385" y="62" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle" textLength="72" lengthAdjust="spacingAndGlyphs">SMOKE STOPPER</text>
<!-- bulb (off) -->
<circle cx="362" cy="80" r="9" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5"/>
<path d="M357 83 l2.5 -6 l2.5 6 l2.5 -6 l2.5 6" fill="none" stroke="#f59e0b" stroke-width="1.2" opacity="0.7"/>
<!-- fuse symbol -->
<line x1="373" y1="80" x2="402" y2="80" stroke="#94a3b8" stroke-width="1.2"/>
<rect x="379" y="76" width="16" height="8" fill="#131a27" stroke="#94a3b8" stroke-width="1.2"/>
<!-- green OK LED -->
<circle cx="414" cy="76" r="10" fill="#10b981" opacity="0.25"/>
<circle cx="414" cy="76" r="5" fill="#10b981"/>
<text x="414" y="95" font-size="12" font-weight="700" fill="#10b981" text-anchor="middle">OK</text>
<!-- output leads to XT30 -->
<line x1="382" y1="98" x2="382" y2="106" stroke="#ff3366" stroke-width="2.5"/>
<line x1="388" y1="98" x2="388" y2="106" stroke="#94a3b8" stroke-width="2.5"/>
<!-- mated XT30 pair (stopper output / drone pigtail) -->
<rect x="376" y="106" width="18" height="32" rx="3" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
<line x1="376" y1="122" x2="394" y2="122" stroke="#f59e0b" stroke-width="1.5"/>
<text x="370" y="126" font-size="12" font-weight="600" fill="#94a3b8" text-anchor="end">XT30</text>
</g>
<!-- ===== Pavo25 top view: 4 ducts + central body ===== -->
<g>
<use href="#s11duct" x="339" y="176"/>
<use href="#s11duct" x="431" y="176"/>
<use href="#s11duct" x="339" y="268"/>
<use href="#s11duct" x="431" y="268"/>
<!-- central body / carbon plate -->
<rect x="366" y="184" width="38" height="76" rx="5" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
<!-- flight controller PCB -->
<rect x="372" y="196" width="27" height="48" rx="2" fill="#0f172a" stroke="#94a3b8" stroke-width="1.2"/>
<rect x="383" y="232" width="12" height="10" rx="1" fill="#1e293b" stroke="#94a3b8" stroke-width="1"/>
<!-- drone XT30 pigtail down into the FC battery pads -->
<path d="M382 138 V204 Q382 212 378 212" fill="none" stroke="#ff3366" stroke-width="2.5"/>
<path d="M388 138 V218 Q388 226 380 226" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
<!-- VBAT + and - pads -->
<circle cx="378" cy="212" r="4.5" fill="#ff3366"/>
<path d="M375.5 212h5M378 209.5v5" stroke="#ffffff" stroke-width="1.2"/>
<circle cx="378" cy="226" r="4.5" fill="#94a3b8"/>
<path d="M375.5 226h5" stroke="#0f172a" stroke-width="1.4"/>
<!-- ELRS bind LED on the FC -->
<circle cx="396" cy="216" r="6" fill="#10b981" opacity="0.3"/>
<circle cx="396" cy="216" r="3.5" fill="#10b981"/>
<text x="385" y="322" font-size="12" font-weight="600" fill="#94a3b8" text-anchor="middle" letter-spacing="2">PAVO25</text>
</g>
<!-- ===== Multimeter (bottom-left) in continuity mode ===== -->
<g>
<rect x="217" y="214" width="66" height="92" rx="6" fill="#131a27" stroke="#94a3b8" stroke-width="2"/>
<!-- LCD: continuity icon + OL reading -->
<rect x="224" y="221" width="52" height="26" rx="2" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
<circle cx="232" cy="234" r="2" fill="#10b981"/>
<path d="M236 230 a5 5 0 0 1 0 8 M240 227 a9 9 0 0 1 0 14" fill="none" stroke="#10b981" stroke-width="1.2"/>
<text x="270" y="240" font-size="15" font-weight="700" fill="#10b981" text-anchor="end">OL</text>
<!-- rotary dial -->
<circle cx="250" cy="272" r="15" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="250" y1="272" x2="259" y2="260" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
<circle cx="263" cy="255" r="2" fill="#10b981"/>
<!-- jacks: COM (black) and V/ohm (red) -->
<circle cx="238" cy="299" r="4" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5"/>
<circle cx="262" cy="299" r="4" fill="#0f172a" stroke="#ff3366" stroke-width="1.5"/>
<!-- probe leads -->
<path d="M238 299 C238 334 278 336 292 302 C300 286 300 231 308 231" fill="none" stroke="#94a3b8" stroke-width="2"/>
<path d="M262 299 C262 316 278 314 284 296 C288 280 288 217 308 217" fill="none" stroke="#ff3366" stroke-width="2"/>
<!-- probe handles + metal tips on the pads -->
<line x1="308" y1="217" x2="364" y2="213" stroke="#ff3366" stroke-width="5" stroke-linecap="round"/>
<line x1="364" y1="213" x2="373.5" y2="212" stroke="#e2e8f0" stroke-width="2"/>
<line x1="308" y1="231" x2="364" y2="227" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
<line x1="364" y1="227" x2="373.5" y2="226" stroke="#e2e8f0" stroke-width="2"/>
</g>
<!-- ===== Leader lines ===== -->
<g stroke="#94a3b8" stroke-width="1.5" fill="none">
<line x1="150" y1="74" x2="200" y2="72"/>
<line x1="204" y1="146" x2="312" y2="217"/>
<line x1="194" y1="232" x2="224" y2="234"/>
<line x1="194" y1="288" x2="217" y2="288"/>
<line x1="452" y1="52" x2="428" y2="58"/>
<line x1="452" y1="88" x2="419" y2="78"/>
<line x1="452" y1="124" x2="394" y2="128"/>
<line x1="452" y1="216" x2="403" y2="216"/>
</g>
<g fill="#ffffff">
<circle cx="200" cy="72" r="3"/><circle cx="312" cy="217" r="3"/><circle cx="224" cy="234" r="3"/><circle cx="217" cy="288" r="3"/>
<circle cx="428" cy="58" r="3"/><circle cx="419" cy="78" r="3"/><circle cx="394" cy="128" r="3"/><circle cx="403" cy="216" r="3"/>
</g>
<!-- ===== Numbered action chips: 1 continuity test, 2 plug via stopper, 3 bind ===== -->
<g font-size="12" font-weight="700" text-anchor="middle">
<circle cx="218" cy="216" r="9" fill="#f59e0b"/><text x="218" y="220.5" fill="#0f172a">1</text>
<circle cx="313" cy="46" r="9" fill="#f59e0b"/><text x="313" y="50.5" fill="#0f172a">2</text>
<circle cx="446" cy="216" r="9" fill="#f59e0b"/><text x="446" y="220.5" fill="#0f172a">3</text>
</g>
<!-- ===== Callout labels (localized) ===== -->
<g font-size="14" font-weight="600" fill="#f1f5f9">
<text data-l="lipo" x="24" y="78" text-anchor="start">LiPo battery</text>
<text data-l="probes" x="24" y="150" text-anchor="start">Probes on + and − pads</text>
<text data-l="ol" x="24" y="236" text-anchor="start">OL (no beep) = no short</text>
<text data-l="meter" x="24" y="292" text-anchor="start">Multimeter: continuity</text>
<text data-l="stopper" x="616" y="56" text-anchor="end">Smoke Stopper (fuse box)</text>
<text data-l="ok" x="616" y="92" text-anchor="end">Green LED = no short</text>
<text data-l="pigtail" x="616" y="128" text-anchor="end">Drone XT30 pigtail</text>
<text data-l="led" x="616" y="220" text-anchor="end">ELRS bind LED</text>
</g>
</svg>
    `,
    labels: {
      "lipo": {
            "ru": "Батарея LiPo",
            "uz": "LiPo batareya",
            "en": "LiPo battery"
      },
      "probes": {
            "ru": "Щупы на площадки + и −",
            "uz": "Zondlar + va − kontaktlarda",
            "en": "Probes on + and − pads"
      },
      "ol": {
            "ru": "Прозвонка: OL = КЗ нет",
            "uz": "OL (signal yo‘q) = yaxshi",
            "en": "OL (no beep) = no short"
      },
      "meter": {
            "ru": "Мультиметр",
            "uz": "Multimetr: tutashuv testi",
            "en": "Multimeter: continuity"
      },
      "stopper": {
            "ru": "Smoke Stopper: защита",
            "uz": "Smoke Stopper saqlagichi",
            "en": "Smoke Stopper (fuse box)"
      },
      "ok": {
            "ru": "Зелёный LED = КЗ нет",
            "uz": "Yashil LED = tutashuv yo‘q",
            "en": "Green LED = no short"
      },
      "pigtail": {
            "ru": "Разъём XT30 дрона",
            "uz": "Dronning XT30 ulagichi",
            "en": "Drone XT30 pigtail"
      },
      "led": {
            "ru": "Индикатор ELRS Bind",
            "uz": "ELRS Bind indikatori",
            "en": "ELRS bind LED"
      }
}
  },
  // Step 12
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img" font-family="Rajdhani, Inter, Arial, sans-serif">
  <title>Step 12: propeller installation on the Pavo25, top view with the front at the top. Props Out rotation: M4 front-left CCW, M2 front-right CW, M3 rear-left CW, M1 rear-right CCW, shown by curved arrows around each duct. Detail: pressing a Gemfan D63 3-blade prop onto the motor shaft and tightening the T-mount screw with a 1.5 mm hex driver. Props go on only after all bench tests.</title>
  <defs>
    <!-- CW prop: 3 swept blades; CCW prop is its mirror image -->
    <g id="p12cw">
      <path d="M0,-8 C14,-10 26,-22 17,-33 C4,-30 -2,-18 0,-8 Z"/>
      <path d="M0,-8 C14,-10 26,-22 17,-33 C4,-30 -2,-18 0,-8 Z" transform="rotate(120)"/>
      <path d="M0,-8 C14,-10 26,-22 17,-33 C4,-30 -2,-18 0,-8 Z" transform="rotate(240)"/>
    </g>
    <g id="p12ccw" transform="scale(-1,1)"><use href="#p12cw"/></g>
    <!-- duct: ring wall + faint motor-mount spokes -->
    <g id="d12">
      <circle r="50" fill="#1e293b" stroke="#00f0ff" stroke-width="2"/>
      <circle r="43" fill="#0f172a" stroke="#00f0ff" stroke-width="1.2" opacity="0.8"/>
      <g stroke="#94a3b8" stroke-width="1.5" opacity="0.35">
        <line x1="0" y1="0" x2="0" y2="43"/><line x1="0" y1="0" x2="-37.2" y2="-21.5"/><line x1="0" y1="0" x2="37.2" y2="-21.5"/>
      </g>
    </g>
    <marker id="a12g" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#10b981"/></marker>
    <marker id="a12a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#f59e0b"/></marker>
    <marker id="a12c" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#00f0ff"/></marker>
    <marker id="s12g" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#10b981"/></marker>
    <marker id="s12a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#f59e0b"/></marker>
  </defs>
  <!-- Title -->
  <text data-l="title" x="24" y="44" font-size="17" font-weight="700" fill="#ffffff" text-anchor="start">Propeller installation</text>
  <!-- ===== MAIN VIEW: Pavo25 from above, front at the top ===== -->
  <g id="body">
    <circle cx="196" cy="210" r="58" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <use href="#d12" x="138" y="152"/>
    <use href="#d12" x="254" y="152"/>
    <use href="#d12" x="138" y="268"/>
    <use href="#d12" x="254" y="268"/>
    <polygon points="154,210 196,168 238,210 196,252" fill="#131a27" stroke="#00f0ff" stroke-width="2" stroke-linejoin="round"/>
    <!-- camera at the front tip of the plate -->
    <rect x="190" y="170" width="12" height="12" rx="2" fill="#131a27" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="196" cy="176" r="3.5" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5"/>
  </g>
  <!-- Props: purple, CW / CCW blade shapes mirrored -->
  <g id="props" fill="#a855f7" fill-opacity="0.85" stroke="#a855f7" stroke-width="1" stroke-linejoin="round">
    <use href="#p12ccw" x="138" y="152"/>
    <use href="#p12cw" x="254" y="152"/>
    <use href="#p12cw" x="138" y="268"/>
    <use href="#p12ccw" x="254" y="268"/>
  </g>
  <!-- Hubs with motor numbers -->
  <g id="hubs" font-size="12" font-weight="700" text-anchor="middle">
    <circle cx="138" cy="152" r="11" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
    <circle cx="254" cy="152" r="11" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
    <circle cx="138" cy="268" r="11" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
    <circle cx="254" cy="268" r="11" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
    <text x="138" y="156" fill="#ffffff">M4</text>
    <text x="254" y="156" fill="#ffffff">M2</text>
    <text x="138" y="272" fill="#ffffff">M3</text>
    <text x="254" y="272" fill="#ffffff">M1</text>
  </g>
  <!-- Rotation arrows around each duct: green = CCW, amber = CW -->
  <g id="rot" fill="none" stroke-width="3" stroke-linecap="round">
    <path d="M162.5,99.4 A58,58 0 0 0 85.4,176.5" stroke="#10b981" marker-end="url(#a12g)"/>
    <path d="M229.5,99.4 A58,58 0 0 1 306.6,176.5" stroke="#f59e0b" marker-end="url(#a12a)"/>
    <path d="M162.5,320.6 A58,58 0 0 1 85.4,243.5" stroke="#f59e0b" marker-end="url(#a12a)"/>
    <path d="M229.5,320.6 A58,58 0 0 0 306.6,243.5" stroke="#10b981" marker-end="url(#a12g)"/>
  </g>
  <g id="rotcodes" font-size="13" font-weight="700" text-anchor="middle">
    <text x="87" y="105" fill="#10b981">CCW</text>
    <text x="305" y="105" fill="#f59e0b">CW</text>
    <text x="87" y="323" fill="#f59e0b">CW</text>
    <text x="305" y="323" fill="#10b981">CCW</text>
  </g>
  <!-- Front marker: axis from the camera up to an arrow -->
  <g id="front">
    <line x1="196" y1="168" x2="196" y2="96" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="4 3"/>
    <circle cx="196" cy="170" r="3" fill="#00f0ff"/>
    <line x1="196" y1="96" x2="196" y2="64" stroke="#00f0ff" stroke-width="2.5" marker-end="url(#a12c)"/>
    <text data-l="front" x="208" y="76" font-size="13" font-weight="600" fill="#00f0ff" text-anchor="start">Front (camera)</text>
  </g>
  <!-- ===== RIGHT COLUMN: legend ===== -->
  <g id="legend">
    <circle cx="382" cy="48" r="8" fill="#f59e0b"/>
    <text x="382" y="52" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">1</text>
    <text data-l="propsout" x="396" y="52" font-size="14" font-weight="700" fill="#ffffff" text-anchor="start">Props Out mode in Betaflight</text>
    <line x1="372" y1="60" x2="616" y2="60" stroke="#00f0ff" stroke-width="1" opacity="0.35"/>
    <path d="M392,84.9 A8,8 0 1 0 381.1,82" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#s12g)"/>
    <text data-l="ccw" x="404" y="82" font-size="13" font-weight="600" fill="#10b981" text-anchor="start">CCW = counter-clockwise</text>
    <path d="M384,110.9 A8,8 0 1 1 394.9,108" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#s12a)"/>
    <text data-l="cw" x="404" y="108" font-size="13" font-weight="600" fill="#f59e0b" text-anchor="start">CW = clockwise</text>
  </g>
  <!-- ===== DETAIL: motor side view, prop on shaft, T-mount screw ===== -->
  <rect x="372" y="124" width="244" height="176" rx="8" fill="#0f172a" stroke="#00f0ff" stroke-opacity="0.35" stroke-width="1"/>
  <g id="detail">
    <!-- hex driver with tightening arrow -->
    <path d="M416.8,143.2 A14,14 0 0 1 443.2,143.2" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#s12a)"/>
    <rect x="418" y="148" width="24" height="12" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <rect x="427" y="160" width="6" height="32" fill="#94a3b8"/>
    <text x="440" y="184" font-size="12" font-weight="700" fill="#94a3b8" text-anchor="start">HEX 1.5 mm</text>
    <!-- T-mount screw head -->
    <rect x="423" y="192" width="14" height="7" rx="1.5" fill="#f59e0b"/>
    <circle cx="430" cy="195.5" r="1.8" fill="#0f172a"/>
    <!-- prop hub + two blades (side view) -->
    <path d="M418,203 C404,199 392,200 384,206 C394,210 408,213 418,211 Z" fill="#a855f7" fill-opacity="0.85" stroke="#a855f7" stroke-width="1"/>
    <path d="M442,203 C456,199 468,200 476,206 C466,210 452,213 442,211 Z" fill="#a855f7" fill-opacity="0.85" stroke="#a855f7" stroke-width="1"/>
    <rect x="418" y="199" width="24" height="14" rx="2" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <line x1="430" y1="199" x2="430" y2="224" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 2"/>
    <!-- shaft, bell, base, 3 phase wires -->
    <rect x="427" y="213" width="6" height="14" fill="#94a3b8"/>
    <rect x="400" y="227" width="60" height="34" rx="4" fill="#131a27" stroke="#a855f7" stroke-width="2"/>
    <line x1="400" y1="234" x2="460" y2="234" stroke="#a855f7" stroke-width="1" opacity="0.5"/>
    <rect x="406" y="261" width="48" height="7" rx="2" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <g fill="none" stroke="#94a3b8" stroke-width="1.5">
      <path d="M454,262 C466,262 472,270 484,270"/>
      <path d="M454,265 C466,265 472,274 484,274"/>
      <path d="M454,268 C466,268 472,278 484,278"/>
    </g>
    <!-- lookup: prop marking -> motor numbers -->
    <line x1="488" y1="198" x2="488" y2="270" stroke="#00f0ff" stroke-width="1" opacity="0.25" stroke-dasharray="3 3"/>
    <g fill="#a855f7" fill-opacity="0.85" stroke="#a855f7" stroke-width="1" stroke-linejoin="round">
      <use href="#p12cw" transform="translate(508,214) scale(0.5)"/>
      <use href="#p12ccw" transform="translate(508,252) scale(0.5)"/>
    </g>
    <circle cx="508" cy="214" r="4" fill="#1e293b" stroke="#a855f7" stroke-width="1.2"/>
    <circle cx="508" cy="252" r="4" fill="#1e293b" stroke="#a855f7" stroke-width="1.2"/>
    <g font-size="13" font-weight="700" text-anchor="start">
      <text x="532" y="218"><tspan fill="#f59e0b">CW</tspan><tspan fill="#ffffff" dx="8">M2 + M3</tspan></text>
      <text x="532" y="256"><tspan fill="#10b981">CCW</tspan><tspan fill="#ffffff" dx="8">M1 + M4</tspan></text>
    </g>
    <!-- chips + labels -->
    <circle cx="454" cy="154" r="8" fill="#f59e0b"/>
    <text x="454" y="158" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">3</text>
    <text data-l="screw" x="468" y="158" font-size="13" font-weight="600" fill="#f59e0b" text-anchor="start">Tighten T-mount screw</text>
    <line x1="383" y1="280" x2="385" y2="210" stroke="#94a3b8" stroke-width="1.5"/>
    <circle cx="385" cy="207" r="3" fill="#a855f7"/>
    <circle cx="382" cy="288" r="8" fill="#f59e0b"/>
    <text x="382" y="292" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">2</text>
    <text data-l="prop" x="396" y="292" font-size="13" font-weight="600" fill="#a855f7" text-anchor="start">Press D63 prop onto shaft</text>
  </g>
  <!-- Danger box -->
  <g id="danger">
    <rect x="372" y="306" width="244" height="28" rx="6" fill="#ff3366" fill-opacity="0.12" stroke="#ff3366" stroke-width="1.5"/>
    <path d="M390,311 L399,328 L381,328 Z" fill="none" stroke="#ff3366" stroke-width="1.5" stroke-linejoin="round"/>
    <text x="390" y="326" font-size="12" font-weight="700" fill="#ff3366" text-anchor="middle">!</text>
    <text data-l="warn" x="508" y="325" font-size="13" font-weight="700" fill="#ff3366" text-anchor="middle">Only after all bench tests!</text>
  </g>
</svg>
    `,
    labels: {
      "title": {
            "ru": "Установка пропеллеров",
            "uz": "Propellerlarni o‘rnatish",
            "en": "Propeller installation"
      },
      "front": {
            "ru": "Перед (камера)",
            "uz": "Old tomoni (kamera)",
            "en": "Front (camera)"
      },
      "propsout": {
            "ru": "Режим Props Out в Betaflight",
            "uz": "Betaflight: Props Out rejimi",
            "en": "Props Out mode in Betaflight"
      },
      "ccw": {
            "ru": "CCW = против часовой",
            "uz": "CCW = soatga qarshi",
            "en": "CCW = counter-clockwise"
      },
      "cw": {
            "ru": "CW = по часовой",
            "uz": "CW = soat bo‘ylab",
            "en": "CW = clockwise"
      },
      "screw": {
            "ru": "Затянуть винт T-Mount",
            "uz": "T-Mount vintini qotiring",
            "en": "Tighten T-mount screw"
      },
      "prop": {
            "ru": "Надеть D63 на вал мотора",
            "uz": "D63 propellerni valga taqing",
            "en": "Press D63 prop onto shaft"
      },
      "warn": {
            "ru": "Только после всех проверок!",
            "uz": "Faqat testlardan keyin!",
            "en": "Only after all bench tests!"
      }
}
  },
  // Step 13
  {
    svg: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" class="assembly-svg" role="img">
  <title>Maiden flight: a BetaFPV Pavo25 cinewhoop hovering 1-2 m above an open grassy area within the pilot's line of sight; the pilot holds the radio with the goggles pushed up; a pre-flight checklist card lists five checks (fasteners, battery leads, goggles video, failsafe, hover) all ticked; numbered chips link each check to the drawing</title>
  <defs>
    <marker id="s13dim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#f59e0b"/></marker>
    <marker id="s13air" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#94a3b8"/></marker>
    <g id="s13duct"><path d="M-40,0 L-40,10.4 A40 20 0 0 0 40,10.4 L40,0 A40 20 0 0 1 -40,0 Z" fill="#1e293b" stroke="#00f0ff" stroke-width="2" stroke-linejoin="round"/><ellipse rx="40" ry="20" fill="#0f172a" stroke="#00f0ff" stroke-width="2"/><ellipse rx="35" ry="17.5" fill="none" stroke="#00f0ff" stroke-width="1" opacity="0.45"/><ellipse cy="3.5" rx="30" ry="15" fill="#a855f7" fill-opacity="0.14" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="4 3"/><g transform="translate(0 3.5)" stroke="#a855f7" stroke-width="3.5" stroke-linecap="round" opacity="0.85"><line x2="-11.4" y2="-12.3"/><line x2="-15.5" y2="11"/><line x2="26.9" y2="1.1"/></g><circle cy="3.5" r="4" fill="#a855f7" stroke="#0f172a" stroke-width="1"/></g>
  </defs>
  <g font-family="Rajdhani, Inter, Arial, sans-serif">
  <!-- ===== GROUND: open grassy area ===== -->
  <g stroke="#10b981" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.75">
    <line x1="28" y1="306" x2="362" y2="306"/>
    <path d="M33,306l3,-7 3,7m-3,-3 5,-5M51,306l3,-7 3,7m-3,-3 5,-5M69,306l3,-7 3,7m-3,-3 5,-5M87,306l3,-7 3,7m-3,-3 5,-5M105,306l3,-7 3,7m-3,-3 5,-5M123,306l3,-7 3,7m-3,-3 5,-5M141,306l3,-7 3,7m-3,-3 5,-5M159,306l3,-7 3,7m-3,-3 5,-5M177,306l3,-7 3,7m-3,-3 5,-5M195,306l3,-7 3,7m-3,-3 5,-5M213,306l3,-7 3,7m-3,-3 5,-5M231,306l3,-7 3,7m-3,-3 5,-5M249,306l3,-7 3,7m-3,-3 5,-5M267,306l3,-7 3,7m-3,-3 5,-5M285,306l3,-7 3,7m-3,-3 5,-5M303,306l3,-7 3,7m-3,-3 5,-5M321,306l3,-7 3,7m-3,-3 5,-5M339,306l3,-7 3,7m-3,-3 5,-5M357,306l3,-7 3,7m-3,-3 5,-5"/>
  </g>
  <!-- ===== PILOT: goggles pushed up, radio in hands, watching the drone (LOS) ===== -->
  <g>
    <line x1="60" y1="226" x2="152" y2="185" stroke="#00f0ff" stroke-width="1.3" stroke-dasharray="5 4" opacity="0.7"/>
    <circle cx="52" cy="228" r="7.5" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
    <rect x="43" y="215" width="18" height="7" rx="2" fill="#00f0ff" stroke="#0f172a" stroke-width="1"/>
    <circle cx="55" cy="227" r="1.2" fill="#00f0ff"/>
    <g stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" fill="none">
      <line x1="52" y1="236" x2="52" y2="270"/><line x1="52" y1="270" x2="45" y2="305"/><line x1="52" y1="270" x2="59" y2="305"/>
      <line x1="52" y1="246" x2="64" y2="258"/><line x1="52" y1="246" x2="68" y2="252"/>
    </g>
    <rect x="62" y="250" width="22" height="17" rx="3" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="82" y1="250" x2="91" y2="238" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="68" cy="258" r="2" fill="#00f0ff"/><circle cx="78" cy="258" r="2" fill="#00f0ff"/>
  </g>
  <!-- ===== PAVO25 hovering (oblique view from front-left, above) ===== -->
  <g>
    <use href="#s13duct" x="237.2" y="119.7"/><!-- duct rear-right -->
    <use href="#s13duct" x="150.2" y="140"/><!-- duct rear-left -->
    <!-- centre monocoque hub -->
    <path d="M187,155.1 L187,162 A27 13.5 0 0 0 241,162 L241,155.1 A27 13.5 0 0 1 187,155.1 Z" fill="#131a27" stroke="#94a3b8" stroke-width="1.5" stroke-linejoin="round"/>
    <ellipse cx="214" cy="155.1" rx="27" ry="13.5" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="244.8,148.3 199.6,140.1 183.2,162.7 228.4,170.9" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5" stroke-linejoin="round" opacity="0.5"/>
    <polygon points="244.8,146.2 199.6,137.9 183.2,160.5 228.4,168.7" fill="#131a27" stroke="#00f0ff" stroke-width="1.5" stroke-linejoin="round" opacity="1"/>
    <circle cx="192.1" cy="160.6" r="2.4" fill="#f59e0b" stroke="#0f172a" stroke-width="0.8"/>
    <circle cx="239.3" cy="149.7" r="2.4" fill="#f59e0b" stroke="#0f172a" stroke-width="0.8"/>
    <!-- 4S LiPo on top plate, strapped -->
    <polygon points="213.2,166.1 191.2,142.6 191.2,127 213.2,150.5" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5" stroke-linejoin="round"/>
    <polygon points="213.2,166.1 236.8,160.6 236.8,145.1 213.2,150.5" fill="#131a27" stroke="#94a3b8" stroke-width="1.5" stroke-linejoin="round"/>
    <polygon points="191.2,127 214.8,121.5 236.8,145.1 213.2,150.5" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5" stroke-linejoin="round"/>
    <polygon points="203.5,140.1 227,134.6 224.5,131.9 201,137.4" fill="#94a3b8" fill-opacity="0.55" stroke="none"/>
    <polygon points="203.5,155.7 201,153 201,137.4 203.5,140.1" fill="#94a3b8" fill-opacity="0.4" stroke="none"/>
    <text x="221.6" y="148.2" text-anchor="middle" font-size="12" font-weight="700" fill="#94a3b8">4S</text>
    <!-- battery leads to XT30, tucked at the front centre -->
    <path d="M227.1,162.5 Q232,171 238.5,180" fill="none" stroke="#ff3366" stroke-width="2" stroke-linecap="round"/>
    <path d="M230.1,162.5 Q235,171 241.5,180" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
    <use href="#s13duct" x="277.8" y="163.2"/><!-- duct front-right -->
    <use href="#s13duct" x="190.8" y="183.5"/><!-- duct front-left -->
    <rect x="234.5" y="179" width="11" height="8" rx="1.5" fill="#f59e0b" stroke="#0f172a" stroke-width="1"/>
    <!-- FPV camera -->
    <rect x="218.4" y="157.1" width="16" height="13" rx="2" fill="#1e293b" stroke="#00f0ff" stroke-width="1.5"/>
    <circle cx="228.9" cy="164.6" r="4" fill="#0f172a" stroke="#00f0ff" stroke-width="1.5"/>
    <circle cx="228.9" cy="164.6" r="1.3" fill="#00f0ff"/>
  </g>
  <!-- downwash under the front ducts -->
  <g stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 4" fill="none" opacity="0.55" marker-end="url(#s13air)">
    <path d="M176,211 Q170,252 165,292"/><path d="M206,211 Q210,252 215,292"/>
    <path d="M270,192 Q270,244 271,292"/><path d="M291,192 Q295,244 300,292"/>
  </g>
  <!-- hover height 1-2 m -->
  <line x1="300" y1="214" x2="348" y2="214" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2" opacity="0.8"/>
  <line x1="340" y1="217" x2="340" y2="303" stroke="#f59e0b" stroke-width="1.5" marker-start="url(#s13dim)" marker-end="url(#s13dim)"/>
  <text x="333" y="253" text-anchor="end" font-size="14" font-weight="700" fill="#f59e0b">1–2 m</text>
  <!-- numbered chips linking to the checklist -->
  <line x1="256" y1="93" x2="237.2" y2="123.2" stroke="#94a3b8" stroke-width="1.5"/><circle cx="237.2" cy="123.2" r="3" fill="#f59e0b"/><circle cx="261" cy="86" r="8" fill="#00f0ff"/><text x="261" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">1</text>
  <line x1="251" y1="201" x2="240" y2="184" stroke="#94a3b8" stroke-width="1.5"/><circle cx="240" cy="184" r="3" fill="#f59e0b"/><circle cx="256" cy="208" r="8" fill="#00f0ff"/><text x="256" y="212" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">2</text>
  <circle cx="34" cy="219" r="8" fill="#00f0ff"/><text x="34" y="223" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">3</text>
  <circle cx="96" cy="266" r="8" fill="#00f0ff"/><text x="96" y="270" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">4</text>
  <circle cx="355" cy="249" r="8" fill="#00f0ff"/><text x="355" y="253" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">5</text>
  <!-- callouts -->
  <text data-l="los" x="28" y="44" text-anchor="start" font-size="14" font-weight="600" fill="#00f0ff">Line of sight (LOS)</text>
  <line x1="56" y1="50" x2="104" y2="206.4" stroke="#94a3b8" stroke-width="1.5"/><circle cx="104" cy="206.4" r="3" fill="#00f0ff"/>
  <text data-l="grass" x="28" y="332" text-anchor="start" font-size="14" font-weight="600" fill="#10b981">Open grassy area</text>
  <line x1="36" y1="321" x2="36" y2="306" stroke="#94a3b8" stroke-width="1.5"/><circle cx="36" cy="306" r="3" fill="#10b981"/>
  <!-- ===== PRE-FLIGHT CHECKLIST CARD ===== -->
  <rect x="372" y="40" width="244" height="272" rx="8" fill="#0f172a" stroke="#00f0ff" stroke-opacity="0.35" stroke-width="1"/>
  <text data-l="cktitle" x="386" y="66" text-anchor="start" font-size="15" font-weight="700" fill="#00f0ff">Pre-flight checklist</text>
  <line x1="386" y1="76" x2="602" y2="76" stroke="#00f0ff" stroke-width="1" opacity="0.3"/>
  <circle cx="394" cy="99" r="8" fill="#00f0ff"/><text x="394" y="103" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">1</text><text data-l="c1" x="408" y="104" text-anchor="start" font-size="13" font-weight="600" fill="#ffffff">Fasteners tight</text><polyline points="598,99 602,103 610,94" fill="none" stroke="#10b981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="386" y1="117" x2="602" y2="117" stroke="#00f0ff" stroke-width="1" opacity="0.12"/>
  <circle cx="394" cy="135" r="8" fill="#00f0ff"/><text x="394" y="139" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">2</text><text data-l="c2" x="408" y="140" text-anchor="start" font-size="13" font-weight="600" fill="#ffffff">Battery leads clear of props</text><polyline points="598,135 602,139 610,130" fill="none" stroke="#10b981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="386" y1="153" x2="602" y2="153" stroke="#00f0ff" stroke-width="1" opacity="0.12"/>
  <circle cx="394" cy="171" r="8" fill="#00f0ff"/><text x="394" y="175" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">3</text><text data-l="c3" x="408" y="176" text-anchor="start" font-size="13" font-weight="600" fill="#ffffff">Goggles: clear video</text><polyline points="598,171 602,175 610,166" fill="none" stroke="#10b981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="386" y1="189" x2="602" y2="189" stroke="#00f0ff" stroke-width="1" opacity="0.12"/>
  <circle cx="394" cy="207" r="8" fill="#00f0ff"/><text x="394" y="211" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">4</text><text data-l="c4" x="408" y="212" text-anchor="start" font-size="13" font-weight="600" fill="#ffffff">Failsafe: radio off → stop</text><polyline points="598,207 602,211 610,202" fill="none" stroke="#10b981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="386" y1="225" x2="602" y2="225" stroke="#00f0ff" stroke-width="1" opacity="0.12"/>
  <circle cx="394" cy="243" r="8" fill="#00f0ff"/><text x="394" y="247" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">5</text><text data-l="c5" x="408" y="248" text-anchor="start" font-size="13" font-weight="600" fill="#ffffff">Hover 1–2 m over grass</text><polyline points="598,243 602,247 610,238" fill="none" stroke="#10b981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="386" y="268" width="216" height="30" rx="15" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1.5"/>
  <polyline points="402,283 406,287 414,278" fill="none" stroke="#10b981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="422" y="288" text-anchor="start" font-size="15" font-weight="700" fill="#10b981">5/5 OK</text>
  </g>
</svg>
    `,
    labels: {
      "los": {
            "ru": "Прямая видимость (LOS)",
            "uz": "Ko‘z bilan kuzatish (LOS)",
            "en": "Line of sight (LOS)"
      },
      "grass": {
            "ru": "Открытая площадка с травой",
            "uz": "Ochiq maysazor",
            "en": "Open grassy area"
      },
      "cktitle": {
            "ru": "Предполётный чеклист",
            "uz": "Parvoz oldi tekshiruvi",
            "en": "Pre-flight checklist"
      },
      "c1": {
            "ru": "Все винты затянуты",
            "uz": "Barcha vintlar qotirilgan",
            "en": "Fasteners tight"
      },
      "c2": {
            "ru": "Провода АКБ вне винтов",
            "uz": "Batareya simi vintdan uzoq",
            "en": "Battery leads clear of props"
      },
      "c3": {
            "ru": "Очки: чёткое видео",
            "uz": "Ko‘zoynakda video toza",
            "en": "Goggles: clear video"
      },
      "c4": {
            "ru": "Failsafe: пульт выкл → стоп",
            "uz": "Failsafe: pult o‘chsa → stop",
            "en": "Failsafe: radio off → stop"
      },
      "c5": {
            "ru": "Висение 1–2 м над травой",
            "uz": "Maysa ustida 1–2 m parvoz",
            "en": "Hover 1–2 m over grass"
      }
}
  }
];
