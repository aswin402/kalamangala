import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, Phone, X } from "lucide-react";
import gsap from "gsap";
import logo from "../../assets/logo.avif";

const navLinks = [
  { name: "Home", href: "/", route: true },
  { name: "About", href: "/about", route: true },
  { name: "Projects", href: "#", route: false, dropdown: true },
  { name: "Blog", href: "/blog", route: true },
  { name: "Contact", href: "/contact", route: true },
];

const projectsData = [
  {
    title: "The Waterfront",
    sub: "By Kalamangala",
    href: "/the-waterfront",
  },
  {
    title: "Amenities",
    sub: "At Waterfront",
    href: "/amenities",
  },
  {
    title: "Location Advantage",
    sub: "Tamil nadu",
    href: "/location-advantage",
  },
  {
    title: "Construction Company",
    sub: "In Tamilnadu",
    href: "/construction-company",
  },
  {
    title: "Residential Plots",
    sub: "In Coimbatore",
    href: "/residential-plots-coimbatore",
  },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const { pathname } = useLocation();

  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideNavbarTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isProjectRoute = projectsData.some((item) => item.href === pathname);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const clearHideTimer = () => {
      if (hideNavbarTimer.current) {
        clearTimeout(hideNavbarTimer.current);
      }
    };

    const startHideTimer = () => {
      clearHideTimer();

      hideNavbarTimer.current = setTimeout(() => {
        const nearTop = window.scrollY < 120;

        if (!nearTop && !mobileOpen && !projectsOpen) {
          setNavbarVisible(false);
        }
      }, 1800);
    };

    const handleScroll = () => {
      const nearTop = window.scrollY < 120;

      if (nearTop) {
        setNavbarVisible(true);
        clearHideTimer();
        return;
      }

      setNavbarVisible(true);
      startHideTimer();
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearHideTimer();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileOpen, projectsOpen]);

  useEffect(() => {
    if (mobileOpen || projectsOpen) {
      setNavbarVisible(true);

      if (hideNavbarTimer.current) {
        clearTimeout(hideNavbarTimer.current);
      }
    }
  }, [mobileOpen, projectsOpen]);

  useEffect(() => {
    const target = mobileOpen
      ? mobileDropdownRef.current
      : desktopDropdownRef.current;

    if (projectsOpen && target) {
      gsap.fromTo(
        target,
        {
          opacity: 0,
          y: -10,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.28,
          ease: "power3.out",
        }
      );
    }
  }, [projectsOpen, mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
    setProjectsOpen(false);
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      if (prev) setProjectsOpen(false);
      return !prev;
    });
  };

  const openDesktopProjects = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setProjectsOpen(true);
  };

  const closeDesktopProjects = () => {
    hoverTimer.current = setTimeout(() => {
      setProjectsOpen(false);
    }, 160);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  const desktopLinkClass = (name: string, href: string) => {
    const active =
      name === "Projects" ? projectsOpen || isProjectRoute : isActive(href);

    return `
      flex h-[32px] items-center justify-center rounded-[7px]
      px-[14px] text-[16px] font-[500] leading-none tracking-[-0.01em]
      transition-all duration-200
      ${
        active
          ? "bg-[#e8e6dc] text-foreground hover:text-primary"
          : "text-foreground hover:text-primary"
      }
    `;
  };

  const mobileItemClass = (active: boolean) => {
    return `
      flex h-[42px] w-full max-w-[351px] items-center justify-center
      text-[16px] font-[400] leading-none tracking-[-0.03em]
      transition-colors
      ${
        active
          ? "text-primary"
          : "text-foreground hover:text-primary"
      }
    `;
  };

  return (
    <>
      <header
        className={`
          fixed left-0 top-0 z-[9999] w-full overflow-visible bg-transparent
          transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${navbarVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Top bar */}
        <div
          className="
            flex h-[61px] w-full items-center justify-between bg-white-text
            px-[31px]
            shadow-[0_4px_14px_rgba(23,55,47,0.14)]
            sm:px-[40px]
            md:mx-auto md:h-[72px] md:max-w-[1920px] md:justify-center md:px-5
            md:shadow-[0_4px_14px_rgba(23,55,47,0.14)]
          "
        >
          <div className="flex items-center gap-[44px]">
            <Link to="/" onClick={closeMenu} className="flex shrink-0">
              <img
                src={logo}
                alt="Kalamangala"
                className="h-[36px] w-auto object-contain md:h-[42px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="
                hidden h-[42px] items-center rounded-[8px]
                bg-[#f1efe6] px-[5px]
                shadow-[0_3px_12px_rgba(23,55,47,0.07),inset_0_0_0_1px_rgba(20,40,32,0.025)]
                md:flex
              "
            >
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative flex h-full items-center"
                  onMouseEnter={
                    link.dropdown ? openDesktopProjects : undefined
                  }
                  onMouseLeave={
                    link.dropdown ? closeDesktopProjects : undefined
                  }
                >
                  {link.dropdown ? (
                    <button
                      type="button"
                      onClick={() => setProjectsOpen((prev) => !prev)}
                      className={desktopLinkClass(link.name, link.href)}
                    >
                      {link.name}
                    </button>
                  ) : link.route ? (
                    <Link
                      to={link.href}
                      className={desktopLinkClass(link.name, link.href)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={desktopLinkClass(link.name, link.href)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={toggleMobile}
            aria-label="Toggle menu"
            className={`
              flex h-[44px] w-[44px] items-center justify-center rounded-[9px]
              transition-all duration-200 md:hidden
              ${
                mobileOpen
                  ? "border border-transparent bg-card-green text-primary"
                  : "border border-foreground/40 bg-transparent text-foreground"
              }
            `}
          >
            {mobileOpen ? (
              <X size={27} strokeWidth={2.1} />
            ) : (
              <span className="flex flex-col items-center justify-center gap-[7px]">
                <span className="block h-[1.8px] w-[22px] rounded-full bg-current" />
                <span className="block h-[1.8px] w-[22px] rounded-full bg-current" />
              </span>
            )}
          </button>

          {/* Desktop Projects Dropdown */}
          {projectsOpen && !mobileOpen && (
            <div
              ref={desktopDropdownRef}
              onMouseEnter={openDesktopProjects}
              onMouseLeave={closeDesktopProjects}
              className="
                absolute left-1/2 top-[64px] hidden w-[min(560px,90vw)]
                -translate-x-1/2 rounded-[28px]
                border border-foreground/5 bg-white-text/95 p-8
                shadow-[0_24px_60px_rgba(0,0,0,0.08)]
                backdrop-blur-xl md:flex md:gap-10
              "
            >
              <div className="flex flex-1 flex-col gap-7">
                {projectsData.slice(0, 3).map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    onClick={() => setProjectsOpen(false)}
                    className="group"
                  >
                    <h4 className="text-[15px] font-semibold leading-none text-foreground transition-colors group-hover:text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[12px] leading-none text-foreground/45">
                      {item.sub}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="w-px bg-card-green/10" />

              <div className="flex flex-1 flex-col gap-7">
                {projectsData.slice(3).map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    onClick={() => setProjectsOpen(false)}
                    className="group"
                  >
                    <h4 className="text-[15px] font-semibold leading-none text-foreground transition-colors group-hover:text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[12px] leading-none text-foreground/45">
                      {item.sub}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Pattern Strip */}
        <div
          className={`
            h-[31px] w-full border-t border-[#dce4d6]/70 md:hidden
            ${mobileOpen ? "bg-white-text" : "bg-transparent"}
          `}
        />
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed left-0 top-[61px] z-[9998] h-[calc(100dvh-61px)] w-full
          overflow-hidden bg-white-text transition-all duration-300 md:hidden
          ${
            mobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <div className="relative mx-auto flex h-full w-full max-w-[550px] flex-col px-[28px] pt-[58px]">
          {/* Mobile Links First */}
          <nav className="flex flex-col items-center gap-[28px]">
            <Link
              to="/"
              onClick={closeMenu}
              className={mobileItemClass(pathname === "/")}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className={mobileItemClass(pathname === "/about")}
            >
              About
            </Link>

            <button
              type="button"
              onClick={() => setProjectsOpen((prev) => !prev)}
              className={mobileItemClass(projectsOpen || isProjectRoute)}
            >
              Projects
            </button>

            <Link
              to="/blog"
              onClick={closeMenu}
              className={mobileItemClass(pathname === "/blog")}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className={mobileItemClass(pathname === "/contact")}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Projects Dropdown */}
          {projectsOpen && (
            <div
              ref={mobileDropdownRef}
              className="
                absolute left-1/2 top-[190px] z-[10000] w-[272px]
                -translate-x-1/2 rounded-[20px] border border-white/70
                bg-gradient-to-b from-[#bfc6bb]/95 via-[#d4d7ca]/92 to-[#fbfaee]/98
                px-[18px] pb-[18px] pt-[20px]
                shadow-[0_20px_45px_rgba(20,40,32,0.16)]
                backdrop-blur-xl
              "
            >
              <div className="flex flex-col gap-[25px]">
                {projectsData.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    onClick={closeMenu}
                    className="group block"
                  >
                    <h4 className="text-[16px] font-[600] leading-none tracking-[-0.03em] text-foreground transition-colors group-hover:text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-[8px] text-[13px] font-[500] leading-none tracking-[-0.02em] text-foreground/55">
                      {item.sub}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Contact Card Down */}
          <div
            className="
              mx-auto mt-[46px] h-[324px] w-full max-w-[367px] rounded-[7px]
              bg-card-green px-[22px] pt-[27px] text-center text-white
            "
          >
            <Mail
              size={27}
              strokeWidth={2.2}
              className="mx-auto text-primary"
            />

            <p className="mt-[18px] text-[18px] font-[400] leading-none tracking-[-0.035em] text-white">
              Info@Kalamangala.com
            </p>

            <div className="mx-auto mt-[13px] h-px w-[68px] bg-white/10" />

            <Phone
              size={28}
              strokeWidth={2.1}
              className="mx-auto mt-[8px] text-primary"
            />

            <p className="mt-[17px] text-[18px] font-[400] leading-none tracking-[-0.035em] text-white">
              +91 94897 80258
            </p>

            <MapPin
              size={29}
              strokeWidth={2.15}
              className="mx-auto mt-[24px] text-primary"
            />

            <p className="mx-auto mt-[16px] max-w-[305px] text-[17px] font-[400] leading-[1.55] tracking-[-0.035em] text-white">
              1 saminathapuram, Muthur Main Road, via, Modakurichi, Erode,
              Tamil Nadu 638104
            </p>
          </div>
        </div>
      </div>
    </>
  );
};