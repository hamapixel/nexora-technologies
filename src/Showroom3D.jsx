import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CarFront, DoorOpen, MousePointer2, Play, RotateCcw, Sparkles } from "lucide-react";

const THEMES = [
  { label: "Violet BTDIGIT", value: "#8242de" },
  { label: "Blanc perlé", value: "#e8e9f2" },
  { label: "Bleu nuit", value: "#274b84" },
  { label: "Orange cuivre", value: "#ed8b48" },
];

const THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

function buildCar(THREE, scene) {
  const car = new THREE.Group();
  scene.add(car);
  const paint = new THREE.MeshPhysicalMaterial({ color: THEMES[0].value, metalness: 0.48, roughness: 0.27, clearcoat: 0.65, clearcoatRoughness: 0.18 });
  const dark = new THREE.MeshStandardMaterial({ color: "#151523", metalness: 0.45, roughness: 0.45 });
  const glass = new THREE.MeshPhysicalMaterial({ color: "#182f4b", metalness: 0.2, roughness: 0.12, transparent: true, opacity: 0.91 });
  const light = new THREE.MeshStandardMaterial({ color: "#e9efff", emissive: "#b9d9ff", emissiveIntensity: 0.4 });
  const tail = new THREE.MeshStandardMaterial({ color: "#f04473", emissive: "#a41541", emissiveIntensity: 0.35 });
  const chrome = new THREE.MeshStandardMaterial({ color: "#a6b5d0", metalness: 0.85, roughness: 0.25 });

  function cube(parent, width, height, depth, x, y, z, material, angle = 0) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
    mesh.position.set(x, y, z);
    mesh.rotation.z = angle;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  cube(car, 4.5, 0.62, 1.89, 0, 1.02, 0, paint);
  cube(car, 4.35, 0.17, 1.93, 0, 0.73, 0, dark);
  cube(car, 2.26, 0.13, 1.72, -0.22, 1.97, 0, paint);
  cube(car, 2.1, 0.55, 1.70, -0.22, 1.63, 0, glass);
  cube(car, 0.3, 0.67, 1.7, 0.92, 1.57, 0, glass, -0.37);
  cube(car, 0.24, 0.65, 1.7, -1.37, 1.58, 0, paint, 0.20);
  cube(car, 1.46, 0.26, 1.87, 1.46, 1.35, 0, paint);
  cube(car, 0.2, 0.22, 1.45, 2.30, 0.87, 0, dark);
  cube(car, 0.16, 0.2, 1.43, -2.3, 0.88, 0, dark);
  cube(car, 0.13, 0.32, 0.23, 2.33, 1.11, 0.65, light);
  cube(car, 0.13, 0.32, 0.23, 2.33, 1.11, -0.65, light);
  cube(car, 0.08, 0.23, 0.32, -2.34, 1.09, -0.65, tail);
  cube(car, 0.08, 0.23, 0.32, -2.34, 1.09, 0.65, tail);
  cube(car, 0.1, 0.12, 0.74, 2.35, 0.94, 0, chrome);

  // The visible side doors are separate meshes with real pivot points.
  const hinges = [];
  for (const side of [-1, 1]) {
    const hinge = new THREE.Group();
    hinge.position.set(0.54, 1.09, side * 0.967);
    car.add(hinge);
    cube(hinge, 1.25, 0.65, 0.055, -0.62, 0, 0, paint);
    cube(hinge, 1.16, 0.36, 0.057, -0.62, 0.49, 0, glass);
    cube(hinge, 0.21, 0.06, 0.07, -0.97, 0.19, side * 0.054, chrome);
    hinges.push(hinge);

    for (const x of [-1.54, 1.53]) {
      const tyre = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.44, 0.24, 32), dark);
      tyre.rotation.x = Math.PI / 2;
      tyre.position.set(x, 0.54, side * 1.04);
      tyre.castShadow = true;
      car.add(tyre);
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.25, 28), chrome);
      rim.rotation.x = Math.PI / 2;
      rim.position.set(x, 0.54, side * 1.045);
      car.add(rim);
      const center = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.258, 24), dark);
      center.rotation.x = Math.PI / 2;
      center.position.copy(rim.position);
      car.add(center);
    }
  }

  const platformMat = new THREE.MeshStandardMaterial({ color: "#151024", roughness: 0.58, metalness: 0.2 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(4.24, 4.44, 0.19, 72), platformMat);
  base.position.y = 0.06;
  base.receiveShadow = true;
  scene.add(base);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(4.12, 0.02, 8, 100), new THREE.MeshBasicMaterial({ color: "#a76cff" }));
  halo.rotation.x = Math.PI / 2;
  halo.position.y = 0.17;
  scene.add(halo);

  return { car, hinges, paint };
}

export default function Showroom3D() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [selected, setSelected] = useState(THEMES[0].value);
  const hostRef = useRef(null);
  const apiRef = useRef(null);
  const doorRef = useRef(false);

  useEffect(() => { doorRef.current = doorOpen; }, [doorOpen]);
  useEffect(() => {
    if (apiRef.current) apiRef.current.paint.color.set(selected);
  }, [selected]);

  useEffect(() => {
    if (!started || !hostRef.current) return;
    let disposed = false;
    let renderer, observer, resizeObserver, frameId;
    const host = hostRef.current;
    setLoading(true);
    setError(false);

    async function setup() {
      try {
        const THREE = await import(/* @vite-ignore */ THREE_URL);
        if (disposed) return;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 100);
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.domElement.setAttribute("aria-label", "Prototype automobile 3D manipulable avec la souris ou le doigt");
        renderer.domElement.style.touchAction = "none";
        host.appendChild(renderer.domElement);
        scene.add(new THREE.HemisphereLight("#c9dbff", "#311b54", 2.5));
        const key = new THREE.DirectionalLight("#ffffff", 3.3);
        key.position.set(4, 7, 5);
        key.castShadow = true;
        key.shadow.mapSize.set(1024, 1024);
        scene.add(key);
        const fill = new THREE.PointLight("#954eff", 70, 15);
        fill.position.set(-4, 3, -3);
        scene.add(fill);
        const { car, hinges, paint } = buildCar(THREE, scene);
        paint.color.set(selected);
        let distance = 8.7;
        let theta = 0.76;
        let phi = 1.13;
        let pointer = null;
        let idle = true;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let visible = true;

        const resize = () => {
          if (!renderer || !host.clientWidth) return;
          const width = host.clientWidth;
          const height = Math.max(host.clientHeight, 280);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height, false);
        };
        const down = (event) => {
          pointer = { x: event.clientX, y: event.clientY };
          idle = false;
          renderer.domElement.setPointerCapture?.(event.pointerId);
        };
        const move = (event) => {
          if (!pointer) return;
          const dx = event.clientX - pointer.x;
          const dy = event.clientY - pointer.y;
          theta -= dx * 0.008;
          phi = Math.max(0.5, Math.min(1.47, phi - dy * 0.006));
          pointer = { x: event.clientX, y: event.clientY };
        };
        const up = () => { pointer = null; };
        const wheel = (event) => {
          event.preventDefault();
          distance = Math.max(5.8, Math.min(12, distance + event.deltaY * 0.009));
        };
        const canvas = renderer.domElement;
        canvas.addEventListener("pointerdown", down);
        canvas.addEventListener("pointermove", move);
        canvas.addEventListener("pointerup", up);
        canvas.addEventListener("pointercancel", up);
        canvas.addEventListener("wheel", wheel, { passive: false });

        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(host);
        observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.01 });
        observer.observe(host);
        const cameraUpdate = () => {
          camera.position.set(
            Math.cos(theta) * Math.sin(phi) * distance,
            Math.cos(phi) * distance + 1.0,
            Math.sin(theta) * Math.sin(phi) * distance
          );
          camera.lookAt(0, 1.04, 0);
        };
        apiRef.current = {
          paint,
          rotate: (direction) => { theta += direction * 0.33; idle = false; },
          reset: () => { theta = 0.76; phi = 1.13; distance = 8.7; idle = true; },
        };
        const draw = () => {
          if (disposed) return;
          frameId = requestAnimationFrame(draw);
          if (!visible || document.hidden) return;
          if (idle && !reducedMotion) theta += 0.0025;
          const target = doorRef.current ? 0.92 : 0;
          hinges[0].rotation.y += (target - hinges[0].rotation.y) * 0.095;
          hinges[1].rotation.y += (-target - hinges[1].rotation.y) * 0.095;
          cameraUpdate();
          renderer.render(scene, camera);
        };
        resize();
        setLoading(false);
        draw();
      } catch (err) {
        if (!disposed) {
          setError(true);
          setLoading(false);
        }
      }
    }
    setup();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      observer?.disconnect();
      resizeObserver?.disconnect();
      apiRef.current = null;
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
    // Rebuilding the scene only when the user first enables the demo.
    // Color and door changes use refs/material updates without recreating WebGL.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  return (
    <section className="section showroom-section" id="studio3d">
      <div className="container">
        <div className="section-head showroom-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" />BTDIGIT / 3D LAB</span>
            <h2>Explorez. Personnalisez.<br/><span>Interagissez en 3D.</span></h2>
          </div>
          <p>Un aperçu des expériences interactives que notre agence peut développer : visualisation, rotation, couleurs et ouvertures animées.</p>
        </div>
        <div className="showroom-shell">
          <div className="showroom-stage">
            <div className="showroom-stage-top"><span><span className="showroom-online-dot"/> SHOWROOM INTERACTIF</span><span>PROTOTYPE 3D</span></div>
            {!started && (
              <div className="showroom-start">
                <div className="showroom-preview-icon"><CarFront size={90} strokeWidth={1.2}/></div>
                <h3>Découvrez notre prototype automobile 3D</h3>
                <p>Manipulez la caméra, choisissez une couleur et ouvrez les portes.</p>
                <button type="button" className="btn btn-primary" onClick={() => setStarted(true)}><Play size={17} fill="currentColor"/> Lancer la démo 3D</button>
              </div>
            )}
            {started && error && (
              <div className="showroom-start showroom-error">
                <h3>La démonstration 3D n'a pas pu se charger.</h3>
                <p>Elle nécessite WebGL et une connexion au moteur 3D. Le reste du site reste accessible normalement.</p>
                <button type="button" className="btn btn-outline" onClick={() => setStarted(false)}>Revenir à la présentation</button>
              </div>
            )}
            {started && loading && <div className="showroom-loading" role="status">Chargement du moteur 3D…</div>}
            <div className="showroom-canvas" ref={hostRef} aria-hidden={!started || error}/>
            <div className="showroom-stage-bottom"><MousePointer2 size={15}/> Glissez pour faire pivoter · Molette pour zoomer</div>
          </div>
          <aside className="showroom-controls">
            <div className="showroom-panel-heading"><span><Sparkles size={18}/> Configuration</span><small>Démonstrateur conceptuel</small></div>
            <div className="showroom-control-group">
              <h3>01. Couleur de carrosserie</h3>
              <div className="showroom-swatches">
                {THEMES.map((color) => <button
                  type="button" key={color.value}
                  className={"showroom-swatch " + (selected === color.value ? "is-selected" : "")}
                  style={{ "--swatch": color.value }}
                  aria-label={color.label}
                  aria-pressed={selected === color.value}
                  onClick={() => setSelected(color.value)}
                  title={color.label}
                ><span/></button>)}
              </div>
              <p>{THEMES.find((theme) => theme.value === selected)?.label}</p>
            </div>
            <div className="showroom-control-group">
              <h3>02. Animation des portes</h3>
              <button className="showroom-action" type="button" disabled={!started || loading || error} onClick={() => setDoorOpen(!doorOpen)}><DoorOpen size={19}/>{doorOpen ? "Fermer les portes" : "Ouvrir les portes"}<span>{doorOpen ? "↙" : "↗"}</span></button>
            </div>
            <div className="showroom-control-group">
              <h3>03. Angle de vue</h3>
              <div className="showroom-camera-actions">
                <button type="button" onClick={() => apiRef.current?.rotate(-1)} disabled={!started || loading || error} aria-label="Faire tourner à gauche"><ArrowLeft size={18}/></button>
                <button type="button" onClick={() => apiRef.current?.reset()} disabled={!started || loading || error} aria-label="Réinitialiser la caméra"><RotateCcw size={18}/></button>
                <button type="button" onClick={() => apiRef.current?.rotate(1)} disabled={!started || loading || error} aria-label="Faire tourner à droite"><ArrowRight size={18}/></button>
              </div>
            </div>
            <p className="showroom-disclaimer">Cette scène est un prototype automobile simplifié, créé pour illustrer les capacités 3D de l'agence. Elle ne représente aucun véhicule commercial réel.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
