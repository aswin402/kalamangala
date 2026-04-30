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

const footerLinkAnimation =
  "relative inline-block w-fit no-underline transition-colors delay-300 duration-500 " +
  "after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-primary " +
  "after:transition-all after:duration-300 hover:text-primary hover:after:w-full";

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
        group flex h-[160px] flex-col items-center justify-center gap-[13px]
        rounded-[9px] border border-transparent bg-white/[0.055] text-white-text
        no-underline transition-all duration-500
        hover:border-primary hover:bg-white/[0.075]

        max-md:h-[160px]
        max-sm:h-[117px] max-sm:gap-[14px] max-sm:rounded-[8px]
      "
    >
      <span className="text-white-text transition-colors duration-500 group-hover:text-primary">
        {children}
      </span>

      <span
        className="
          text-[11px] font-normal uppercase leading-none tracking-[0.04em]
          text-white-text transition-colors duration-500 group-hover:text-primary
          max-sm:text-[11px]
        "
      >
        {label}
      </span>
    </a>
  );
};

export const Footer = () => {
  return (
    <footer
      className="
        relative mx-[39px] my-[15px] flex min-h-[690px]
        flex-col overflow-hidden rounded-[10px] bg-footer text-white

        max-xl:mx-9 max-xl:my-5 max-xl:min-h-[690px]
        max-lg:min-h-0
        max-md:mx-4 max-md:my-4
        max-sm:mx-3 max-sm:my-[31px] max-sm:rounded-[8px]
      "
    >
      <div
        className="
          w-full px-[30px] pt-[39px]

          max-xl:px-[30px]
          max-lg:px-7 max-lg:pt-9
          max-md:px-6
          max-sm:px-3 max-sm:pt-[39px]
        "
      >
        <div
          className="
            grid w-full grid-cols-[535px_minmax(360px,1fr)_100px]
            items-start gap-x-[83px]

            max-[1180px]:grid-cols-[535px_minmax(320px,1fr)_95px]
            max-[1180px]:gap-x-[55px]

            max-xl:grid-cols-[535px_minmax(300px,1fr)_90px]
            max-xl:gap-x-[45px]

            max-lg:grid-cols-1 max-lg:gap-y-0
          "
        >
          <div
            className="
              order-1 col-start-1 row-start-1 w-full
              max-lg:order-3 max-lg:row-auto
              max-sm:mt-[54px]
            "
          >
            <div className="flex flex-col gap-[11px] max-sm:gap-[11px]">
              <div className="grid grid-cols-2 gap-[11px] max-sm:gap-[11px]">
                <SocialCard
                  href="https://instagram.com"
                  label="Instagram"
                  external
                >
                  <FaInstagram
                    size={29}
                    className="text-current transition-colors duration-500 max-sm:size-[30px]"
                  />
                </SocialCard>

                <SocialCard
                  href="https://facebook.com"
                  label="Facebook"
                  external
                >
                  <FaFacebookF
                    size={28}
                    className="text-current transition-colors duration-500 max-sm:size-[30px]"
                  />
                </SocialCard>
              </div>

              <div className="grid grid-cols-3 gap-[13px] max-sm:gap-[10px]">
                <SocialCard href="tel:+91" label="Call">
                  <Phone
                    size={30}
                    fill="currentColor"
                    strokeWidth={0}
                    className="text-current transition-colors duration-500 max-sm:size-[31px]"
                  />
                </SocialCard>

                <SocialCard href="https://youtube.com" label="Youtube" external>
                  <FaYoutube
                    size={30}
                    className="text-current transition-colors duration-500 max-sm:size-[31px]"
                  />
                </SocialCard>

                <SocialCard
                  href="https://linkedin.com"
                  label="LinkedIn"
                  external
                >
                  <FaLinkedinIn
                    size={29}
                    className="text-current transition-colors duration-500 max-sm:size-[30px]"
                  />
                </SocialCard>
              </div>
            </div>
          </div>

          <div
            className="
              order-2 col-start-1 row-start-2 mt-[31px] w-full
              max-lg:order-4 max-lg:row-auto
              max-sm:mt-[29px]
            "
          >
            <p
              className="
                mb-[11px] text-[22px] font-medium leading-[1.2] text-white
                max-sm:mb-[12px] max-sm:text-[18px]
              "
            >
              Subscribe to the newsletter
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-[10px] max-sm:gap-[10px]"
            >
              <input
                type="email"
                placeholder="Info@Kalamangala.com"
                className="
                  h-[41px] w-full rounded-[8px] border border-white/[0.08]
                  bg-white/[0.055] px-[12px] text-[16px] text-white outline-none
                  placeholder:text-white/45

                  max-sm:h-[40px] max-sm:rounded-[8px] max-sm:px-[12px]
                  max-sm:text-[16px]
                "
              />

              <button
                type="submit"
                className="
                  h-[40px] w-full cursor-pointer rounded-[8px] border border-primary
                  bg-primary text-[16px] font-semibold text-foreground
                  transition-all duration-500 ease-out
                  hover:border-primary hover:bg-primary hover:text-white

                  max-sm:h-[40px] max-sm:rounded-[8px] max-sm:text-[16px]
                "
              >
                Submit
              </button>
            </form>
          </div>

          <div
            className="
              order-3 col-start-2 row-start-1 w-full pt-[2px]
              max-lg:order-1 max-lg:col-start-auto max-lg:row-auto max-lg:pt-0
            "
          >
            <div className="flex flex-col items-start gap-[15px] max-sm:gap-[18px]">
              {servicesList.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className={`
                    ${footerLinkAnimation}
                    text-[16px] font-medium leading-[1.25]
                    max-sm:text-[16px]
                    ${
                      index === 2
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

          <div
            className="
              order-4 col-start-3 row-start-1 w-full pt-[2px]
              max-lg:order-2 max-lg:col-start-auto max-lg:row-auto max-lg:mt-[44px] max-lg:pt-0
            "
          >
            <span
              className="
                mb-[20px] block text-[18px] font-extrabold uppercase tracking-[0.04em] text-white
                max-sm:mb-[18px] max-sm:text-[17px]
              "
            >
              Menu
            </span>

            <div className="flex flex-col items-start gap-[17px] max-sm:gap-[18px]">
              {menuLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`
                    ${footerLinkAnimation}
                    text-[16px] font-medium leading-none
                    max-sm:text-[16px]
                    ${link.name === "About" ? "text-primary" : "text-white"}
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
          w-full overflow-hidden
          pl-[18px] pt-[54px] pb-[24px]

          max-lg:pt-[56px]
          max-md:pt-[45px]
          max-sm:pl-[12px] max-sm:pt-[40px] max-sm:pb-[28px]
        "
      >
        <h2
          className="
            mb-20 select-none whitespace-nowrap text-primary
            text-[clamp(132px,15.6vw,235px)] font-extrabold
            leading-[0.78] tracking-[-0.065em]

            max-lg:text-[clamp(78px,21vw,190px)] max-lg:tracking-[-0.055em]
            max-sm:text-[64px] max-sm:leading-[0.72] max-sm:tracking-[-0.075em] max-sm:mb-8
          "
        >
          Kalamangala
        </h2>
      </div>
    </footer>
  );
};