import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import logo from '../../assets/homepage/logo.avif';

const navLinks = [
  { name: 'Home',     href: '/',          route: true  },
  { name: 'About',    href: '/about',     route: true  },
  { name: 'Projects', href: '#',          route: false, dropdown: true },
  { name: 'Blog',     href: '/#blog',     route: false },
  { name: 'Contact',  href: '/contact',   route: true  },
];

const projectsData = [
  {
    col1: [
      { title: 'The Waterfront', sub: 'By Kalamangala', href: '/the-waterfront' },
      { title: 'Amenties', sub: 'At Waterfront', href: '/amenities' },
      { title: 'Location Advantage', sub: 'Tamil nadu', href: '/location-advantage' }
    ],
    col2: [
      { title: 'Construction Company', sub: 'In Tamilnadu', href: '/construction-company' },
      { title: 'Residential Plots', sub: 'In Coimbatore', href: '/residential-plots-coimbatore' }
    ]
  }
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const { pathname } = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isProjectsOpen) {
      gsap.fromTo(dropdownRef.current,
        { opacity: 0, y: -20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power4.out' }
      );
    }
  }, [isProjectsOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProjectsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProjectsOpen(false);
    }, 150);
  };

  const isActive = (href: string) =>
    (href === '/' && pathname === '/') ||
    (href === '/about' && pathname === '/about') ||
    (href === '/contact' && pathname === '/contact');

  const linkClass = (name: string, href: string) => {
    const active = name === 'Projects' ? isProjectsOpen : isActive(href);
    return `text-[13px] font-medium px-5 py-2 rounded-lg transition-all duration-300 relative cursor-pointer ${
      active
        ? 'bg-[#edeae0] text-foreground shadow-sm'
        : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
    }`;
  };

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex flex-col items-center pointer-events-none px-6">
      <div className="flex items-center gap-6 pointer-events-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Kalamangala Logo" className="h-8 w-auto" />
        </Link>

        {/* Links Pill */}
        <nav ref={navRef} className="bg-[#f9f8f3]/95 backdrop-blur-xl border border-foreground/5 rounded-full px-1.5 py-1.5 flex items-center shadow-sm">
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`${linkClass(link.name, link.href)} projects-toggle`}
                  >
                    {link.name}
                  </button>
                ) : link.route ? (
                  <Link to={link.href} className={linkClass(link.name, link.href)}>
                    {link.name}
                  </Link>
                ) : (
                  <a href={link.href} className={linkClass(link.name, link.href)}>
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground px-4 py-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mega Menu Dropdown */}
      <div className="w-full flex justify-center mt-3">
        {isProjectsOpen && (
          <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="pointer-events-auto w-full max-w-[580px] bg-white/40 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden p-10 flex gap-12"
          >
           {/* Column 1 */}
           <div className="flex-1 flex flex-col gap-8">
              {projectsData[0].col1.map((item, idx) => (
                item.href ? (
                  <Link key={idx} to={item.href} className="group cursor-pointer" onClick={() => setIsProjectsOpen(false)}>
                    <h4 className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-foreground/45 mt-0.5">{item.sub}</p>
                  </Link>
                ) : (
                  <div key={idx} className="group cursor-pointer">
                    <h4 className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-foreground/45 mt-0.5">{item.sub}</p>
                  </div>
                )
              ))}
           </div>

           {/* Vertical Divider */}
           <div className="w-[1px] bg-foreground/5 h-full self-stretch" />

           {/* Column 2 */}
           <div className="flex-1 flex flex-col gap-8">
              {projectsData[0].col2.map((item, idx) => (
                item.href ? (
                  <Link key={idx} to={item.href} className="group cursor-pointer" onClick={() => setIsProjectsOpen(false)}>
                    <h4 className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-foreground/45 mt-0.5">{item.sub}</p>
                  </Link>
                ) : (
                  <div key={idx} className="group cursor-pointer">
                    <h4 className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-foreground/45 mt-0.5">{item.sub}</p>
                  </div>
                )
              ))}
           </div>
        </div>
      )}
    </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-6 right-6 mt-3 bg-white/90 backdrop-blur-xl border border-foreground/5 rounded-[2rem] transition-all duration-300 ${
          mobileOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.route ? (
                <Link
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 block"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 block"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

