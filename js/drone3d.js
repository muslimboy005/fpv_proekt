/**
 * 3D Interactive Model of BetaFPV Pavo25 Cinewhoop Drone
 * Built with Three.js
 * Supports:
 * - 360 Orbit Controls
 * - Camera perspectives: Front, Rear, Top, Side, Isometric
 * - Exploded View animation (Assembly / Disassembly)
 * - LED neon color switching (Cyan / Red / Off)
 * - Propeller rotation animation
 * - Interactive 3D component hotspots
 */

class Drone3DViewer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;

    // Groups & Components for Exploded View
    this.droneGroup = null;
    this.parts = {
      frame: null,
      topPlate: null,
      bottomPlate: null,
      fcStack: null,
      motors: [],
      props: [],
      camera: null,
      vtx: null,
      antenna: null,
      battery: null,
      strap: null,
      ledRing: null
    };

    // State
    this.isExploded = false;
    this.explodedProgress = 0; // 0 (assembled) to 1 (exploded)
    this.targetExplodedProgress = 0;
    this.propSpeed = 0.25;
    this.isPropsSpinning = true;
    this.ledColorState = 0; // 0: Cyan, 1: Red, 2: Off
    this.ledColors = [0x00f0ff, 0xff2a55, 0x111111];

    // Camera animation
    this.targetCamPos = new THREE.Vector3(5.5, 4.2, 6.5);
    this.targetLookAt = new THREE.Vector3(0, 0, 0);

    this.hotspots = [];

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 550;

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x080b12);
    this.scene.fog = new THREE.FogExp2(0x080b12, 0.04);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.copy(this.targetCamPos);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // 4. OrbitControls
    if (typeof THREE.OrbitControls !== 'undefined') {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.maxDistance = 25;
      this.controls.minDistance = 2;
      this.controls.maxPolarAngle = Math.PI / 2 + 0.1;
    }

    // 5. Environment & Grid
    this.setupEnvironment();

    // 6. Build BetaFPV Pavo25 Model
    this.buildDroneModel();

    // 7. Hotspots
    this.createHotspots();

    // 8. Event Listeners
    window.addEventListener('resize', () => this.onWindowResize());
    this.setupViewControls();

    // 9. Animation Loop
    this.animate();
  }

  setupEnvironment() {
    // Ambient light
    const ambient = new THREE.AmbientLight(0xddeeff, 0.65);
    this.scene.add(ambient);

    // Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(6, 12, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    this.scene.add(keyLight);

    // Rim Cyan Light
    const rimLight = new THREE.DirectionalLight(0x00e5ff, 0.9);
    rimLight.position.set(-8, 5, -8);
    this.scene.add(rimLight);

    // Subtle Ground Grid
    const gridHelper = new THREE.GridHelper(20, 20, 0x00f0ff, 0x1b2738);
    gridHelper.position.y = -1.8;
    this.scene.add(gridHelper);

    // High tech glowing platform disc
    const discGeo = new THREE.CylinderGeometry(4.5, 4.5, 0.08, 48);
    const discMat = new THREE.MeshStandardMaterial({
      color: 0x0f1523,
      metalness: 0.8,
      roughness: 0.3,
      emissive: 0x001525
    });
    const platform = new THREE.Mesh(discGeo, discMat);
    platform.position.y = -1.84;
    platform.receiveShadow = true;
    this.scene.add(platform);

    const ringGeo = new THREE.RingGeometry(4.4, 4.5, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -1.79;
    this.scene.add(ring);
  }

  buildDroneModel() {
    this.droneGroup = new THREE.Group();
    this.scene.add(this.droneGroup);

    // Materials
    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x121418,
      roughness: 0.45,
      metalness: 0.7
    });

    const ductMat = new THREE.MeshStandardMaterial({
      color: 0x161a22,
      roughness: 0.5,
      metalness: 0.3
    });

    const motorBellMat = new THREE.MeshStandardMaterial({
      color: 0x9333ea, // BetaFPV metallic purple bell
      metalness: 0.9,
      roughness: 0.2
    });

    const motorBaseMat = new THREE.MeshStandardMaterial({
      color: 0xd1d5db, // Silver base
      metalness: 0.85,
      roughness: 0.25
    });

    const propMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.65,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      metalness: 0.1
    });

    const pcbMat = new THREE.MeshStandardMaterial({
      color: 0x0b1320,
      roughness: 0.4,
      metalness: 0.5
    });

    const tpuMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4, // Cyan TPU canopy
      roughness: 0.6,
      metalness: 0.1
    });

    const batteryMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.5,
      metalness: 0.2
    });

    this.ledMaterial = new THREE.MeshBasicMaterial({
      color: this.ledColors[0]
    });

    // 1. DUCTED FRAME MONOCOQUE (BetaFPV Pavo25 whoop ducts)
    const frameGroup = new THREE.Group();
    const ductRadius = 1.35;
    const ductHeight = 0.55;
    const ductThickness = 0.08;

    // 4 Ducts in pusher geometry (Front-Left, Front-Right, Rear-Left, Rear-Right)
    const ductPositions = [
      { x: -1.4, z: 1.4, id: 'fl' },
      { x: 1.4, z: 1.4, id: 'fr' },
      { x: -1.4, z: -1.4, id: 'rl' },
      { x: 1.4, z: -1.4, id: 'rr' }
    ];

    ductPositions.forEach(pos => {
      // Outer duct cylinder
      const ductOuter = new THREE.CylinderGeometry(ductRadius, ductRadius, ductHeight, 32, 1, true);
      const ductMesh = new THREE.Mesh(ductOuter, ductMat);
      ductMesh.position.set(pos.x, 0, pos.z);
      ductMesh.castShadow = true;
      frameGroup.add(ductMesh);

      // Connecting arm to center hub
      const armGeo = new THREE.BoxGeometry(1.4, 0.12, 0.35);
      const arm = new THREE.Mesh(armGeo, carbonMat);
      arm.position.set(pos.x * 0.5, 0, pos.z * 0.5);
      arm.rotation.y = Math.atan2(pos.z, pos.x);
      arm.castShadow = true;
      frameGroup.add(arm);

      // Motor mount cross / stator bracket at the bottom of duct (pusher)
      const mountRing = new THREE.CylinderGeometry(0.45, 0.45, 0.08, 16);
      const mRing = new THREE.Mesh(mountRing, carbonMat);
      mRing.position.set(pos.x, -ductHeight * 0.4, pos.z);
      frameGroup.add(mRing);
    });

    // Outer perimeter bumper connecting the ducts together (monocoque)
    const bridgeGeo = new THREE.BoxGeometry(2.8, 0.3, 0.1);
    const bridgeF = new THREE.Mesh(bridgeGeo, ductMat);
    bridgeF.position.set(0, 0, 2.75);
    frameGroup.add(bridgeF);

    const bridgeB = new THREE.Mesh(bridgeGeo, ductMat);
    bridgeB.position.set(0, 0, -2.75);
    frameGroup.add(bridgeB);

    const bridgeL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.3, 2.8), ductMat);
    bridgeL.position.set(-2.75, 0, 0);
    frameGroup.add(bridgeL);

    const bridgeR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.3, 2.8), ductMat);
    bridgeR.position.set(2.75, 0, 0);
    frameGroup.add(bridgeR);

    // Glowing Neon LED Strips wrapped around outer ducts
    const ledGroup = new THREE.Group();
    ductPositions.forEach(pos => {
      const ledTorus = new THREE.TorusGeometry(ductRadius + 0.04, 0.035, 12, 32);
      const ledMesh = new THREE.Mesh(ledTorus, this.ledMaterial);
      ledMesh.rotation.x = Math.PI / 2;
      ledMesh.position.set(pos.x, 0, pos.z);
      ledGroup.add(ledMesh);
    });
    this.parts.ledRing = ledGroup;
    frameGroup.add(ledGroup);

    this.parts.frame = frameGroup;
    this.droneGroup.add(frameGroup);

    // 2. FLIGHT CONTROLLER + ESC AIO BOARD (F405 20A AIO)
    const fcGroup = new THREE.Group();
    const pcbGeo = new THREE.BoxGeometry(1.6, 0.06, 1.6);
    const pcb = new THREE.Mesh(pcbGeo, pcbMat);
    pcb.castShadow = true;
    fcGroup.add(pcb);

    // STM32 MCU Chip
    const mcuGeo = new THREE.BoxGeometry(0.4, 0.04, 0.4);
    const mcuMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.8, roughness: 0.2 });
    const mcu = new THREE.Mesh(mcuGeo, mcuMat);
    mcu.position.set(0, 0.05, 0);
    fcGroup.add(mcu);

    // Low-ESR Capacitor 35V
    const capGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.6, 16);
    const capMat = new THREE.MeshStandardMaterial({ color: 0x111827, metalness: 0.9, roughness: 0.2 });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.rotation.z = Math.PI / 2;
    cap.position.set(-0.6, 0.2, -0.6);
    fcGroup.add(cap);

    // USB-C port
    const usbGeo = new THREE.BoxGeometry(0.35, 0.12, 0.25);
    const usbMat = new THREE.MeshStandardMaterial({ color: 0xe5e7eb, metalness: 0.9, roughness: 0.1 });
    const usb = new THREE.Mesh(usbGeo, usbMat);
    usb.position.set(-0.8, 0.04, 0);
    fcGroup.add(usb);

    fcGroup.position.set(0, 0.25, 0);
    this.parts.fcStack = fcGroup;
    this.droneGroup.add(fcGroup);

    // 3. CARBON FIBER TOP PLATE
    const topPlateGroup = new THREE.Group();
    const topPlateGeo = new THREE.BoxGeometry(1.8, 0.08, 3.2);
    const topPlate = new THREE.Mesh(topPlateGeo, carbonMat);
    topPlate.position.set(0, 0.9, 0);
    topPlate.castShadow = true;
    topPlateGroup.add(topPlate);

    // 4 Aluminum standoffs
    const standoffGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.7, 12);
    const standoffMat = new THREE.MeshStandardMaterial({ color: 0x9333ea, metalness: 0.8, roughness: 0.2 });
    [
      { x: -0.7, z: 0.8 }, { x: 0.7, z: 0.8 },
      { x: -0.7, z: -0.8 }, { x: 0.7, z: -0.8 }
    ].forEach(sp => {
      const so = new THREE.Mesh(standoffGeo, standoffMat);
      so.position.set(sp.x, 0.55, sp.z);
      topPlateGroup.add(so);
    });

    this.parts.topPlate = topPlateGroup;
    this.droneGroup.add(topPlateGroup);

    // 4. FOUR MOTORS & PROPELLERS (BetaFPV 1404 4500KV + Gemfan D63 3-Blade)
    this.parts.motors = [];
    this.parts.props = [];

    ductPositions.forEach((pos, idx) => {
      // Motor Group
      const motorGroup = new THREE.Group();
      motorGroup.position.set(pos.x, -0.25, pos.z);

      // Motor Silver Base
      const baseMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.12, 24), motorBaseMat);
      motorGroup.add(baseMesh);

      // Motor Purple Bell (BetaFPV 1404)
      const bellMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.22, 24), motorBellMat);
      bellMesh.position.y = -0.15;
      bellMesh.castShadow = true;
      motorGroup.add(bellMesh);

      // Motor Shaft
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.45, 12), motorBaseMat);
      shaft.position.y = -0.3;
      motorGroup.add(shaft);

      motorGroup.userData = { initialPos: motorGroup.position.clone(), dir: new THREE.Vector3(pos.x, 0, pos.z).normalize() };
      this.parts.motors.push(motorGroup);
      this.droneGroup.add(motorGroup);

      // Propeller Group (Gemfan D63 3-Blade)
      const propGroup = new THREE.Group();
      propGroup.position.set(pos.x, -0.45, pos.z);

      // Propeller Hub
      const propHub = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.08, 16), propMat);
      propGroup.add(propHub);

      // 3 Blades
      for (let b = 0; b < 3; b++) {
        const bladeGeo = new THREE.BoxGeometry(0.18, 0.03, 1.15);
        const blade = new THREE.Mesh(bladeGeo, propMat);
        blade.position.set(0, 0, 0.55);
        blade.rotation.x = 0.22 * (idx % 2 === 0 ? 1 : -1); // pitch
        const pivot = new THREE.Group();
        pivot.rotation.y = (b * Math.PI * 2) / 3;
        pivot.add(blade);
        propGroup.add(pivot);
      }

      propGroup.userData = {
        initialPos: propGroup.position.clone(),
        cw: idx % 2 === 0
      };
      this.parts.props.push(propGroup);
      this.droneGroup.add(propGroup);
    });

    // 5. FPV NANO CAMERA ASSEMBLY (Front)
    const camGroup = new THREE.Group();
    camGroup.position.set(0, 0.7, 1.55);

    // TPU Canopy bracket
    const canopyGeo = new THREE.BoxGeometry(0.9, 0.55, 0.6);
    const canopy = new THREE.Mesh(canopyGeo, tpuMat);
    camGroup.add(canopy);

    // Camera Cube Body
    const camBodyGeo = new THREE.BoxGeometry(0.5, 0.5, 0.45);
    const camBodyMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.8, roughness: 0.2 });
    const camBody = new THREE.Mesh(camBodyGeo, camBodyMat);
    camBody.position.set(0, 0, 0.1);
    camGroup.add(camBody);

    // Camera Lens & Bezel
    const lensBezelGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.2, 24);
    const lensBezel = new THREE.Mesh(lensBezelGeo, motorBaseMat);
    lensBezel.rotation.x = Math.PI / 2;
    lensBezel.position.set(0, 0, 0.35);
    camGroup.add(lensBezel);

    const lensGlassGeo = new THREE.SphereGeometry(0.14, 24, 24);
    const lensGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      transmission: 0.9,
      roughness: 0.05,
      metalness: 0.1
    });
    const lensGlass = new THREE.Mesh(lensGlassGeo, lensGlassMat);
    lensGlass.position.set(0, 0, 0.45);
    camGroup.add(lensGlass);

    camGroup.rotation.x = -0.25; // 15° initial FPV camera uptilt!
    camGroup.userData = { initialPos: camGroup.position.clone() };
    this.parts.camera = camGroup;
    this.droneGroup.add(camGroup);

    // 6. VIDEO TRANSMITTER (VTX) & ANTENNA (Rear)
    const vtxGroup = new THREE.Group();
    vtxGroup.position.set(0, 0.55, -0.9);

    const vtxGeo = new THREE.BoxGeometry(0.8, 0.12, 0.9);
    const vtxHeatMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.9, roughness: 0.2 });
    const vtx = new THREE.Mesh(vtxGeo, vtxHeatMat);
    vtxGroup.add(vtx);

    // Antenna TPU stalk & RHCP Antenna Dome
    const antStalkGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.9, 12);
    const antStalk = new THREE.Mesh(antStalkGeo, carbonMat);
    antStalk.position.set(0, 0.6, -0.5);
    antStalk.rotation.x = -Math.PI / 5;
    vtxGroup.add(antStalk);

    const antDomeGeo = new THREE.SphereGeometry(0.16, 16, 16);
    const antDomeMat = new THREE.MeshStandardMaterial({ color: 0x9333ea, metalness: 0.5, roughness: 0.4 });
    const antDome = new THREE.Mesh(antDomeGeo, antDomeMat);
    antDome.position.set(0, 0.95, -0.75);
    vtxGroup.add(antDome);

    vtxGroup.userData = { initialPos: vtxGroup.position.clone() };
    this.parts.vtx = vtxGroup;
    this.droneGroup.add(vtxGroup);

    // 7. LIPO BATTERY (4S 850mAh) & STRAP
    const batGroup = new THREE.Group();
    batGroup.position.set(0, 1.35, 0);

    // Battery pack
    const batGeo = new THREE.BoxGeometry(1.1, 0.65, 2.1);
    const batMesh = new THREE.Mesh(batGeo, batteryMat);
    batMesh.castShadow = true;
    batGroup.add(batMesh);

    // Brand Label
    const labelGeo = new THREE.PlaneGeometry(0.9, 1.6);
    const labelMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });
    const label = new THREE.Mesh(labelGeo, labelMat);
    label.rotation.x = -Math.PI / 2;
    label.position.set(0, 0.33, 0);
    batGroup.add(label);

    // Yellow XT30 Plug
    const xt30Geo = new THREE.BoxGeometry(0.22, 0.15, 0.3);
    const xt30Mat = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.3 }); // Yellow
    const xt30 = new THREE.Mesh(xt30Geo, xt30Mat);
    xt30.position.set(0.4, 0.1, -1.2);
    batGroup.add(xt30);

    // Battery Strap
    const strapGeo = new THREE.BoxGeometry(1.2, 0.72, 0.25);
    const strapMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.8 });
    const strap = new THREE.Mesh(strapGeo, strapMat);
    batGroup.add(strap);

    batGroup.userData = { initialPos: batGroup.position.clone() };
    this.parts.battery = batGroup;
    this.droneGroup.add(batGroup);
  }

  createHotspots() {
    // 3D Hotspot definitions
    const hotspotData = [
      { id: 'frame', name: 'BetaFPV Pavo25 Frame Kit', pos: new THREE.Vector3(1.6, 0.2, 1.4) },
      { id: 'fc', name: 'F405 AIO 20A V4 (FC + ESC)', pos: new THREE.Vector3(0, 0.35, 0) },
      { id: 'motor', name: 'BetaFPV 1404 4500KV Motors', pos: new THREE.Vector3(-1.4, -0.3, 1.4) },
      { id: 'props', name: 'Gemfan D63 3-Blade Props', pos: new THREE.Vector3(1.4, -0.5, -1.4) },
      { id: 'cam', name: 'Nano FPV Camera', pos: new THREE.Vector3(0, 0.7, 1.8) },
      { id: 'vtx', name: 'Tiny Rocket VTX & Antenna', pos: new THREE.Vector3(0, 1.1, -1.5) },
      { id: 'battery', name: '4S 850mAh 75C LiPo', pos: new THREE.Vector3(0, 1.7, 0) },
      { id: 'led', name: 'Neon LED Strip (Duct Ring)', pos: new THREE.Vector3(-1.8, 0.1, 0) }
    ];

    const hotspotContainer = document.getElementById('drone-hotspots-container');
    if (!hotspotContainer) return;

    hotspotContainer.innerHTML = '';

    hotspotData.forEach(item => {
      const pin = document.createElement('button');
      pin.className = 'drone-3d-hotspot';
      pin.setAttribute('data-hotspot', item.id);
      pin.innerHTML = `
        <span class="hotspot-pulse"></span>
        <span class="hotspot-badge">🎯</span>
        <span class="hotspot-tooltip">${item.name}</span>
      `;

      pin.addEventListener('click', () => {
        if (window.onDroneComponentSelected) {
          window.onDroneComponentSelected(item.id);
        }
      });

      hotspotContainer.appendChild(pin);
      this.hotspots.push({ element: pin, pos: item.pos });
    });
  }

  updateHotspots() {
    if (!this.hotspots.length) return;
    const widthHalf = (this.container.clientWidth || 800) / 2;
    const heightHalf = (this.container.clientHeight || 550) / 2;

    this.hotspots.forEach(hs => {
      const tempPos = hs.pos.clone();
      // If exploded, adjust hotspot positions dynamically
      if (this.explodedProgress > 0.05) {
        if (hs.pos.y > 1.0) tempPos.y += this.explodedProgress * 3.5;
        if (hs.pos.z > 1.2) tempPos.z += this.explodedProgress * 2.5;
        if (hs.pos.z < -1.0) tempPos.z -= this.explodedProgress * 2.5;
      }

      tempPos.project(this.camera);

      // Check if behind camera
      if (tempPos.z > 1) {
        hs.element.style.display = 'none';
      } else {
        hs.element.style.display = 'flex';
        const x = (tempPos.x * widthHalf) + widthHalf;
        const y = -(tempPos.y * heightHalf) + heightHalf;
        hs.element.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`;
      }
    });
  }

  setupViewControls() {
    const btnMap = {
      'btn-view-front': () => this.setCameraView('front'),
      'btn-view-rear': () => this.setCameraView('rear'),
      'btn-view-top': () => this.setCameraView('top'),
      'btn-view-side': () => this.setCameraView('side'),
      'btn-view-exploded': () => this.toggleExplodedView(),
      'btn-view-reset': () => this.setCameraView('reset'),
      'btn-led-toggle': () => this.toggleLEDColor(),
      'btn-props-toggle': () => this.togglePropsSpin()
    };

    Object.keys(btnMap).forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', () => {
          btnMap[id]();
          if (window.playSfx) window.playSfx('click');
        });
      }
    });
  }

  setCameraView(view) {
    switch (view) {
      case 'front':
        this.targetCamPos.set(0, 0.4, 7.5);
        this.targetLookAt.set(0, 0.2, 0);
        break;
      case 'rear':
        this.targetCamPos.set(0, 0.4, -7.5);
        this.targetLookAt.set(0, 0.2, 0);
        break;
      case 'top':
        this.targetCamPos.set(0, 9.5, 0.01);
        this.targetLookAt.set(0, 0, 0);
        break;
      case 'side':
        this.targetCamPos.set(8.0, 0.5, 0);
        this.targetLookAt.set(0, 0.2, 0);
        break;
      case 'reset':
      default:
        this.targetCamPos.set(5.5, 4.2, 6.5);
        this.targetLookAt.set(0, 0, 0);
        break;
    }
  }

  toggleExplodedView() {
    this.isExploded = !this.isExploded;
    this.targetExplodedProgress = this.isExploded ? 1.0 : 0.0;

    const btn = document.getElementById('btn-view-exploded');
    if (btn) {
      btn.classList.toggle('active', this.isExploded);
    }
  }

  toggleLEDColor() {
    this.ledColorState = (this.ledColorState + 1) % 3;
    const col = this.ledColors[this.ledColorState];
    if (this.ledMaterial) {
      this.ledMaterial.color.setHex(col);
    }
  }

  togglePropsSpin() {
    this.isPropsSpinning = !this.isPropsSpinning;
    const btn = document.getElementById('btn-props-toggle');
    if (btn) {
      btn.classList.toggle('active', this.isPropsSpinning);
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // 1. Lerp Exploded View progress
    this.explodedProgress += (this.targetExplodedProgress - this.explodedProgress) * 0.08;

    // Apply Exploded View offsets
    if (this.parts.battery) {
      this.parts.battery.position.y = this.parts.battery.userData.initialPos.y + this.explodedProgress * 3.2;
    }
    if (this.parts.topPlate) {
      this.parts.topPlate.position.y = this.explodedProgress * 1.8;
    }
    if (this.parts.fcStack) {
      this.parts.fcStack.position.y = 0.25 + this.explodedProgress * 0.8;
    }
    if (this.parts.camera) {
      this.parts.camera.position.z = this.parts.camera.userData.initialPos.z + this.explodedProgress * 2.2;
    }
    if (this.parts.vtx) {
      this.parts.vtx.position.z = this.parts.vtx.userData.initialPos.z - this.explodedProgress * 2.0;
      this.parts.vtx.position.y = this.parts.vtx.userData.initialPos.y + this.explodedProgress * 1.2;
    }

    // Radial separation for motors and props
    this.parts.motors.forEach(m => {
      const init = m.userData.initialPos;
      const dir = m.userData.dir;
      m.position.x = init.x + dir.x * this.explodedProgress * 1.5;
      m.position.z = init.z + dir.z * this.explodedProgress * 1.5;
      m.position.y = init.y - this.explodedProgress * 1.2;
    });

    this.parts.props.forEach(p => {
      const init = p.userData.initialPos;
      p.position.y = init.y - this.explodedProgress * 2.2;

      // Spin propellers
      if (this.isPropsSpinning) {
        const spinDir = p.userData.cw ? 1 : -1;
        p.rotation.y += this.propSpeed * spinDir;
      }
    });

    // 2. Smooth Camera transition
    this.camera.position.lerp(this.targetCamPos, 0.05);
    if (this.controls) {
      this.controls.target.lerp(this.targetLookAt, 0.05);
      this.controls.update();
    }

    // 3. Update 3D Hotspot screen positions
    this.updateHotspots();

    // 4. Render
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}

// Global hook
window.Drone3DViewer = Drone3DViewer;
