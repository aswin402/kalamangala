import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const servicesList = [
  "Top Real Estate Contractors in Tiruchengode",
  "House & Plot Layouts in Karur",
  "Villa & Residential Layouts in Tiruppur",
  "Approved Real Estate Layouts & Plots in Tamil Nadu",
  "real estate construction companies in Erode",
  "luxury layouts in erode",
];

const menuLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/the-waterfront" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

type SocialCardProps = {
  href: string;
  children: React.ReactNode;
  label: string;
  external?: boolean;
};

const SocialCard = ({
  href,
  children,
  label,
  external = false,
}: SocialCardProps) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="
        flex h-[121px] flex-col items-center justify-center gap-[13px]
        rounded-[10px] bg-white/[0.055] text-[#f4efe2]
        no-underline transition-colors duration-200
        hover:bg-white/[0.10]
      "
    >
      {children}

      <span className="text-[11px] font-normal uppercase leading-none tracking-[0.04em] text-[#f4efe2]">
        {label}
      </span>
    </a>
  );
};

export const Footer = () => {
  return (
    <footer
      className="
        relative mx-5 my-[18px] flex min-h-[calc(100vh-40px)]
        flex-col overflow-hidden rounded-[10px] bg-footer text-white
        max-lg:min-h-0
        max-sm:m-2.5 max-sm:rounded-xl
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1220px] pt-[42px]
          max-[1280px]:max-w-[1040px] max-[1280px]:px-7
          max-lg:px-7 max-lg:pt-9
          max-sm:px-[18px] max-sm:pt-7
        "
      >
        <div
          className="
            grid grid-cols-[585px_420px_145px] items-start gap-x-[62px]
            max-[1280px]:grid-cols-[1fr_360px_120px] max-[1280px]:gap-x-[42px]
            max-lg:grid-cols-1 max-lg:gap-y-[42px]
          "
        >
          <div>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <SocialCard
                  href="https://instagram.com"
                  label="Instagram"
                  external
                >
                  <FaInstagram size={29} className="text-[#f4efe2]" />
                </SocialCard>

                <SocialCard
                  href="https://facebook.com"
                  label="Facebook"
                  external
                >
                  <FaFacebookF size={28} className="text-[#f4efe2]" />
                </SocialCard>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <SocialCard href="tel:+91" label="Call">
                  <Phone
                    size={30}
                    fill="#f4efe2"
                    strokeWidth={0}
                    className="text-[#f4efe2]"
                  />
                </SocialCard>

                <SocialCard href="https://youtube.com" label="Youtube" external>
                  <FaYoutube size={30} className="text-[#f4efe2]" />
                </SocialCard>

                <SocialCard
                  href="https://linkedin.com"
                  label="LinkedIn"
                  external
                >
                  <FaLinkedinIn size={29} className="text-[#f4efe2]" />
                </SocialCard>
              </div>
            </div>

            <div className="mt-[31px]">
              <p className="mb-3 text-[22px] font-medium leading-[1.2] text-white">
                Subscribe to the newsletter
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-[11px]"
              >
                <input
                  type="email"
                  placeholder="Info@Kalamangala.com"
                  className="
                    h-[42px] w-full rounded-[9px] border border-white/[0.08]
                    bg-white/[0.055] px-3 text-[16px] text-white outline-none
                    placeholder:text-white/45
                  "
                />

                <button
                  type="submit"
                  className="
                    h-[42px] w-full cursor-pointer rounded-lg border-0
                    bg-primary text-[16px] font-semibold text-foreground
                    transition-opacity duration-200 hover:opacity-90
                  "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-[15px]">
              {servicesList.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className={`
                    text-[16px] font-medium leading-[1.25] no-underline
                    ${
                      index === 1
                        ? "text-primary"
                        : index === 0
                          ? "font-semibold text-white"
                          : "text-white"
                    }
                  `}
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-5 block text-[18px] font-medium uppercase tracking-[0.04em] text-primary">
              Menu
            </span>

            <div className="flex flex-col gap-4">
              {menuLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`
                    text-[16px] font-medium leading-none no-underline
                    ${index === 0 ? "text-primary" : "text-white"}
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="
          mt-auto w-full pb-12 pl-7
          max-sm:pb-6 max-sm:pl-3.5
        "
      >
        <h2
          className="
            m-0 select-none whitespace-nowrap text-primary
            text-[clamp(150px,16.2vw,310px)] font-extrabold
            leading-[0.72] tracking-[-0.065em]
            max-lg:text-[clamp(78px,21vw,190px)] max-lg:tracking-[-0.055em]
            max-sm:text-[clamp(58px,22vw,120px)]
          "
        >
          Kalamangala
        </h2>
      </div>
    </footer>
  );
};