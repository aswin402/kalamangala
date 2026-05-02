import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmoothScrollProvider, getLenis } from '@/providers/SmoothScrollProvider';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    // Refresh ScrollTrigger after a short delay to allow the DOM to settle
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [pathname]);

  return null;
}

export function RootLayout() {
  return (
    <SmoothScrollProvider>
      <ScrollToTop />
      <div className="min-h-screen text-foreground overflow-x-hidden w-full">
        <Navbar />
        <main className="w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
