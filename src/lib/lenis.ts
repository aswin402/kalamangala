import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

const updateRaf = (time: number) => {
  lenisInstance?.raf(time * 1000);
};

export function initLenis() {
  if (lenisInstance) return lenisInstance;

  // Respect accessibility preferences
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return null;

  lenisInstance = new Lenis({
    lerp: 0.04, // Very slow and buttery
    wheelMultiplier: 0.6, // Heavy, deliberate scroll
    smoothWheel: true,
    orientation: "vertical",
    gestureOrientation: "vertical",
    touchMultiplier: 1.5,
    infinite: false,
  });

  lenisInstance.on("scroll", ScrollTrigger.update);

  gsap.ticker.add(updateRaf);
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function destroyLenis() {
  if (lenisInstance) {
    gsap.ticker.remove(updateRaf);
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

export function getLenis() {
  return lenisInstance;
}
