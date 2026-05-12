import {
  Eye,
  Target,
} from "lucide-react";

export function VisionMissionSection() {
  return (
    <section
      className="
        mx-auto
        mt-[72px]
        w-full
        max-w-[1500px]
        px-5
        md:mt-[96px]
        3xl:max-w-[1800px]
      "
    >
      <div
        className="
          grid
          grid-cols-1
          gap-[20px]
          md:grid-cols-2
          md:gap-[32px]
        "
      >
        {/* Vision Card */}
        <article
          className="
            km-reveal
            rounded-[24px]
            bg-table-row
            px-[32px]
            py-[38px]
            md:px-[42px]
            md:py-[46px]
          "
        >
          <div
            className="
              mb-[20px]
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-white
              text-foreground
              shadow-[0_10px_24px_rgba(13,43,34,0.15)]
            "
          >
            <Eye size={32} strokeWidth={2} />
          </div>

          <h2
            className="
              font-['Inter',sans-serif]
              text-[28px]
              font-bold
              leading-[1.1]
              tracking-[-0.04em]
              text-foreground
              sm:text-[32px]
              md:text-[38px]
            "
          >
            Our Vision for Erode's Luxury Real Estate Future
          </h2>

          <p
            className="
              mt-[16px]
              font-['Inter',sans-serif]
              text-[16px]
              font-medium
              leading-[1.55]
              tracking-[-0.015em]
              text-muted-foreground
              sm:text-[17px]
              md:text-[19px]
            "
          >
            Erode is rapidly becoming a hotspot for premium real estate development. With growing infrastructure, educational hubs, and industrial activity, the demand for high-quality residential spaces is increasing. Kalamangala envisions transforming Erode's skyline with carefully crafted luxury layouts that deliver the perfect blend of class and comfort.
          </p>
        </article>

        {/* Mission Card */}
        <article
          className="
            km-reveal
            rounded-[24px]
            bg-card-green
            px-[32px]
            py-[38px]
            md:px-[42px]
            md:py-[46px]
          "
        >
          <div
            className="
              mb-[20px]
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-white/10
              text-primary
            "
          >
            <Target size={32} strokeWidth={2} />
          </div>

          <h2
            className="
              font-['Inter',sans-serif]
              text-[28px]
              font-bold
              leading-[1.1]
              tracking-[-0.04em]
              text-white-text
              sm:text-[32px]
              md:text-[38px]
            "
          >
            Our Mission
          </h2>

          <p
            className="
              mt-[16px]
              font-['Inter',sans-serif]
              text-[16px]
              font-medium
              leading-[1.55]
              tracking-[-0.015em]
              text-white/80
              sm:text-[17px]
              md:text-[19px]
            "
          >
            Our mission is to offer communities where families can live peacefully, children can grow safely, and investors can see steady returns. By prioritizing clean environments, modern lifestyle facilities, and sustainable development, Kalamangala is shaping the next generation of luxury living in Tamil Nadu.
          </p>
        </article>
      </div>
    </section>
  );
}
