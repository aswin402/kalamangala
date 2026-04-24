import { Phone } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const servicesList = [
  'Top Real Estate Contractors in Tiruchengode',
  'House & Plot Layouts in Karur',
  'Villa & Residential Layouts in Tiruppur',
  'Approved Real Estate Layouts & Plots in Tamil Nadu',
  'real estate construction companies in Erode',
  'luxury layouts in erode',
];

const menuLinks = [
  { name: 'Home', active: true },
  { name: 'About', active: false },
  { name: 'Projects', active: false },
  { name: 'Blog', active: false },
  { name: 'Contact', active: false },
];

export const Footer = () => {
  return (
    <footer className="bg-[#162a22] text-white mx-4 mb-4 rounded-[1.25rem] overflow-hidden">
      <div className="px-10 md:px-14 pt-14 pb-0">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-10 justify-between items-start">

          {/* Left — social grid + newsletter */}
          <div className="w-full lg:w-[42%] flex flex-col gap-8">

            {/* Social Cards */}
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="bg-white/[0.07] hover:bg-white/[0.12] transition-colors rounded-xl p-7 flex flex-col items-center justify-center gap-3"
                >
                  <FaInstagram size={26} className="text-white/75" />
                  <span className="text-[10px] tracking-[0.18em] text-white/50 uppercase">Instagram</span>
                </a>
                <a
                  href="#"
                  className="bg-white/[0.07] hover:bg-white/[0.12] transition-colors rounded-xl p-7 flex flex-col items-center justify-center gap-3"
                >
                  <FaFacebookF size={26} className="text-white/75" />
                  <span className="text-[10px] tracking-[0.18em] text-white/50 uppercase">Facebook</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="#"
                  className="bg-white/[0.07] hover:bg-white/[0.12] transition-colors rounded-xl p-5 flex flex-col items-center justify-center gap-2.5"
                >
                  <Phone size={22} className="text-white/75" />
                  <span className="text-[10px] tracking-[0.18em] text-white/50 uppercase">Call</span>
                </a>
                <a
                  href="#"
                  className="bg-white/[0.07] hover:bg-white/[0.12] transition-colors rounded-xl p-5 flex flex-col items-center justify-center gap-2.5"
                >
                  <FaYoutube size={22} className="text-white/75" />
                  <span className="text-[10px] tracking-[0.18em] text-white/50 uppercase">Youtube</span>
                </a>
                <a
                  href="#"
                  className="bg-white/[0.07] hover:bg-white/[0.12] transition-colors rounded-xl p-5 flex flex-col items-center justify-center gap-2.5"
                >
                  <FaLinkedinIn size={22} className="text-white/75" />
                  <span className="text-[10px] tracking-[0.18em] text-white/50 uppercase">Linkedin</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3 w-full">
              <p className="text-[15px] text-white/75 font-medium">Subscribe to the newsletter</p>
              <form className="flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Info@Kalamangala.com"
                  className="bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition w-full text-white placeholder:text-white/30"
                />
                <button className="bg-primary text-foreground font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition w-full text-sm tracking-wide">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Right — services + menu */}
          <div className="w-full lg:w-[52%] flex flex-col sm:flex-row gap-10 sm:gap-14 lg:justify-end">

            {/* Services */}
            <div className="flex flex-col gap-2.5">
              {servicesList.map((service, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-[13px] text-white/55 hover:text-white/85 leading-snug transition-colors"
                >
                  {service}
                </a>
              ))}
            </div>

            {/* Menu */}
            <div className="flex flex-col gap-2.5 sm:min-w-[110px]">
              <span className="text-[11px] text-primary uppercase tracking-[0.18em] font-semibold mb-1">Menu</span>
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className={`text-sm transition-colors ${link.active ? 'text-primary' : 'text-white/60 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Massive brand name */}
      <div className="mt-8 w-full flex items-end justify-start">
        <h1
          className="font-heading font-bold tracking-[-0.02em] whitespace-nowrap select-none leading-[0.82]"
          style={{ color: '#e8a87c', fontSize: 'clamp(70px, 13.2vw, 200px)' }}
        >
          Kalamangala
        </h1>
      </div>
    </footer>
  );
};
