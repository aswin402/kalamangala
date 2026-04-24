import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6 rounded-t-[3rem] mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-8 justify-between relative z-10">
        
        {/* Left: Contact Info */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition">
            <MapPin size={24} className="text-primary" />
            <span className="text-sm">Location</span>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition">
            <ArrowRight size={24} className="text-primary" />
            <span className="text-sm">Direction</span>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition">
            <Phone size={24} className="text-primary" />
            <span className="text-sm">Call Us</span>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition">
            <Mail size={24} className="text-primary" />
            <span className="text-sm">Email</span>
          </div>
        </div>

        {/* Middle: Newsletter */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-heading mb-4">Subscribe to our newsletter</h3>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
            />
            <button className="bg-primary text-foreground font-semibold py-3 rounded-lg hover:bg-primary/90 transition">
              Submit
            </button>
          </form>
        </div>

        {/* Right: Links */}
        <div className="flex-1 flex gap-12 justify-end">
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm text-white/70 hover:text-primary transition">Home</a>
            <a href="#" className="text-sm text-white/70 hover:text-primary transition">About Us</a>
            <a href="#" className="text-sm text-white/70 hover:text-primary transition">Projects</a>
            <a href="#" className="text-sm text-white/70 hover:text-primary transition">Blogs</a>
            <a href="#" className="text-sm text-white/70 hover:text-primary transition">Contact</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm text-white/70 hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="text-sm text-white/70 hover:text-primary transition">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Massive Kalamangala Text */}
      <div className="mt-20 md:mt-32 w-full flex justify-center items-end opacity-90 select-none overflow-hidden h-[15vw] relative z-0">
        <h1 className="text-[20vw] leading-none font-heading font-bold text-primary tracking-tighter absolute -bottom-[4vw]">
          Kalamangala
        </h1>
      </div>
    </footer>
  );
};
