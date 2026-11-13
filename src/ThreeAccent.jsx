import { useEffect, useRef } from "react";

// Decorative Three.js only: no vehicle, no expensive 3D showroom.
// The pinned CDN module loads on capable desktops. CSS/SVG works as fallback.
const THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.module.js";

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function ThreeAccent() {
  const surfaceRef = useRef(null);

  useEffect(() => {
    const surface = surfaceRef.current;
    const hero = surface?.closest(".hero");
    if (!surface || !hero || typeof window === "undefined") return;

    // A responsive, battery-friendly 3D accent rather than a permanent animation loop.
    if (window.innerWidth < 1100 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      navigator.connection?.saveData ||
      (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
      !canUseWebGL()) return;

    let cancelled = false;
    let cleanupScene = null;
    let visibilityObserver = null;

    const loadScene = async () => {
      try {
        const THREE = await import(/* @vite-ignore */ THREE_URL);
        if (cancelled) return;

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.4));
        renderer.setClearColor(0x000000, 0);
        renderer.domElement.setAttribute("aria-hidden", "true");
        renderer.domElement.className = "hero-three-canvas";
        surface.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
        camera.position.set(0, 0, 7.5);

        const group = new THREE.Group();
        scene.add(group);

        const violet = new THREE.MeshPhysicalMaterial({
          color: 0xa66afa,
          metalness: 0.58,
          roughness: 0.23,
          clearcoat: 0.65,
          transparent: true,
          opacity: 0.8,
        });
        const blue = new THREE.MeshBasicMaterial({
          color: 0x77aaff,
          transparent: true,
          opacity: 0.43,
        });
        const thinLine = new THREE.MeshBasicMaterial({
          color: 0xc2a5ff,
          transparent: true,
          opacity: 0.2,
          wireframe: true,
        });

        const core = new THREE.Mesh(
          new THREE.TorusKnotGeometry(1.28, 0.19, 160, 15, 2, 3),
          violet,
        );
        group.add(core);

        const outerRing = new THREE.Mesh(
          new THREE.TorusGeometry(2.06, 0.026, 7, 110),
          blue,
        );
        outerRing.rotation.x = 0.85;
        outerRing.rotation.y = -0.45;
        group.add(outerRing);

        const outline = new THREE.Mesh(
          new THREE.IcosahedronGeometry(1.92, 1),
          thinLine,
        );
        outline.rotation.z = 0.17;
        group.add(outline);

        const ambient = new THREE.AmbientLight(0xc8bbff, 2.4);
        const point = new THREE.PointLight(0xd9b9ff, 45, 12);
        point.position.set(3, 3, 4);
        scene.add(ambient, point);

        function render() {
          renderer.render(scene, camera);
        }

        const resize = () => {
          if (cancelled) return;
          const width = Math.max(surface.clientWidth, 1);
          const height = Math.max(surface.clientHeight, 1);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height, false);
          render();
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(surface);
        resize();

        // The visual moves only when the visitor scrolls: no permanent 60fps loop.
        let scrollTrigger;
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        if (gsap && ScrollTrigger) {
          gsap.registerPlugin(ScrollTrigger);
          scrollTrigger = ScrollTrigger.create({
            trigger: hero,
            start: "top top",
            end: "bottom top",
            onUpdate: ({ progress }) => {
              group.rotation.y = progress * Math.PI * 1.5 + 0.12;
              group.rotation.x = 0.25 + progress * 0.55;
              outerRing.rotation.z = progress * 1.6;
              render();
            },
          });
        }

        cleanupScene = () => {
          scrollTrigger?.kill();
          resizeObserver.disconnect();
          core.geometry.dispose();
          outerRing.geometry.dispose();
          outline.geometry.dispose();
          violet.dispose();
          blue.dispose();
          thinLine.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      } catch {
        // Offline, unsupported WebGL or CDN failure: the SVG hero remains visible.
      }
    };

    // Only fetch Three.js when the hero is actually near the viewport.
    visibilityObserver = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        visibilityObserver?.disconnect();
        visibilityObserver = null;
        loadScene();
      }
    }, { rootMargin: "250px 0px" });
    visibilityObserver.observe(hero);

    return () => {
      cancelled = true;
      visibilityObserver?.disconnect();
      cleanupScene?.();
    };
  }, []);

  return <div ref={surfaceRef} className="hero-three-stage" aria-hidden="true" />;
}
