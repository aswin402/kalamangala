import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations(container: HTMLElement | Document = document) {
  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  if (prefersReducedMotion) {
    // Reveal everything instantly without animation for accessibility
    document.body.classList.add("km-animate-ready");
    return () => {}; 
  }

  // Create a gsap context so we can easily revert all ScrollTriggers created in this scope
  const ctx = gsap.context(() => {
    // Add ready class to prevent flash of unstyled content
    document.body.classList.add("km-animate-ready");

    const mm = gsap.matchMedia();

    mm.add({
      // Desktop
      isDesktop: "(min-width: 768px)",
      // Mobile
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop, isMobile } = context.conditions as { isDesktop: boolean, isMobile: boolean };
      
      // Calculate mobile-adjusted values
      const getDuration = (base: number) => isMobile ? base * 0.85 : base;
      const getY = (base: number) => isMobile ? base * 0.6 : base;
      const getX = (base: number) => isMobile ? base * 0.6 : base;

      // .km-reveal
      gsap.utils.toArray(".km-reveal, .la-reveal, .km-service").forEach((el: any) => {
        gsap.fromTo(el, 
          {
            opacity: 0,
            y: getY(70),
            filter: "blur(8px)",
          },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: getDuration(1.15),
            ease: "power3.out",
          }
        );
      });

      // .km-reveal-slow
      gsap.utils.toArray(".km-reveal-slow").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: getY(100),
          duration: getDuration(1.45),
          ease: "power4.out",
        });
      });

      // .km-stagger (Animates immediate children sequentially)
      gsap.utils.toArray(".km-stagger").forEach((parent: any) => {
        const children = Array.from(parent.children);
        if (children.length === 0) return;
        
        gsap.from(children, {
          scrollTrigger: {
            trigger: parent,
            start: "top 82%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: getY(60),
          duration: getDuration(1),
          stagger: 0.12,
          ease: "power3.out",
        });
      });

      // .km-text-reveal (For headings)
      gsap.utils.toArray(".km-text-reveal").forEach((el: any) => {
        const isSafeToSplit = !el.children.length;
        
        if (isSafeToSplit && el.textContent) {
          const text = el.textContent;
          const words = text.split(" ").map((word: string) => `<span style="display:inline-block; overflow:hidden; vertical-align:top;"><span style="display:inline-block; will-change:transform;" class="km-word-inner">${word}</span></span>`);
          el.innerHTML = words.join(" ");
          
          const inners = el.querySelectorAll(".km-word-inner");
          gsap.from(inners, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            yPercent: 100,
            opacity: 0,
            duration: getDuration(1),
            stagger: 0.04,
            ease: "power4.out",
          });
        } else {
          // Fallback if not safe to split
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            yPercent: getY(100),
            duration: getDuration(1),
            ease: "power4.out",
          });
        }
      });

      // .km-image-parallax
      gsap.utils.toArray(".km-image-parallax").forEach((el: any) => {
        gsap.fromTo(el, 
          { 
            scale: 1.08,
            yPercent: isMobile ? -4 : -8
          },
          {
            scale: 1,
            yPercent: isMobile ? 4 : 8,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.3,
            }
          }
        );
      });

      // .km-card
      gsap.utils.toArray(".km-card, .la-card").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: getY(55),
          scale: 0.96,
          duration: getDuration(1),
          ease: "power3.out",
        });
      });

      // .km-fade-left
      gsap.utils.toArray(".km-fade-left").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: getX(-80),
          duration: getDuration(1.15),
          ease: "power3.out",
        });
      });

      // .km-fade-right
      gsap.utils.toArray(".km-fade-right").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: getX(80),
          duration: getDuration(1.15),
          ease: "power3.out",
        });
      });

      // .km-hero
      gsap.utils.toArray(".km-hero").forEach((hero: any) => {
        const tl = gsap.timeline();
        
        const media = hero.querySelector("video, img, .hero-media");
        if (media) {
          tl.from(media, {
            scale: 1.15,
            duration: getDuration(2),
            ease: "power3.out",
          }, 0);
        }
        
        const heading = hero.querySelector("h1, .km-hero-heading");
        if (heading) {
          tl.from(heading, {
            y: getY(50),
            opacity: 0,
            duration: getDuration(1.4),
            ease: "power4.out",
          }, 0.2);
        }

        const subtitle = hero.querySelector("p, .km-hero-subtitle");
        if (subtitle) {
          tl.from(subtitle, {
            y: getY(30),
            opacity: 0,
            duration: getDuration(1.2),
            ease: "power3.out",
          }, 0.6);
        }

        const actions = hero.querySelector(".km-hero-actions");
        if (actions) {
          tl.from(actions.children, {
            y: getY(20),
            opacity: 0,
            duration: getDuration(1),
            stagger: 0.1,
            ease: "power3.out",
          }, 0.8);
        }
      });

      // .km-pin-section (Optional desktop-only pinning)
      if (isDesktop) {
        gsap.utils.toArray(".km-pin-section").forEach((el: any) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top top",
            end: "+=100%", // Pin for 100% of viewport height
            pin: true,
            scrub: true,
          });
        });
      }
    });

    // Refresh ScrollTrigger once images finish loading
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, container);

  return () => ctx.revert();
}
