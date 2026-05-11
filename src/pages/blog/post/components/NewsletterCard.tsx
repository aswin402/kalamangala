import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function NewsletterCard() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-card-green rounded-xl overflow-hidden flex flex-col sticky top-[120px]">
      <div className="p-[30px_26px_0] flex flex-col gap-3.5">
        <p className="font-['Inter',sans-serif] text-[20px] font-extrabold tracking-[-0.03em] text-footer-foreground m-0">
          Join our newsletter list
        </p>
        <p className="font-['Inter',sans-serif] text-[14.5px] leading-[1.6] text-[rgba(244,242,227,0.72)] m-0">
          Sign up to get the most recent blog articles in your email every week.
        </p>
        <div className="flex flex-col gap-2.5 mt-2">
          <input
            type="email"
            placeholder="ramji@kalamangala.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-[14px] py-[11px] rounded-lg border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] text-footer-foreground font-['Inter',sans-serif] text-[13px] outline-none focus:border-primary transition-colors placeholder:text-[rgba(244,242,227,0.45)]"
          />
          <button
            className="w-full px-[22px] py-3 rounded-lg bg-primary text-card-green font-['Inter',sans-serif] text-[13px] font-bold border-none cursor-pointer  hover:bg-[#FF894D] hover:text-white transition-opacity"
            onClick={() => setEmail("")}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="p-[50px_26px_30px] flex flex-col gap-3.5">
        <p className="font-['Inter',sans-serif] text-[11.5px] font-normal text-[rgba(244,242,227,0.72)] m-0">
          Share this post to the social medias
        </p>
        <div className="flex justify-between items-center bg-[rgba(255,255,255,0.10)] rounded-lg p-[16px_22px]">
          <a href="#" className="text-white no-underline hover:text-primary transition-opacity" aria-label="Share on Facebook">
            <FaFacebook size={18} />
          </a>
          <a href="#" className="text-white no-underline hover:text-primary transition-opacity" aria-label="Share on Instagram">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="text-white no-underline hover:text-primary transition-opacity" aria-label="Share on LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href="#" className="text-white no-underline hover:text-primary transition-opacity" aria-label="Share on Twitter">
            <FaXTwitter size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
