/* ── Typed article content blocks ──────────────────────────────
   Each entry maps to a rendered element in ArticleSection.
   Split into two parts: part1 renders beside the Latest Blogs
   sidebar; part2 renders beside the Newsletter sidebar.
───────────────────────────────────────────────────────────── */

export type BlockType = "h2" | "h2-center" | "h3" | "p" | "ul";

export interface ArticleBlock {
  type: BlockType;
  content: string | string[]; // ul → string[], everything else → string
}

export const ARTICLE_PART_1: ArticleBlock[] = [
  {
    type: "h2-center",
    content: "Why Trust Matters in Construction",
  },
  {
    type: "p",
    content:
      "Building a property involves significant financial investment and emotional commitment. A trusted building firm ensures:",
  },
  {
    type: "ul",
    content: [
      "Clear project planning and execution",
      "Honest cost estimation",
      "High construction standards",
      "Timely project delivery",
      "Proper documentation and approvals",
    ],
  },
  {
    type: "p",
    content:
      "In a fast-growing city like Tiruppur, choosing the right construction partner safeguards your investment and ensures your project is built to last.",
  },
  {
    type: "h2-center",
    content: "Understanding Tiruppur's Growing Construction Demand",
  },
  {
    type: "p",
    content:
      "Tiruppur is widely recognized for its textile industry and rapidly expanding infrastructure. With economic growth comes increased demand for:",
  },
  {
    type: "ul",
    content: [
      "Modern residential homes",
      "Premium gated communities",
      "Commercial buildings",
      "Industrial facilities",
    ],
  },
  {
    type: "p",
    content:
      "As urban development continues, property owners seek professional builders who can provide reliable and future-ready construction solutions. This is where a trusted building firm plays a crucial role.",
  },
  {
    type: "h2",
    content: "Residential Construction Services in Tiruppur",
  },
  {
    type: "p",
    content:
      "Kalamangala offers the full spectrum of residential construction — from modest starter homes to sprawling villa estates. Every project is treated with the same rigour and care, regardless of scale.",
  },
  {
    type: "h3",
    content: "Custom Home Construction",
  },
  {
    type: "p",
    content:
      "Every family is different. Kalamangala's custom home service begins with in-depth conversations about lifestyle, aspirations, and budget — then translates those inputs into a home that feels uniquely yours.",
  },
  {
    type: "h3",
    content: "Villas and Premium Housing",
  },
  {
    type: "p",
    content:
      "For clients seeking luxury, Kalamangala delivers villas with premium finishes, landscaped gardens, private pools, and smart home integration — all built to international quality benchmarks.",
  },
  {
    type: "h3",
    content: "Gated Community Development",
  },
  {
    type: "p",
    content:
      "Kalamangala has deep experience in planned residential layouts with shared amenities, boundary walls, security provisions, and clubhouse facilities — creating communities, not just buildings.",
  },
  {
    type: "h2",
    content: "Commercial and Industrial Construction Expertise",
  },
  {
    type: "p",
    content:
      "Beyond homes, Kalamangala's commercial and industrial division handles projects ranging from small retail outlets to large factory complexes. Their cross-sector experience ensures every structure is purpose-built for its function.",
  },
  {
    type: "h3",
    content: "Office Spaces",
  },
  {
    type: "p",
    content:
      "Modern offices demand flexibility, technology readiness, and aesthetic appeal. Kalamangala designs and builds office spaces that attract talent and project professionalism.",
  },
  {
    type: "h3",
    content: "Retail Outlets",
  },
  {
    type: "p",
    content:
      "High-street visibility, efficient footfall layouts, and durable finishes define Kalamangala's retail construction philosophy.",
  },
  {
    type: "h3",
    content: "Industrial Structures",
  },
  {
    type: "p",
    content:
      "Factories, warehouses, and industrial sheds require strength, precision, and compliance with safety codes. Kalamangala's industrial division delivers on all three fronts.",
  },
  {
    type: "h2-center",
    content: "What Makes Kalamangala a Trusted Building Firm in Tiruppur?",
  },
  {
    type: "p",
    content:
      "The word \"trusted\" is earned — not self-declared. Here is what separates Kalamangala from dozens of local contractors:",
  },
  {
    type: "h3",
    content: "1. Commitment to Quality Standards",
  },
  {
    type: "p",
    content:
      "Materials are sourced from certified suppliers. Mix designs are lab-verified. Every stage of construction passes internal and third-party quality checks before work progresses.",
  },
  {
    type: "h3",
    content: "2. Experienced Engineering Team",
  },
  {
    type: "p",
    content:
      "The Kalamangala team includes structural engineers, architects, MEP specialists, and project managers with a combined track record spanning hundreds of completed projects.",
  },
  {
    type: "h3",
    content: "3. Transparent Communication",
  },
  {
    type: "p",
    content:
      "Clients receive regular progress updates — photographs, milestone reports, and direct access to the project manager. No surprises. No excuses.",
  },
  {
    type: "h3",
    content: "4. Budget-Friendly Planning",
  },
  {
    type: "p",
    content:
      "Kalamangala's value engineering team identifies ways to optimise costs without compromising quality — stretching every rupee without cutting corners.",
  },
  {
    type: "h3",
    content: "5. Timely Project Completion",
  },
  {
    type: "p",
    content:
      "Delays cost money — for both parties. Kalamangala's track record of on-time delivery is a direct result of detailed scheduling, proactive procurement, and disciplined site management.",
  },
  {
    type: "h3",
    content: "6. Legal Compliance",
  },
  {
    type: "p",
    content:
      "All Kalamangala projects are designed and executed in full compliance with DTCP, CMDA, panchayat, and municipal regulations — ensuring clients never face legal risk after handover.",
  },
];

export const ARTICLE_PART_2: ArticleBlock[] = [
  {
    type: "h2-center",
    content: "A Structured Construction Approach",
  },
  {
    type: "p",
    content:
      "Every Kalamangala project follows a proven five-stage process that minimises risk and maximises outcome quality.",
  },
  {
    type: "h3",
    content: "Initial Consultation",
  },
  {
    type: "p",
    content:
      "The journey begins with a free consultation where Kalamangala's team listens to the client's vision, assesses the site, and provides an honest initial assessment of feasibility and cost.",
  },
  {
    type: "h3",
    content: "Design & Planning",
  },
  {
    type: "p",
    content:
      "Architects and engineers collaborate to produce a design that balances aesthetics, function, and structural soundness — then refine it through client review rounds until it's exactly right.",
  },
  {
    type: "h3",
    content: "Approval & Documentation",
  },
  {
    type: "p",
    content:
      "Kalamangala handles all regulatory approvals — building plan sanction, environmental clearances, and utility connections — so clients can focus on their lives, not bureaucracy.",
  },
  {
    type: "h3",
    content: "Construction Execution",
  },
  {
    type: "p",
    content:
      "With approvals in hand, Kalamangala's site team mobilises. Stage gates — foundation, structure, roofing, finishes — are signed off by the client before the next phase begins.",
  },
  {
    type: "h3",
    content: "Final Handover",
  },
  {
    type: "p",
    content:
      "At handover, Kalamangala conducts a thorough snag review with the client, resolves all outstanding items, and hands over drawings, warranties, compliance certificates, and a maintenance guide.",
  },
  {
    type: "h2",
    content: "Emphasis on Structural Strength",
  },
  {
    type: "p",
    content:
      "In a world of cost-cutting and shortcuts, Kalamangala holds firm to structural integrity as a non-negotiable. RCC frame structures are designed to IS codes, steel specifications are independently verified, and concrete mix designs are tested at certified laboratories.",
  },
  {
    type: "h2",
    content: "Modern Design with Functional Efficiency",
  },
  {
    type: "p",
    content:
      "Strength without aesthetics is an incomplete solution. Kalamangala's design team creates spaces that are structurally sound and visually compelling — with optimised floor plans, intelligent natural lighting, and cross-ventilation engineered in from the initial brief.",
  },
  {
    type: "h2",
    content: "Sustainable Construction Practices",
  },
  {
    type: "p",
    content:
      "The construction industry is one of the largest contributors to carbon emissions globally. Kalamangala is committed to reducing its environmental footprint — fly-ash bricks, low-VOC paints, rainwater harvesting provisions, and energy-efficient building systems are standard specification, not optional extras.",
  },
  {
    type: "h2",
    content: "Customer-Focused Philosophy",
  },
  {
    type: "p",
    content:
      "Building a home is one of the most significant decisions a person makes. Kalamangala treats every client relationship as a long-term partnership — with regular site updates, transparent communication, and a dedicated project contact ensuring clients are never left in the dark.",
  },
  {
    type: "h2",
    content: "Long-Term Value for Property Owners",
  },
  {
    type: "p",
    content:
      "A building's true cost includes maintenance, energy bills, and eventual resale value — not just the construction price. Kalamangala engineers buildings for longevity. Durable finishes, quality waterproofing, and robust MEP systems mean lower lifetime costs and higher resale attractiveness.",
  },
  {
    type: "h2",
    content: "Safety Measures During Construction",
  },
  {
    type: "p",
    content:
      "Kalamangala operates strict on-site safety protocols — helmets, harnesses, scaffolding standards, fire prevention, and first-aid readiness are mandated on every site. Zero Lost Time Injuries is the non-negotiable standard.",
  },
  {
    type: "h2",
    content: "Adapting to Future Infrastructure Needs",
  },
  {
    type: "p",
    content:
      "The buildings constructed today must serve well into the 2050s. Kalamangala proactively integrates provisions for solar panels, EV charging, high-speed data conduits, and smart home automation — ensuring structures don't become obsolete as technology evolves.",
  },
  {
    type: "h2",
    content: "Transparent Pricing and Ethical Practices",
  },
  {
    type: "p",
    content:
      "Kalamangala's pricing model is built on transparency. Clients receive a comprehensive BOQ at the tender stage, inclusive of materials, labour, overheads, and margins. Variations are documented and approved before execution — never after.",
  },
  {
    type: "h2-center",
    content: "Why Choose Kalamangala?",
  },
  {
    type: "p",
    content:
      "Trust is earned through consistency. Kalamangala has built its reputation by delivering projects on time, within budget, and to specifications that exceed client expectations — across residential bungalows, commercial showrooms, factory layouts, and mixed-use developments.",
  },
  {
    type: "h2-center",
    content: "Conclusion",
  },
  {
    type: "p",
    content:
      "Tiruppur is growing. Its skyline is changing. At the heart of that change, Kalamangala is building — not just structures, but legacies. If you're looking for a trusted building firm in Tiruppur that delivers strength, style, and reliability, your vision deserves the Kalamangala standard.",
  },
];
