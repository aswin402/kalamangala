import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/homepage/logo.avif';

const navLinks = [
  { name: 'Home',     href: '/',          route: true  },
  { name: 'About',    href: '/about',     route: true  },
  { name: 'Projects', href: '/#projects', route: false },
  { name: 'Blog',     href: '/#blog',     route: false },
  { name: 'Contact',  href: '/contact',   route: true  },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (href: string) =>
    (href === '/' && pathname === '/') ||
    (href === '/about' && pathname === '/about') ||
    (href === '/contact' && pathname === '/contact');

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors relative pb-0.5 ${
      isActive(href)
        ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-foreground'
        : 'text-foreground/65 hover:text-foreground'
    }`;

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-background/85 backdrop-blur-md border-b border-foreground/6 py-3 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-center gap-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="Kalamangala Logo" className="h-9 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.route ? (
              <Link key={link.name} to={link.href} className={linkClass(link.href)}>
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.href} className={linkClass(link.href)}>
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background/96 backdrop-blur-md border-b border-foreground/5 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.route ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-1.5"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-1.5"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};
