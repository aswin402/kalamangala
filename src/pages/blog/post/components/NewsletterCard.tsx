/* NewsletterCard — dark green card with email input + social share */
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function NewsletterCard() {
  const [email, setEmail] = useState("");

  return (
    <div className="blog-detail__newsletter">
      {/* Title + input */}
      <div className="blog-detail__newsletter-inner">
        <p className="blog-detail__newsletter-heading">Join our newsletter list</p>
        <p className="blog-detail__newsletter-body">
          Sign up to get the most recent blog articles in
          your email every week.
        </p>
        <div className="blog-detail__newsletter-form">
          <input
            type="email"
            placeholder="ramji@kalamangala.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="blog-detail__newsletter-input"
          />
          <button
            className="blog-detail__newsletter-btn"
            onClick={() => setEmail("")}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Social share */}
      <div className="blog-detail__social">
        <p className="blog-detail__social-label">
          Share this post to the social medias
        </p>
        <div className="blog-detail__social-icons">
          <a
            href="#"
            className="blog-detail__social-icon"
            aria-label="Share on Facebook"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="#"
            className="blog-detail__social-icon"
            aria-label="Share on Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="#"
            className="blog-detail__social-icon"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="#"
            className="blog-detail__social-icon"
            aria-label="Share on Twitter"
          >
            <FaXTwitter size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
