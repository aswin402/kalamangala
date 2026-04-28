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
        group flex h-[121px] flex-col items-center justify-center gap-[13px]
        rounded-[10px] border border-transparent bg-white/[0.055] text-[#f4efe2]
        no-underline transition-all duration-500
        hover:border-primary hover:bg-white/[0.075]

        max-md:h-[118px]
        max-sm:h-[117px] max-sm:gap-[14px] max-sm:rounded-[8px]
      "
    >
      <span className="text-[#f4efe2] transition-colors duration-500 group-hover:text-primary">
        {children}
      </span>

      <span
        className="
          text-[11px] font-normal uppercase leading-none tracking-[0.04em]
          text-[#f4efe2] transition-colors duration-500 group-hover:text-primary
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
        relative mx-9 my-5 flex min-h-[calc(100vh-40px)]
        flex-col overflow-hidden rounded-[10px] bg-footer text-white

        max-xl:min-h-[720px]
        max-lg:min-h-0
        max-md:mx-4 max-md:my-4
        max-sm:mx-3 max-sm:my-[31px] max-sm:rounded-[8px]
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1220px] pt-[42px]

          max-[1280px]:max-w-[1040px] max-[1280px]:px-7
          max-lg:px-7 max-lg:pt-9
          max-md:px-6
          max-sm:px-3 max-sm:pt-[39px]
        "
      >
        <div
          className="
            grid grid-cols-[585px_420px_145px] items-start gap-x-[62px]

            max-[1280px]:grid-cols-[1fr_360px_120px] max-[1280px]:gap-x-[42px]
            max-xl:grid-cols-[1fr_330px_115px] max-xl:gap-x-[34px]
            max-lg:grid-cols-1 max-lg:gap-y-0
          "
        >
          {/* SOCIAL CARDS - desktop left / mobile after menu */}
          <div
            className="
              order-1 col-start-1 row-start-1 w-full
              max-lg:order-3 max-lg:row-auto
              max-sm:mt-[54px]
            "
          >
            <div className="flex flex-col gap-3 max-sm:gap-[11px]">
              <div className="grid grid-cols-2 gap-3 max-sm:gap-[11px]">
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

              <div className="grid grid-cols-3 gap-3 max-sm:gap-[10px]">
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

          {/* NEWSLETTER - desktop under social / mobile after social */}
          <div
            className="
              order-2 col-start-1 row-start-2 mt-[31px] w-full
              max-lg:order-4 max-lg:row-auto
              max-sm:mt-[29px]
            "
          >
            <p
              className="
                mb-3 text-[22px] font-medium leading-[1.2] text-white
                max-sm:mb-[12px] max-sm:text-[18px]
              "
            >
              Subscribe to the newsletter
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-[11px] max-sm:gap-[10px]"
            >
              <input
                type="email"
                placeholder="Info@Kalamangala.com"
                className="
                  h-[42px] w-full rounded-[9px] border border-white/[0.08]
                  bg-white/[0.055] px-3 text-[16px] text-white outline-none
                  placeholder:text-white/45

                  max-sm:h-[40px] max-sm:rounded-[8px] max-sm:px-[12px]
                  max-sm:text-[16px]
                "
              />

              <button
                type="submit"
                className="
                  h-[42px] w-full cursor-pointer rounded-lg border border-primary
                  bg-primary text-[16px] font-semibold text-foreground
                  transition-all duration-500 ease-out
                  hover:bg-[#ff8952] hover:text-white hover:border-[#ff8952]

                  max-sm:h-[40px] max-sm:rounded-[8px] max-sm:text-[16px]
                "
              >
                Submit
              </button>
            </form>
          </div>

          {/* SERVICES - desktop middle / mobile first */}
          <div
            className="
              order-3 col-start-2 row-start-1 w-full
              max-lg:order-1 max-lg:col-start-auto max-lg:row-auto
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

          {/* MENU - desktop right / mobile second */}
          <div
            className="
              order-4 col-start-3 row-start-1 w-full
              max-lg:order-2 max-lg:col-start-auto max-lg:row-auto max-lg:mt-[44px]
            "
          >
            <span
              className="
                mb-5 block text-[18px] font-medium uppercase tracking-[0.04em] text-primary
                max-sm:mb-[18px] max-sm:text-[17px]
              "
            >
              Menu
            </span>

            <div
              className="
                flex flex-col items-start gap-4
                max-sm:gap-[18px]
              "
            >
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

      {/* BIG FOOTER TITLE */}
      <div
        className="
          mt-auto w-full pb-12 pl-7 pt-[70px]

          max-lg:pt-[80px]
          max-md:pt-[64px]
          max-sm:pb-[55px] max-sm:pl-[12px] max-sm:pt-[55px]
        "
      >
        <h2
          className="
            m-0 select-none whitespace-nowrap text-primary
            text-[clamp(150px,16.2vw,310px)] font-extrabold
            leading-[0.72] tracking-[-0.065em]

            max-lg:text-[clamp(78px,21vw,190px)] max-lg:tracking-[-0.055em]
            max-sm:text-[82px] max-sm:leading-[0.72] max-sm:tracking-[-0.075em]
          "
        >
          Kalamangala
        </h2>
      </div>
    </footer>
  );
};