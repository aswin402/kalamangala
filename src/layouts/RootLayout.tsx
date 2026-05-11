import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { initLenis, destroyLenis } from '@/lib/lenis';
import { initScrollAnimations } from '@/lib/scrollAnimations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function RootLayout() {
  const { pathname } = useLocation();
  const lenisRef = useRef<any>(null);

  // Initialize Lenis globally once
  useEffect(() => {
    lenisRef.current = initLenis();

    return () => {
      destroyLenis();
    };
  }, []);

  // Initialize scroll animations and scroll to top on route change
  useEffect(() => {
    // Scroll to top on route change
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Initialize scroll animations after DOM settles, then refresh triggers
    let cleanup: (() => void) | undefined;
    let rafId: number;
    let resizeObserver: ResizeObserver | undefined;
    let timeoutId: ReturnType<typeof setTimeout>;
    let mutationObserver: MutationObserver | undefined;
    let reInitTimer: ReturnType<typeof setTimeout>;

    const doInit = () => {
      // Clean up previous instance before re-initializing
      if (cleanup) {
        cleanup();
        cleanup = undefined;
      }
      cleanup = initScrollAnimations(document.body);
      ScrollTrigger.refresh(true);
    };
    
    rafId = requestAnimationFrame(() => {
      doInit();

      // React router transitions or lazy-loaded images often change page height after mount.
      // A ResizeObserver on document.body ensures ScrollTrigger recalculates trigger positions
      // whenever the height changes, preventing animations from breaking across all pages.
      if (typeof window !== "undefined" && window.ResizeObserver) {
        resizeObserver = new ResizeObserver(() => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            // Only refresh if there are active ScrollTrigger instances
            // and the user isn't currently scrolling (avoids Lenis desync)
            if (ScrollTrigger.getAll().length > 0) {
              ScrollTrigger.refresh(true);
            }
            // Also notify Lenis that the page height changed so its
            // internal scroll limit stays accurate (critical for infinite scroll)
            lenisRef.current?.resize();
          }, 50);
        });
        resizeObserver.observe(document.body);
      }

      // Lazy-loaded pages (via React.lazy + Suspense) render AFTER this RAF fires.
      // A MutationObserver detects when new animated elements (.km-reveal, etc.)
      // appear in the DOM and processes ONLY the new elements incrementally.
      // Previous approach called doInit() which reverted ALL existing GSAP animations,
      // causing already-visible cards to flash back to opacity:0 (the "blog page glitch").
      mutationObserver = new MutationObserver((mutations) => {
        let hasNewAnimatedElements = false;
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            // Check if the added node or any of its descendants need animation
            if (
              node.matches?.('.km-reveal, .km-reveal-slow, .km-stagger, .km-card, .la-card, .km-fade-left, .km-fade-right, .la-reveal, .km-service') ||
              node.querySelector?.('.km-reveal, .km-reveal-slow, .km-stagger, .km-card, .la-card, .km-fade-left, .km-fade-right, .la-reveal, .km-service')
            ) {
              hasNewAnimatedElements = true;
              break;
            }
          }
          if (hasNewAnimatedElements) break;
        }

        if (hasNewAnimatedElements) {
          // Debounce: wait for the full lazy component tree to render.
          // Instead of ripping out all animations (doInit), run an incremental pass
          // that only processes elements not yet marked with [data-km-init].
          // Then refresh ScrollTrigger so the new elements get correct positions.
          clearTimeout(reInitTimer);
          reInitTimer = setTimeout(() => {
            initScrollAnimations(document.body);
            ScrollTrigger.refresh();
            lenisRef.current?.resize();
          }, 50);
        }
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
    
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      clearTimeout(reInitTimer);
      if (cleanup) cleanup();
      if (resizeObserver) resizeObserver.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, [pathname]);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden w-full">
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
