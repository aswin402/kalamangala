import { Skeleton } from "@/components/ui/Skeleton";

/* ─────────────────────────────────────────────────
   Shared wrapper — centers the skeleton within
   the viewport matching the RootLayout's <main>.
   ───────────────────────────────────────────────── */
function SkeletonShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {children}
    </div>
  );
}

/* ── Reusable blocks ── */

/** Marquee-style hero bar skeleton (used by many pages) */
function MarqueeHeroSkeleton({
  panelClassName = "h-[250px] sm:h-[300px] md:h-[340px] lg:h-[384px]",
}: {
  panelClassName?: string;
}) {
  return (
    <section className="relative">
      <div className={`relative z-[1] w-full overflow-visible ${panelClassName}`}>
        <div className="pt-[115px] sm:pt-[120px] md:pt-[130px] lg:pt-[140px] px-4">
          <Skeleton className="w-full h-[40px] sm:h-[48px] md:h-[56px] lg:h-[64px] rounded-lg" />
        </div>
      </div>
    </section>
  );
}

/** ScrollHero-style skeleton: marquee title + image panel */
function ScrollHeroSkeleton() {
  return (
    <>
      <section className="relative">
        <div className="relative z-[1] w-full overflow-visible h-[260px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[420px]">
          <div className="pt-[115px] sm:pt-[120px] md:pt-[130px] lg:pt-[140px] px-4">
            <Skeleton className="w-full h-[40px] sm:h-[48px] md:h-[56px] lg:h-[64px] rounded-lg" />
          </div>
        </div>
      </section>
      <div className="relative z-[2] px-[13px] sm:px-4 md:px-8 lg:px-[38px]">
        <Skeleton
          className="
            mx-auto max-w-[1600px] w-full
            h-[300px] rounded-[8px]
            sm:h-[380px] sm:rounded-[12px]
            md:h-[455px] md:rounded-[18px]
            lg:h-[520px] lg:rounded-[22px]
          "
        />
      </div>
    </>
  );
}

/** Section heading skeleton: label + title */
function SectionHeadingSkeleton() {
  return (
    <div className="mb-6 md:mb-8">
      <Skeleton className="w-24 h-3 rounded-full mb-2" />
      <Skeleton className="w-64 sm:w-80 h-7 sm:h-8 rounded-lg" />
    </div>
  );
}

/** Content block skeleton: paragraph lines */
function ContentBlockSkeleton({ lines = 4 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 rounded-md ${i === lines - 1 ? "w-3/5" : "w-full"}`}
        />
      ))}
    </div>
  );
}

/** Card grid skeleton */
function CardGridSkeleton({
  count = 3,
  cols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}: {
  count?: number;
  cols?: string;
}) {
  return (
    <div className={`grid gap-4 md:gap-5 ${cols}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-3">
          <Skeleton className="w-full aspect-[4/3] rounded-xl" />
          <Skeleton className="w-3/4 h-5 rounded-md" />
          <Skeleton className="w-1/2 h-4 rounded-md" />
        </div>
      ))}
    </div>
  );
}

/* ═════════════════════════════════════════════════
   PAGE SKELETONS
   ═════════════════════════════════════════════════ */

/** Home page: Hero text + video block + about section + projects grid */
export function HomePageSkeleton() {
  return (
    <SkeletonShell>
      {/* Hero title area */}
      <section className="relative">
        <div
          className="
            relative z-[1] w-full overflow-visible
            h-[345px] sm:h-[430px] md:h-[560px]
            lg:h-[645px] xl:h-[690px]
          "
        >
          <div
            className="
              absolute z-10 max-w-[900px] pb-10 px-10
              left-[24px] top-[92px]
              sm:left-[46px] sm:top-[130px]
              md:left-[80px] md:top-[170px]
              lg:left-[120px] lg:top-[195px]
            "
          >
            <Skeleton className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-[40px] sm:h-[46px] md:h-[54px] lg:h-[62px] rounded-lg" />
            <Skeleton className="mt-[40px] w-[280px] sm:w-[360px] md:w-[460px] lg:w-[560px] h-[52px] sm:h-[62px] md:h-[78px] lg:h-[100px] rounded-lg" />
          </div>
        </div>
      </section>

      {/* Video area */}
      <div className="relative z-[2] px-[12px] sm:px-[20px] md:px-[28px] lg:px-[38px]">
        <Skeleton
          className="
            w-full overflow-hidden
            h-[300px] rounded-[18px]
            sm:h-[440px] sm:rounded-[22px]
            md:h-[560px] md:rounded-[26px]
            lg:h-[720px] lg:rounded-[30px]
          "
        />
      </div>

      {/* About section placeholder */}
      <div className="mx-auto max-w-[1380px] px-[30px] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-4">
            <SectionHeadingSkeleton />
            <ContentBlockSkeleton lines={5} />
          </div>
          <Skeleton className="w-full h-[300px] md:h-[400px] rounded-2xl" />
        </div>
      </div>

      {/* Projects section placeholder */}
      <div className="mx-auto max-w-[1380px] px-[30px] pb-16">
        <SectionHeadingSkeleton />
        <CardGridSkeleton count={3} />
      </div>
    </SkeletonShell>
  );
}

/** About page: Marquee bar + dark section + timeline */
export function AboutPageSkeleton() {
  return (
    <SkeletonShell>
      <MarqueeHeroSkeleton />

      {/* Dark section */}
      <section className="bg-foreground py-16 md:py-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1380px] grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Skeleton className="w-32 h-3 rounded-full bg-muted-foreground/20" />
            <Skeleton className="w-72 h-8 rounded-lg bg-muted-foreground/20" />
            <div className="space-y-3 mt-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className={`h-4 rounded-md bg-muted-foreground/20 ${i === 3 ? "w-2/3" : "w-full"}`}
                />
              ))}
            </div>
          </div>
          <Skeleton className="w-full h-[300px] md:h-[380px] rounded-2xl bg-muted-foreground/20" />
        </div>
      </section>

      {/* Journey / timeline section */}
      <div className="mx-auto max-w-[1380px] px-[30px] py-16 md:py-24">
        <SectionHeadingSkeleton />
        <div className="space-y-8 mt-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-6 items-start">
              <Skeleton className="w-16 h-16 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-3">
                <Skeleton className="w-32 h-5 rounded-md" />
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-4/5 h-4 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SkeletonShell>
  );
}

/** Contact page: Marquee bar */
export function ContactPageSkeleton() {
  return (
    <SkeletonShell>
      <MarqueeHeroSkeleton />
    </SkeletonShell>
  );
}

/** Project pages (Waterfront, Amenities, Construction, Premium Plots):
 *  ScrollHero + intro text + feature sections */
export function ProjectPageSkeleton() {
  return (
    <SkeletonShell>
      <ScrollHeroSkeleton />

      {/* Intro section */}
      <div className="mx-auto max-w-[1380px] px-[30px] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-4">
            <SectionHeadingSkeleton />
            <ContentBlockSkeleton lines={5} />
          </div>
          <Skeleton className="w-full h-[280px] md:h-[360px] rounded-2xl" />
        </div>
      </div>

      {/* Feature rows */}
      <div className="mx-auto max-w-[1380px] px-[30px] pb-16">
        <SectionHeadingSkeleton />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <Skeleton className="w-full h-[200px] rounded-xl" />
              <Skeleton className="w-2/3 h-5 rounded-md" />
              <Skeleton className="w-full h-4 rounded-md" />
              <Skeleton className="w-4/5 h-4 rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-[1380px] px-[30px] pb-16">
        <Skeleton className="w-full h-[200px] md:h-[260px] rounded-2xl" />
      </div>
    </SkeletonShell>
  );
}

/** Waterfront page: logo header + hero image + grid sections */
export function WaterfrontPageSkeleton() {
  return (
    <SkeletonShell>
      {/* Logo header */}
      <section
        className="
          relative flex w-full items-start justify-center overflow-hidden
          min-h-[42vh] px-0 pt-[70px] pb-[34px]
          sm:min-h-[92vh] sm:items-center sm:px-4 sm:pb-0 sm:pt-6
        "
      >
        <Skeleton
          className="
            w-[98vw] max-w-none aspect-[4/1] rounded-xl
            sm:w-[86vw] sm:max-w-[900px]
            md:w-[78vw] md:max-w-[1150px]
            lg:w-[74vw] lg:max-w-[1450px]
          "
        />
      </section>

      {/* Hero image */}
      <div className="px-[13px] sm:px-4 md:px-8 lg:px-[38px]">
        <Skeleton
          className="
            mx-auto max-w-[1600px] w-full
            h-[300px] rounded-[8px]
            sm:h-[400px] sm:rounded-[12px]
            md:h-[500px] md:rounded-[18px]
            lg:h-[600px] lg:rounded-[22px]
          "
        />
      </div>

      {/* Map + description */}
      <div className="mx-auto max-w-[1380px] px-[30px] py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <Skeleton className="w-full h-[300px] md:h-[400px] rounded-2xl" />
          <div className="space-y-4">
            <SectionHeadingSkeleton />
            <ContentBlockSkeleton lines={6} />
          </div>
        </div>
      </div>

      {/* Showcase grid */}
      <div className="mx-auto max-w-[1380px] px-[30px] pb-16">
        <CardGridSkeleton count={4} cols="grid-cols-1 sm:grid-cols-2" />
      </div>
    </SkeletonShell>
  );
}

/** Location Advantage page: ScrollHero + welcome + landmarks grid */
export function LocationPageSkeleton() {
  return (
    <SkeletonShell>
      <ScrollHeroSkeleton />

      {/* Welcome section */}
      <div className="mx-auto max-w-[1380px] px-[30px] py-16 md:py-24">
        <SectionHeadingSkeleton />
        <ContentBlockSkeleton lines={4} />
      </div>

      {/* Landmarks grid */}
      <div className="mx-auto max-w-[1380px] px-[30px] pb-16">
        <SectionHeadingSkeleton />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex gap-4 items-center p-4 rounded-xl">
              <Skeleton className="w-14 h-14 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="w-32 h-5 rounded-md" />
                <Skeleton className="w-20 h-4 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connectivity */}
      <div className="mx-auto max-w-[1380px] px-[30px] pb-16">
        <SectionHeadingSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Skeleton className="w-full h-[200px] rounded-xl" />
          <Skeleton className="w-full h-[200px] rounded-xl" />
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-[1380px] px-[30px] pb-16">
        <Skeleton className="w-full h-[200px] md:h-[260px] rounded-2xl" />
      </div>
    </SkeletonShell>
  );
}

/** Blog listing page: Marquee bar + heading + card grid */
export function BlogPageSkeleton() {
  return (
    <SkeletonShell>
      <MarqueeHeroSkeleton />

      <section className="relative z-[3] pt-[40px] pb-[72px] md:pt-[52px] md:pb-[100px]">
        <div className="mx-auto w-full max-w-[1720px] px-[16px] sm:px-[20px] md:px-[28px] lg:px-[44px]">
          <SectionHeadingSkeleton />
          <CardGridSkeleton count={6} />
        </div>
      </section>
    </SkeletonShell>
  );
}

/** Blog post detail page: Intro + article + sidebar */
export function BlogPostPageSkeleton() {
  return (
    <SkeletonShell>
      <section
        className="mx-auto px-[clamp(20px,4vw,64px)] pt-[clamp(48px,7vw,88px)] pb-[clamp(32px,4vw,56px)]"
        style={{ maxWidth: "1800px" }}
      >
        <div className="grid grid-cols-1 gap-10 items-start sm:grid-cols-2 sm:gap-[clamp(32px,3.5vw,60px)] lg:grid-cols-[1.15fr_1fr] lg:gap-[clamp(48px,4vw,72px)]">
          <div className="space-y-4">
            <Skeleton className="w-full max-w-[640px] h-[clamp(30px,4.2vw,52px)] rounded-xl" />
            <div className="flex gap-3">
              <Skeleton className="w-20 h-6 rounded-md" />
              <Skeleton className="w-24 h-6 rounded-md" />
              <Skeleton className="w-16 h-6 rounded-md" />
            </div>
            <Skeleton className="w-full max-w-[580px] h-[clamp(16px,1.8vw,20px)] rounded-md" />
          </div>
          <div className="w-full self-end pb-2">
            <Skeleton className="w-full h-[clamp(260px,30vw,400px)] rounded-xl" />
          </div>
        </div>
      </section>

      <section className="px-[clamp(20px,4vw,64px)] pb-[clamp(32px,4vw,56px)]">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          <div className="space-y-4">
            <Skeleton className="w-full h-64 rounded-xl" />
            <Skeleton className="w-full h-40 rounded-xl" />
          </div>
          <div className="space-y-6">
            <Skeleton className="w-full h-48 rounded-xl" />
            <Skeleton className="w-full h-32 rounded-xl" />
          </div>
        </div>
      </section>
    </SkeletonShell>
  );
}
