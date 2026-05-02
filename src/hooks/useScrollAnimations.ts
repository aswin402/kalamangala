import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {});

    return () => {
      ctxRef.current?.revert();
    };
  }, []);

  const fadeInUp = useCallback(
    (
      element: gsap.TweenTarget,
      options: {
        y?: number;
        duration?: number;
        delay?: number;
        start?: string;
      } = {}
    ) => {
      const { y = 80, duration = 1.15, delay = 0, start = "top 85%" } = options;

      const elements = gsap.utils.toArray(element) as Element[];

      elements.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { y, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    },
    []
  );

  const fadeInLeft = useCallback(
    (
      element: gsap.TweenTarget,
      options: {
        x?: number;
        duration?: number;
        delay?: number;
        start?: string;
      } = {}
    ) => {
      const { x = 60, duration = 0.8, delay = 0, start = "top 85%" } = options;

      const elements = Array.isArray(element) ? element : [element];

      elements.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { x, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    },
    []
  );

  const fadeInRight = useCallback(
    (
      element: gsap.TweenTarget,
      options: {
        x?: number;
        duration?: number;
        delay?: number;
        start?: string;
      } = {}
    ) => {
      const { x = -60, duration = 0.8, delay = 0, start = "top 85%" } = options;

      const elements = Array.isArray(element) ? element : [element];

      elements.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { x, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    },
    []
  );

  const staggerFadeInUp = useCallback(
    (
      elements: gsap.TweenTarget,
      options: {
        y?: number;
        duration?: number;
        stagger?: number;
        delay?: number;
        start?: string;
      } = {}
    ) => {
      const {
        y = 60,
        duration = 0.8,
        stagger = 0.15,
        delay = 0,
        start = "top 85%",
      } = options;

      const els = Array.isArray(elements) ? elements : [elements];

      els.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            { y, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration,
              delay: delay + index * stagger,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    },
    []
  );

  const scaleIn = useCallback(
    (
      element: gsap.TweenTarget,
      options: {
        scale?: number;
        duration?: number;
        delay?: number;
        start?: string;
      } = {}
    ) => {
      const { scale = 0.8, duration = 0.8, delay = 0, start = "top 85%" } = options;

      const elements = Array.isArray(element) ? element : [element];

      elements.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { scale, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    },
    []
  );

  const textReveal = useCallback(
    (
      element: gsap.TweenTarget,
      options: {
        duration?: number;
        delay?: number;
        start?: string;
      } = {}
    ) => {
      const { duration = 0.8, delay = 0, start = "top 85%" } = options;

      const elements = Array.isArray(element) ? element : [element];

      elements.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { "clip-path": "inset(0 100% 0 0)", opacity: 1 },
            {
              "clip-path": "inset(0 0% 0 0)",
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    },
    []
  );

  const parallax = useCallback(
    (
      element: gsap.TweenTarget,
      options: {
        yPercent?: number;
        start?: string;
      } = {}
    ) => {
      const { yPercent = -20, start = "top bottom" } = options;

      const elements = Array.isArray(element) ? element : [element];

      elements.forEach((el) => {
        if (el) {
          gsap.to(el, {
            yPercent,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start,
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    },
    []
  );

  const animateCounter = useCallback(
    (
      element: Element,
      endValue: number,
      options: {
        duration?: number;
        start?: string;
        prefix?: string;
        suffix?: string;
      } = {}
    ) => {
      const {
        duration = 2,
        start = "top 80%",
        prefix = "",
        suffix = "",
      } = options;

      const obj = { value: 0 };

      gsap.to(obj, {
        value: endValue,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: "play none none reverse",
        },
        onUpdate: () => {
          element.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
        },
      });
    },
    []
  );

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerFadeInUp,
    scaleIn,
    textReveal,
    parallax,
    animateCounter,
  };
}
