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
    
    rafId = requestAnimationFrame(() => {
      cleanup = initScrollAnimations(document.body);
      // safe refresh recalculates all trigger positions
      ScrollTrigger.refresh(true);
    });
    
    return () => {
      cancelAnimationFrame(rafId);
      if (cleanup) cleanup();
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
