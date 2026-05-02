import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const lenis = new Lenis({
      lerp: 0.04,
      wheelMultiplier: 0.6,
      smoothWheel: true,
      orientation: "vertical",
      gestureOrientation: "vertical",
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenisInstance = null;
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, []);

  return <>{children}</>;
}