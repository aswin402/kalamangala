import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BlogCard } from "../components/BlogCard";
import { BLOG_POSTS } from "../data/blogPosts";
import "./blog-post.css";

/* ─────────────────────────── helpers ─────────────────────────── */
function formatDate(raw: string) {
  return raw; // already formatted like "FEB 25, 2026"
}

/* ─────────────────────────── TOC ─────────────────────────── */
interface TocItem {
  id: string;
  label: string;
  level: number;
}

const TOC: TocItem[] = [
  { id: "why-tiruppur", label: "Why Tiruppur in Construction", level: 1 },
  { id: "understanding-demand", label: "Understanding Tiruppur's Growing Demand", level: 1 },
  { id: "sustained-conditions", label: "Sustained Construction Conditions", level: 1 },
  { id: "cornerstone-finds", label: "Cornerstone Finds the Best Standing Expertise", level: 1 },
  { id: "what-makes-kalamangala", label: "What Makes Kalamangala a Trusted Building Firm?", level: 1 },
  { id: "documented-approach", label: "A Documented Construction Approach", level: 1 },
  { id: "emphasis-on-strength", label: "Emphasis on Structure and Strength", level: 1 },
  { id: "modern-design", label: "Modern Design with Functional Efficiency", level: 1 },
  { id: "sustainable-practices", label: "Sustainable Construction Practices", level: 1 },
  { id: "customer-philosophy", label: "Customer-Focused Philosophy", level: 1 },
  { id: "long-term-value", label: "Long-Term Value for Property Owners", level: 1 },
  { id: "billing-transparency", label: "Billing Transparency During Construction", level: 1 },
  { id: "adapting-infrastructure", label: "Adapting Future-ready Infrastructure", level: 1 },
  { id: "transparent-pricing", label: "Transparent Pricing with Full-detail Provision", level: 1 },
  { id: "why-choose", label: "Why Choose Kalamangala?", level: 1 },
  { id: "conclusion", label: "Grand Idea", level: 1 },
];

/* ─────────────────────────── component ─────────────────────────── */
export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug) ?? BLOG_POSTS[0];
  const recentPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  const [activeId, setActiveId] = useState<string>(TOC[0].id);
  const contentRef = useRef<HTMLDivElement>(null);

  /* Intersection observer for active TOC highlight */
  useEffect(() => {
    const headings = contentRef.current?.querySelectorAll<HTMLElement>("h2[id], h3[id]");
    if (!headings?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="blog-post-page">
      {/* ── HERO ── */}
      <div className="blog-post__hero">
        <img
          src={post.image}
          alt={post.title}
          className="blog-post__hero-img"
          loading="eager"
        />
        <div className="blog-post__hero-overlay" />
        <div className="blog-post__hero-content">
          <SectionLabel className="font-semibold text-white/80">Articles</SectionLabel>
          <h1 className="blog-post__hero-title">{post.title}</h1>
          <div className="blog-post__hero-meta">
            <span>{formatDate(post.date)}</span>
            <span className="blog-post__hero-dot" />
            <span>{post.category}</span>
            <span className="blog-post__hero-dot" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="blog-post__body">
        {/* ── SIDEBAR ── */}
        <aside className="blog-post__sidebar">
          <div className="blog-post__toc-card">
            <p className="blog-post__toc-heading">Table of Contents</p>
            <nav>
              <ul className="blog-post__toc-list">
                {TOC.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`blog-post__toc-item${activeId === item.id ? " blog-post__toc-item--active" : ""}`}
                      onClick={() => scrollTo(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* ── ARTICLE CONTENT ── */}
        <article className="blog-post__article" ref={contentRef}>
          {/* Intro */}
          <p className="blog-post__intro">
            Tiruppur has long been known as the "Knitwear Capital of India," a city driven by
            textile exports and industrial energy. But over the past decade, a quieter revolution
            has been unfolding — one of brick, mortar, and concrete. Kalamangala, a trusted
            building firm in Tiruppur, stands at the forefront of this transformation, delivering
            construction services that blend strength, style, and reliability.
          </p>

          {/* Section 1 */}
          <h2 id="why-tiruppur">Why Tiruppur in Construction</h2>
          <p>
            Tiruppur's economy has diversified significantly. With rising industrialists, NRI
            investments, and a growing middle class seeking residential and commercial spaces,
            construction demand has surged. Local builders who once focused on small-scale work
            are now handling multi-floor residences, commercial complexes, and integrated
            townships. Kalamangala recognized this shift early and positioned itself to serve
            this evolving market with uncompromising quality.
          </p>

          {/* Inline image block */}
          <div className="blog-post__image-pair">
            <img src={post.image} alt="Tiruppur construction site" className="blog-post__inline-img" />
            <img src={post.image} alt="Kalamangala project" className="blog-post__inline-img" />
          </div>

          {/* Section 2 */}
          <h2 id="understanding-demand">Understanding Tiruppur's Growing Construction Demand</h2>
          <p>
            The city's real estate sector is witnessing unprecedented growth. Industrial expansion
            has triggered worker housing needs. Returning expatriates are building dream homes.
            Entrepreneurs need purpose-built commercial spaces. Kalamangala has studied these
            demand patterns deeply and offers construction solutions tailored to each segment.
          </p>

          {/* Section 3 */}
          <h2 id="sustained-conditions">Sustained Construction Conditions in Tiruppur</h2>
          <p>
            Construction in Tiruppur comes with its own set of environmental and logistical
            realities. The semi-arid climate demands specific material choices. The soil conditions
            in certain zones require engineered foundations. Water availability, labour supply, and
            municipal compliance are ongoing considerations. Kalamangala's experience operating
            within these conditions means fewer surprises and smoother project delivery.
          </p>

          {/* Bullet sub-section */}
          <h3 id="sustained-conditions-sub">What this means in practice:</h3>
          <ul>
            <li>Heat-resistant roofing and wall systems</li>
            <li>Waterproofing protocols suited to local monsoon patterns</li>
            <li>Foundation engineering based on geo-technical surveys</li>
            <li>Locally sourced materials that reduce transport costs and delays</li>
          </ul>

          {/* Section 4 */}
          <h2 id="cornerstone-finds">
            Cornerstone Finds the Best Standing Expertise
          </h2>
          <p>
            What separates a good construction firm from a great one? In Kalamangala's view,
            it is the depth of institutional knowledge — the ability to anticipate challenges
            before they occur, to make decisions that hold up not just today but two decades
            from now. Their team of engineers, architects, and project managers brings
            a combined experience of over 150 years to every project.
          </p>

          {/* Section 5 */}
          <h2 id="what-makes-kalamangala">
            What Makes Kalamangala a Trusted Building Firm in Tiruppur?
          </h2>
          <p>
            Trust is earned through consistency. Kalamangala has built its reputation by
            delivering projects on time, within budget, and to specifications that exceed
            client expectations. Their portfolio spans residential bungalows, commercial
            showrooms, factory layouts, and mixed-use developments — each bearing the
            hallmark of precision craftsmanship.
          </p>
          <ul>
            <li>Project management with real-time tracking</li>
            <li>Use of top-of-the-line building data</li>
            <li>Structural guarantees backed by engineering certification</li>
            <li>Post-completion support for minor repairs and maintenance</li>
          </ul>

          {/* Section 6 */}
          <h2 id="documented-approach">A Documented Construction Approach</h2>
          <p>
            Every Kalamangala project begins with meticulous documentation. Site surveys, soil
            reports, structural drawings, MEP layouts, and a phased construction schedule are
            prepared before a single brick is laid. This document-first approach ensures that
            all stakeholders — clients, contractors, and regulatory authorities — are aligned
            from day one.
          </p>
          <h3>What this includes:</h3>
          <ul>
            <li>Pre-construction planning</li>
            <li>Clear milestones</li>
            <li>Fine Process</li>
          </ul>

          {/* Section 7 */}
          <h2 id="emphasis-on-strength">Emphasis on Structure and Strength</h2>
          <p>
            In a world of cost-cutting and shortcuts, Kalamangala holds firm to structural
            integrity as a non-negotiable. Their RCC frame structures are designed to IS codes,
            with steel specifications verified independently. Concrete mix designs are tested
            at certified laboratories. Every column, beam, and slab is poured with purpose.
          </p>

          {/* Full-width inline image */}
          <div className="blog-post__image-full">
            <img
              src={post.image}
              alt="Construction in progress"
              className="blog-post__inline-img blog-post__inline-img--wide"
            />
          </div>

          {/* Section 8 */}
          <h2 id="modern-design">Modern Design with Functional Efficiency</h2>
          <p>
            Strength without aesthetics is an incomplete solution. Kalamangala's design team
            collaborates with clients to create spaces that are not just structurally sound
            but also visually compelling. Contemporary elevations, optimised floor plans,
            intelligent natural lighting, and cross-ventilation are engineered into every
            project from the initial brief.
          </p>

          {/* Section 9 */}
          <h2 id="sustainable-practices">Sustainable Construction Practices</h2>
          <p>
            The construction industry is one of the largest contributors to carbon emissions
            globally. Kalamangala is committed to reducing its environmental footprint by
            adopting sustainable practices — from using fly-ash bricks to specifying
            low-VOC paints and energy-efficient building systems.
          </p>

          {/* Section 10 */}
          <h2 id="customer-philosophy">Customer-Focused Philosophy</h2>
          <p>
            Building a home or commercial space is one of the most significant financial
            decisions a person makes. Kalamangala treats every client relationship as a
            long-term partnership. Regular site updates, transparent communication, and a
            dedicated point of contact for each project ensure that clients are never left
            in the dark.
          </p>

          {/* Section 11 */}
          <h2 id="long-term-value">Long-Term Value for Property Owners</h2>
          <p>
            A building's true cost is not just its construction price — it includes
            maintenance, energy bills, and eventual resale value. Kalamangala engineers
            buildings for longevity. Durable finishes, quality waterproofing, and robust
            electrical and plumbing systems mean lower lifetime costs and higher resale
            attractiveness.
          </p>

          {/* Section 12 */}
          <h2 id="billing-transparency">Billing Transparency During Construction</h2>
          <p>
            One of the most common grievances clients have with construction firms is the
            surprise invoice — costs that balloon beyond the original quote. Kalamangala
            tackles this head-on with detailed BOQ (Bill of Quantities) documents, stage-wise
            billing tied to verified milestones, and no hidden charges.
          </p>

          {/* Section 13 */}
          <h2 id="adapting-infrastructure">Adapting Future-ready Infrastructure</h2>
          <p>
            The buildings we construct today must serve us well into the 2050s and beyond.
            Kalamangala proactively builds in provisions for solar panel installation, EV
            charging infrastructure, high-speed data conduits, and smart home automation —
            ensuring that structures don't become obsolete as technology evolves.
          </p>

          {/* Section 14 */}
          <h2 id="transparent-pricing">Transparent Pricing with Full-detail Provision</h2>
          <p>
            Kalamangala's pricing model is built on transparency. Clients receive a
            comprehensive cost breakdown at the tender stage, inclusive of materials,
            labour, overheads, and contractor margins. Variations, if any, are documented
            and approved before execution — never after.
          </p>

          {/* Section 15 */}
          <h2 id="why-choose">Why Choose Kalamangala?</h2>
          <p>
            The decision to hire a construction firm is ultimately one of trust. In a
            market full of options, Kalamangala differentiates itself through a proven track
            record, an experienced team, a commitment to quality, and a client-centric
            approach that treats your project as seriously as you do.
          </p>

          {/* Section 16 */}
          <h2 id="conclusion">Grand Idea</h2>
          <p>
            Tiruppur is growing. Its skyline is changing. And at the heart of that change,
            Kalamangala is building — not just structures, but legacies. If you're looking
            for a trusted building firm in Tiruppur that delivers strength, style, and
            reliability, look no further. Your vision deserves the Kalamangala standard.
          </p>

          {/* Tags */}
          <div className="blog-post__tags">
            {[post.date, post.category, post.readTime, "TIRUPPUR", "CONSTRUCTION"].map((tag) => (
              <span key={tag} className="blog-card__tag">{tag}</span>
            ))}
          </div>
        </article>
      </div>

      {/* ── RECENT BLOGS ── */}
      {recentPosts.length > 0 && (
        <section className="blog-post__recent">
          <div className="blog-post__recent-inner">
            <div className="blog-post__recent-header">
              <SectionLabel className="font-semibold">More to Read</SectionLabel>
              <h2 className="blog-post__recent-title">Recent Blogs</h2>
            </div>
            <div className="blog-post__recent-grid">
              {recentPosts.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BACK LINK ── */}
      <div className="blog-post__back-wrap">
        <Link to="/blog" className="blog-post__back-link">
          ← Back to all blogs
        </Link>
      </div>
    </div>
  );
}
