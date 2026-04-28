import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import logo from '../../assets/logo.avif';

const navLinks = [
  { name: 'Home', href: '/', route: true },
  { name: 'About', href: '/about', route: true },
  { name: 'Projects', href: '#', route: false, dropdown: true },
  { name: 'Blog', href: `${import.meta.env.BASE_URL}#blog`, route: false },
  { name: 'Contact', href: '/contact', route: true },
];

const projectsData = [
  {
    col1: [
      { title: 'The Waterfront', sub: 'By Kalamangala', href: '/the-waterfront' },
      { title: 'Amenities', sub: 'At Waterfront', href: '/amenities' },
      { title: 'Location Advantage', sub: 'Tamil Nadu', href: '/location-advantage' },
    ],
    col2: [
      { title: 'Construction Company', sub: 'In Tamil Nadu', href: '/construction-company' },
      { title: 'Residential Plots', sub: 'In Coimbatore', href: '/residential-plots-coimbatore' },
    ],
  },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const { pathname } = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isProjectsOpen && dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.28,
          ease: 'power3.out',
        }
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
    }, 160);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href;
  };

  const linkClass = (name: string, href: string) => {
    const active = name === 'Projects' ? isProjectsOpen : isActive(href);

    return `
      h-[34px]
      px-[16px]
      flex items-center justify-center
      rounded-[8px]
      text-[16px]
      leading-none
      font-[500]
      tracking-[-0.01em]
      transition-all duration-200
      ${
        active
          ? 'bg-[#e8e6dc] text-[#142820]'
          : 'text-[#142820] hover:bg-[#e8e6dc]'
      }
    `;
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[72px] bg-[#f7f6e9]">
      <div className="relative mx-auto flex h-full w-full max-w-[1920px] items-center justify-center px-5">
        {/* Center group */}
        <div className="flex items-center gap-[48px]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Kalamangala"
              className="h-[42px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex h-[46px] items-center rounded-[10px] bg-[#f1efe3] px-[7px] shadow-[inset_0_0_0_1px_rgba(20,40,32,0.03)]">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative flex h-full items-center"
                onMouseEnter={link.dropdown ? handleMouseEnter : undefined}
                onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
              >
                {link.dropdown ? (
                  <button className={linkClass(link.name, link.href)}>
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
          </nav>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-[#f1efe3] text-[#142820] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {/* Projects Dropdown */}
        {isProjectsOpen && (
          <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              pointer-events-auto
              absolute
              top-[64px]
              left-1/2
              w-[560px]
              -translate-x-1/2
              rounded-[28px]
              border border-[#142820]/5
              bg-[#fbfaf2]/95
              p-8
              shadow-[0_24px_60px_rgba(0,0,0,0.08)]
              backdrop-blur-xl
              hidden md:flex
              gap-10
            "
          >
            <div className="flex flex-1 flex-col gap-7">
              {projectsData[0].col1.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsProjectsOpen(false)}
                  className="group"
                >
                  <h4 className="text-[15px] font-semibold leading-none text-[#142820] transition-colors group-hover:text-[#e8a87c]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[12px] leading-none text-[#142820]/45">
                    {item.sub}
                  </p>
                </Link>
              ))}
            </div>

            <div className="w-px bg-[#142820]/7" />

            <div className="flex flex-1 flex-col gap-7">
              {projectsData[0].col2.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsProjectsOpen(false)}
                  className="group"
                >
                  <h4 className="text-[15px] font-semibold leading-none text-[#142820] transition-colors group-hover:text-[#e8a87c]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[12px] leading-none text-[#142820]/45">
                    {item.sub}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <div
          className={`
            absolute left-5 right-5 top-[78px]
            rounded-[22px]
            border border-[#142820]/5
            bg-[#fbfaf2]/95
            p-5
            shadow-[0_20px_50px_rgba(0,0,0,0.08)]
            backdrop-blur-xl
            transition-all duration-300
            md:hidden
            ${
              mobileOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-3 pointer-events-none'
            }
          `}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.route ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#142820] hover:bg-[#e8e6dc]"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#142820] hover:bg-[#e8e6dc]"
                >
                  {link.name}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
