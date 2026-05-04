import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ── Single global GSAP + ScrollTrigger registration ──
gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false, force3D: true });
ScrollTrigger.config({ limitCallbacks: true });

let lenisInstance: Lenis | null = null;

export function initLenis() {
  if (lenisInstance) return lenisInstance;

  // Respect accessibility preferences
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return null;

  lenisInstance = new Lenis({
    duration: 1.2, // Smooth glide duration — premium but not sluggish
    easing: (t: number) => 1 - Math.pow(1 - t, 4), // Quartic ease-out: responsive start, smooth tail
    wheelMultiplier: 0.7, // Natural scroll distance — easy to navigate, not restrictive
    smoothWheel: true,
    orientation: "vertical",
    gestureOrientation: "vertical",
    touchMultiplier: 1.2, // Natural touch scroll on mobile
    infinite: false,
    autoRaf: false, // We drive the RAF loop ourselves via GSAP ticker
  });

  lenisInstance.on("scroll", ScrollTrigger.update);

  // Use GSAP ticker for RAF — keeps Lenis and ScrollTrigger in lockstep on the same frame
  gsap.ticker.add((time: number) => {
    lenisInstance?.raf(time * 1000);
  });

  // Wider lag smoothing window — Chrome uses this to gracefully handle dropped frames
  gsap.ticker.lagSmoothing(1000, 16);

  return lenisInstance;
}

export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

export function getLenis() {
  return lenisInstance;
}
