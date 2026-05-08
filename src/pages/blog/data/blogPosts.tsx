import type { ReactNode } from "react";
import blogImg from "@/assets/construction-company/img9.webp";
import img1 from "@/assets/construction-company/img1.webp";
import img2 from "@/assets/construction-company/img2.webp";
import img3 from "@/assets/construction-company/img3.webp";
import img4 from "@/assets/construction-company/img4.webp";
import img6 from "@/assets/construction-company/img6.webp";

/* ─── BlogPost type ─── */
export interface BlogPost {
  id: number;
  title: string;
  overlayContent: ReactNode;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title:
      "Trusted Building Firm in Tiruppur – Delivering Strength, Style, and Reliability",
    overlayContent: (
      <>
        <span className="overlay-bold">Trusted Building</span>{" "}
        <span className="overlay-script">Firm</span>
        <br />
        <span className="overlay-script overlay-script--sm">in</span>{" "}
        <span className="overlay-bold overlay-bold--xl">Tiruppur</span>
        <br />
        <span className="overlay-script overlay-golden">Kalamangala</span>
      </>
    ),
    date: "FEB 25, 2026",
    category: "ARTICLES",
    readTime: "16 MIN READ",
    image: blogImg,
    slug: "trusted-building-firm-in-tiruppur",
  },
  {
    id: 2,
    title:
      "Quality Construction Company in Namakkal – Building Trust with Excellence",
    overlayContent: (
      <>
        <span className="overlay-bold">Quality</span>{" "}
        <span className="overlay-script">Construction</span>
        <br />
        <span className="overlay-script overlay-script--sm">in</span>{" "}
        <span className="overlay-bold overlay-bold--xl">Namakkal</span>
        <br />
        <span className="overlay-script overlay-golden">Kalamangala</span>
      </>
    ),
    date: "FEB 25, 2026",
    category: "ARTICLES",
    readTime: "12 MIN READ",
    image: img1,
    slug: "quality-construction-company-in-namakkal",
  },
  {
    id: 3,
    title:
      "Why Choosing the Top Property and Real Estate Firm in Karur Matters for Smart Investors",
    overlayContent: (
      <>
        <span className="overlay-bold">Top Property</span>
        <br />
        <span className="overlay-script overlay-script--sm">&</span>{" "}
        <span className="overlay-bold overlay-bold--xl">Real Estate</span>
        <br />
        <span className="overlay-script overlay-golden">Karur</span>
      </>
    ),
    date: "FEB 25, 2026",
    category: "ARTICLES",
    readTime: "10 MIN READ",
    image: img2,
    slug: "top-property-real-estate-firm-in-karur",
  },
  {
    id: 4,
    title:
      "From Buying Plots to Building Homes: The Smarter Way to Invest in Erode",
    overlayContent: (
      <>
        <span className="overlay-bold">Buying Plots</span>
        <br />
        <span className="overlay-script">to Building</span>
        <br />
        <span className="overlay-script overlay-golden">Erode</span>
      </>
    ),
    date: "FEB 25, 2026",
    category: "ARTICLES",
    readTime: "9 MIN READ",
    image: img3,
    slug: "buying-plots-building-homes-erode",
  },
  {
    id: 5,
    title:
      "Premium Gated Community Homes in Tamil Nadu: A New Standard of Living",
    overlayContent: (
      <>
        <span className="overlay-bold">Gated Community</span>
        <br />
        <span className="overlay-script overlay-script--sm">Homes in</span>{" "}
        <span className="overlay-bold overlay-bold--xl">Tamil Nadu</span>
        <br />
        <span className="overlay-script overlay-golden">Kalamangala</span>
      </>
    ),
    date: "FEB 25, 2026",
    category: "ARTICLES",
    readTime: "11 MIN READ",
    image: img4,
    slug: "gated-community-homes-tamil-nadu",
  },
  {
    id: 6,
    title:
      "Luxury Residential Layouts in Erode: Top 10 Home Builders You Can Trust",
    overlayContent: (
      <>
        <span className="overlay-bold">Luxury Residential</span>
        <br />
        <span className="overlay-script overlay-script--sm">Layouts in</span>{" "}
        <span className="overlay-bold overlay-bold--xl">Erode</span>
        <br />
        <span className="overlay-script overlay-golden">Kalamangala</span>
      </>
    ),
    date: "FEB 25, 2026",
    category: "ARTICLES",
    readTime: "14 MIN READ",
    image: img6,
    slug: "luxury-residential-layouts-erode",
  },
];
