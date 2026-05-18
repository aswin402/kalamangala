import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 94897 80258",
    href: "tel:09489780258",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@kalamangala.com",
    href: "mailto:info@kalamangala.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "1 Saminathapuram,\nMuthur Main Road,\nModakurichi (via),\nErode 638104",
    href: "https://maps.google.com/?q=1+Saminathapuram+Muthur+Main+Road+Modakurichi+Erode+638104",
    external: true,
  },
];

const socialLinks = [
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/kalamangala_official/",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/people/Kalamangala/61575762724211/",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@kalamangala/videos",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/kalamangala-official/posts",
  },
];

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll("[data-anim]");
      if (!els) return;

      els.forEach((el) => {
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        const type = el.getAttribute("data-anim");

        if (type === "fade-up") {
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              delay,
              ease: "power3.out",
              force3D: true,
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        } else if (type === "fade-left") {
          gsap.fromTo(
            el,
            { x: -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              delay,
              ease: "power3.out",
              force3D: true,
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        } else if (type === "fade-right") {
          gsap.fromTo(
            el,
            { x: 40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              delay,
              ease: "power3.out",
              force3D: true,
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        } else if (type === "scale-in") {
          gsap.fromTo(
            el,
            { scale: 0.92, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1.0,
              delay,
              ease: "power3.out",
              force3D: true,
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[2] w-full overflow-hidden bg-card"
    >
      <div className="w-full px-[13px] pb-[40px] pt-[30px] sm:px-[18px] sm:pb-[50px] sm:pt-[32px] md:px-[43px] md:pb-[70px] md:pt-[60px] lg:px-[43px] lg:pb-[90px] lg:pt-[80px]">
        <div className="mx-auto max-w-[1200px] min-[1180px]:max-w-[1760px] 3xl:max-w-[2100px]">
          <div className="mb-[40px] md:mb-[50px] lg:mb-[60px]" data-anim="fade-up">
            <div className="mb-[23px] flex items-center gap-[7px] md:mb-[22px]">
              <span className="flex h-[11px] w-[11px] items-center justify-center rounded-full border border-primary">
                <span className="h-[6px] w-[6px] rounded-full bg-primary" />
              </span>
              <span className="whitespace-nowrap text-[12px] font-bold uppercase leading-none tracking-[-0.03em] text-primary">
                Contact Us
              </span>
            </div>
            <div className="h-px w-full bg-foreground/20" />
          </div>

          <div
            className="mb-[40px] grid grid-cols-1 gap-[14px] sm:grid-cols-2 md:mb-[50px] md:gap-[18px] lg:grid-cols-3 lg:gap-[20px]"
            data-anim="fade-up"
            data-delay="0.05"
          >
            {contactDetails.map((detail, index) => (
              <a
                key={index}
                href={detail.href}
                target={detail.external ? "_blank" : undefined}
                rel={detail.external ? "noreferrer" : undefined}
                className="group flex items-start gap-[16px] rounded-[10px] border border-foreground/10 bg-card p-[18px] shadow-sm transition-all duration-300 hover:border-primary hover:shadow-[0_8px_30px_rgba(243,172,133,0.15)] md:p-[22px] lg:p-[24px]"
                data-anim="fade-up"
                data-delay={String(0.1 + index * 0.08)}
              >
                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[8px] bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground md:h-[52px] md:w-[52px]">
                  <detail.icon size={22} />
                </div>
                <div>
                  <span className="mb-[4px] block text-[11px] font-semibold uppercase tracking-[0.06em] text-foreground/60">
                    {detail.label}
                  </span>
                  <span className="block whitespace-pre-line text-[15px] font-medium leading-[1.35] tracking-[-0.02em] text-foreground transition-colors duration-300 group-hover:text-primary md:text-[17px]">
                    {detail.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="grid gap-[40px] lg:grid-cols-[1.2fr_1fr] lg:gap-[60px] xl:gap-[80px]">
            
            <div
              className="rounded-[12px] bg-card-green p-[20px] md:p-[28px] lg:p-[32px]"
              data-anim="fade-left"
              data-delay="0.2"
            >
              <h3 className="mb-[8px] text-[22px] font-medium leading-[1.15] tracking-[-0.04em] text-white md:text-[26px] md:leading-[1.15] lg:text-[28px]">
                Send us a Message
              </h3>
              <p className="mb-[24px] text-[14px] leading-[1.5] text-white/60">
                Fill in the form and we'll get back to you shortly.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-[16px] md:gap-[18px]"
              >
                <div className="grid gap-[16px] md:grid-cols-2 md:gap-[18px]">
                  <div data-anim="fade-up" data-delay="0.25">
                    <label className="mb-[8px] block text-[12px] font-semibold uppercase tracking-[0.04em] text-white/70">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="h-[48px] w-full rounded-[8px] border border-white/10 bg-white/5 px-[14px] text-[15px] text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-primary focus:bg-white/10 md:h-[52px] md:px-[16px]"
                    />
                  </div>

                  <div data-anim="fade-up" data-delay="0.3">
                    <label className="mb-[8px] block text-[12px] font-semibold uppercase tracking-[0.04em] text-white/70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="h-[48px] w-full rounded-[8px] border border-white/10 bg-white/5 px-[14px] text-[15px] text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-primary focus:bg-white/10 md:h-[52px] md:px-[16px]"
                    />
                  </div>
                </div>

                <div data-anim="fade-up" data-delay="0.35">
                  <label className="mb-[8px] block text-[12px] font-semibold uppercase tracking-[0.04em] text-white/70">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="h-[48px] w-full rounded-[8px] border border-white/10 bg-white/5 px-[14px] text-[15px] text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-primary focus:bg-white/10 md:h-[52px] md:px-[16px]"
                  />
                </div>

                <div data-anim="fade-up" data-delay="0.4">
                  <label className="mb-[8px] block text-[12px] font-semibold uppercase tracking-[0.04em] text-white/70">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="min-h-[120px] w-full resize-y rounded-[8px] border border-white/10 bg-white/5 px-[14px] py-[14px] text-[15px] text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-primary focus:bg-white/10 md:min-h-[140px] md:px-[16px] md:py-[16px]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-[8px] flex h-[50px] w-full cursor-pointer items-center justify-center gap-[8px] rounded-[8px] border border-primary bg-primary text-[15px] font-semibold text-foreground transition-all duration-300 hover:bg-[#FF894D] hover:border-[#FF894D] hover:text-white md:h-[54px] md:text-[16px]"
                  data-anim="fade-up"
                  data-delay="0.45"
                >
                  Send Enquiry
                  <Send size={16} />
                </button>
              </form>
            </div>

            <div data-anim="fade-right" data-delay="0.15">
              <h2 className="mb-[20px] text-[28px] font-medium leading-[1.1] tracking-[-0.05em] text-foreground md:text-[32px] md:leading-[1.1] lg:text-[36px] xl:text-[40px]">
                Get in Touch
              </h2>
               <p className="mb-[28px] text-[15px] leading-[1.6] text-foreground/70 md:text-[16px]">
                 Have a question about our premium residential plots? Reach out
                 and our team will get back to you within 24 hours.
               </p>

<a
                  href="https://maps.app.goo.gl/EArq2vabgPZ4iEoB7"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block w-full overflow-hidden rounded-[12px] border border-foreground/10 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-[0_8px_30px_rgba(243,172,133,0.15)]"
                  data-anim="fade-up"
                  data-delay="0.25"
                  aria-label="View Kalamangala on Google Maps"
                >
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.587221380144!2d77.771436!3d11.2540522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba97b79693c12e7%3A0x99fbcdf4cdd83f5!2sThe+Waterfront+by+Kalamangala!5e0!3m2!1sen!2sin!4v1625641234567!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Kalamangala Location"
                      aria-label="Map showing Kalamangala location"
                    />
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/EArq2vabgPZ4iEoB7"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-sm text-foreground/70 transition-colors duration-300 hover:text-primary"
                >
                  1 Saminathapuram, Muthur Main Road, Modakurichi (via), Erode 638104
                </a>

                <a
                  href="https://www.google.com/maps/dir//The+Waterfront+by+Kalamangala,+1+saminathapuram,+Muthur+Main+Road,+via,+Modakurichi,+Erode,+Tamil+Nadu+638104/@11.2540522,77.7560247,15z"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-[8px] rounded-[8px] border border-foreground/10 bg-background px-[16px] py-[12px] text-[13px] font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  data-anim="fade-up"
                  data-delay="0.3"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>

               <div data-anim="fade-up" data-delay="0.35">
                 <span className="mb-[16px] block text-[13px] font-semibold uppercase tracking-[0.05em] text-foreground/60">
                   Follow Us
                 </span>
                <div className="flex gap-[10px]">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex h-[50px] w-[50px] items-center justify-center rounded-[8px] border border-foreground/10 bg-background text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground md:h-[54px] md:w-[54px]"
                      aria-label={social.label}
                      data-anim="scale-in"
                      data-delay={String(0.3 + index * 0.05)}
                    >
                      <social.icon
                        size={20}
                        className="transition-transform duration-300 group-hover:scale-110 md:size-[22px]"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
