import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

      document.querySelectorAll("[data-reveal], [data-reveal-stagger]").forEach((el) => {
        el.removeAttribute("data-anim");
        el.removeAttribute("data-parallax-img");
      });

      document.querySelectorAll("[data-anim]").forEach((el) => {
        if ((el as HTMLElement).dataset.kmInit) return;
        (el as HTMLElement).dataset.kmInit = "1";
        gsap.fromTo(
          el,
          { opacity: 0, y: getY(40), scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: getDuration(1.25),
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      document.querySelectorAll("[data-parallax-img]").forEach((el) => {
        if (!isDesktop) return;
        if ((el as HTMLElement).dataset.kmInit) return;
        (el as HTMLElement).dataset.kmInit = "1";
        gsap.fromTo(
          el,
          { yPercent: 8 },
          {
            yPercent: -8,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      });

      // .km-reveal
      gsap.utils.toArray(".km-reveal, .la-reveal, .km-service").forEach((el: any) => {
        if (el.hasAttribute("data-reveal")) return;
        if (el.dataset.kmInit) return;
        el.dataset.kmInit = "1";
        gsap.fromTo(el, 
          {
            opacity: 0,
            y: getY(50),
          },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              toggleActions: "play none none none",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: getDuration(1.4),
            ease: "power3.out",
            force3D: true,
          }
        );
      });

      // .km-reveal-slow
      gsap.utils.toArray(".km-reveal-slow").forEach((el: any) => {
        if (el.hasAttribute("data-reveal")) return;
        if (el.dataset.kmInit) return;
        el.dataset.kmInit = "1";
        gsap.fromTo(el, 
          { opacity: 0, y: getY(60) },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              toggleActions: "play none none none",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: getDuration(1.8),
            ease: "power4.out",
            force3D: true,
          }
        );
      });

      // .km-stagger (Animates immediate children sequentially)
      gsap.utils.toArray(".km-stagger").forEach((parent: any) => {
        if (parent.hasAttribute("data-reveal-stagger")) return;
        if (parent.dataset.kmInit) return;
        parent.dataset.kmInit = "1";
        const children = Array.from(parent.children);
        if (children.length === 0) return;
        
        gsap.fromTo(children, 
          { opacity: 0, y: getY(40) },
          {
            scrollTrigger: {
              trigger: parent,
              start: "top 82%",
              toggleActions: "play none none none",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: getDuration(1.25),
            stagger: 0.14,
            ease: "power3.out",
            force3D: true,
          }
        );
      });

      // .km-text-reveal (For headings)
      gsap.utils.toArray(".km-text-reveal").forEach((el: any) => {
        if (el.dataset.kmInit) return;
        el.dataset.kmInit = "1";
        const isSafeToSplit = !el.children.length;
        
        if (isSafeToSplit && el.textContent) {
          const text = el.textContent;
          const words = text.split(" ").map((word: string) => `<span style="display:inline-block; overflow:hidden; vertical-align:top;"><span style="display:inline-block; backface-visibility:hidden;" class="km-word-inner">${word}</span></span>`);
          el.innerHTML = words.join(" ");
          
          const inners = el.querySelectorAll(".km-word-inner");
          gsap.fromTo(inners, 
            { yPercent: 100, opacity: 0 },
            {
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
              yPercent: 0,
              opacity: 1,
              duration: getDuration(1.2),
              stagger: 0.05,
              ease: "power4.out",
              force3D: true,
            }
          );
        } else {
          // Fallback if not safe to split
          gsap.fromTo(el, 
            { opacity: 0, yPercent: getY(100) },
            {
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
              opacity: 1,
              yPercent: 0,
              duration: getDuration(1.2),
              ease: "power4.out",
              force3D: true,
            }
          );
        }
      });

      // .km-image-parallax (desktop only — scrub is too heavy for mobile)
      if (isDesktop) {
        gsap.utils.toArray(".km-image-parallax").forEach((el: any) => {
          if (el.dataset.kmInit) return;
          el.dataset.kmInit = "1";
          gsap.fromTo(el, 
            { 
              scale: 1.08,
              yPercent: -8
            },
            {
              scale: 1,
              yPercent: 8,
              ease: "none",
              force3D: true,
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              }
            }
          );
        });
      }

      // .km-card
      gsap.utils.toArray(".km-card, .la-card").forEach((el: any) => {
        if (el.dataset.kmInit) return;
        el.dataset.kmInit = "1";
        gsap.fromTo(el, 
          { opacity: 0, y: getY(40), scale: 0.97 },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: getDuration(1.25),
            ease: "power3.out",
            force3D: true,
          }
        );
      });

      // .km-fade-left
      gsap.utils.toArray(".km-fade-left").forEach((el: any) => {
        if (el.dataset.kmInit) return;
        el.dataset.kmInit = "1";
        gsap.fromTo(el, 
          { opacity: 0, x: getX(-50) },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
            opacity: 1,
            x: 0,
            duration: getDuration(1.4),
            ease: "power3.out",
            force3D: true,
          }
        );
      });

      // .km-fade-right
      gsap.utils.toArray(".km-fade-right").forEach((el: any) => {
        if (el.dataset.kmInit) return;
        el.dataset.kmInit = "1";
        gsap.fromTo(el, 
          { opacity: 0, x: getX(50) },
          {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
            opacity: 1,
            x: 0,
            duration: getDuration(1.4),
            ease: "power3.out",
            force3D: true,
          }
        );
      });

      // .km-hero
      gsap.utils.toArray(".km-hero").forEach((hero: any) => {
        if (hero.dataset.kmInit) return;
        hero.dataset.kmInit = "1";
        const tl = gsap.timeline();
        
        const media = hero.querySelector("video, img, .hero-media");
        if (media) {
          tl.from(media, {
            scale: 1.15,
            duration: getDuration(2.4),
            ease: "power3.out",
            force3D: true,
          }, 0);
        }
        
        const heading = hero.querySelector("h1, .km-hero-heading");
        if (heading) {
          tl.fromTo(heading, 
            { y: getY(50), opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: getDuration(1.6),
              ease: "power4.out",
              force3D: true,
            }, 
            0.2
          );
        }

        const subtitle = hero.querySelector("p, .km-hero-subtitle");
        if (subtitle) {
          tl.fromTo(subtitle, 
            { y: getY(30), opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: getDuration(1.4),
              ease: "power3.out",
              force3D: true,
            }, 
            0.6
          );
        }

        const actions = hero.querySelector(".km-hero-actions");
        if (actions) {
          tl.fromTo(actions.children, 
            { y: getY(20), opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: getDuration(1.2),
              stagger: 0.12,
              ease: "power3.out",
              force3D: true,
            }, 
            0.8
          );
        }
      });

      // .km-pin-section (Optional desktop-only pinning)
      if (isDesktop) {
        gsap.utils.toArray(".km-pin-section").forEach((el: any) => {
          if (el.dataset.kmInit) return;
          el.dataset.kmInit = "1";
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
