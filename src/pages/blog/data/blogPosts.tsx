import type { ReactNode } from "react";
import blogImg from "@/assets/construction-company/img9.webp";

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
];
