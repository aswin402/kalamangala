import { Menu } from 'lucide-react';
import logo from '../../assets/homepage/logo.avif';

const navLinks = [
  { name: 'PROJECTS', href: '#projects' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROPERTIES', href: '#properties' },
  { name: 'BLOGS', href: '#blogs' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-background/80 backdrop-blur-md border-b border-foreground/5 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Kalamangala Logo" className="h-8 md:h-10 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-widest hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};
