import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { toast } from "@/store/useToastStore";

export function NewsletterCard({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!key) {
      toast.error("Configuration Error", "Web3Forms Access Key is missing in the environment variables.");
      return;
    }

    if (!email) {
      toast.warning("Validation Error", "Please enter your email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: key,
          email,
          subject: "New Newsletter Subscription",
          message: `Please subscribe ${email} to the Kalamangala newsletter.`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Subscribed", "You have successfully subscribed to our newsletter!");
        setEmail("");
      } else {
        toast.error("Subscription Failed", result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("Network Error", "Could not connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`newsletter-card bg-card-green rounded-xl overflow-hidden flex flex-col ${className}`}>
      <div className="p-[30px_26px_0] flex flex-col gap-3.5">
        <p className="font-['Inter',sans-serif] text-[20px] font-extrabold tracking-[-0.03em] text-footer-foreground m-0">
          Join our newsletter list
        </p>
        <p className="font-['Inter',sans-serif] text-[14.5px] leading-[1.6] text-[rgba(244,242,227,0.72)] m-0">
          Sign up to get the most recent blog articles in your email every week.
        </p>
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2.5 mt-2">
          <input
            type="email"
            placeholder="ramji@kalamangala.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-[14px] py-[11px] rounded-lg border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] text-footer-foreground font-['Inter',sans-serif] text-[13px] outline-none focus:border-primary transition-colors placeholder:text-[rgba(244,242,227,0.45)]"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-[22px] py-3 rounded-lg bg-primary text-card-green font-['Inter',sans-serif] text-[13px] font-bold border-none cursor-pointer hover:bg-[#FF894D] hover:text-white transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
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
