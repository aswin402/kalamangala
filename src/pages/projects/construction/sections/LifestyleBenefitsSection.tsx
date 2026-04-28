import img10 from "../../../../assets/construction-company/img10.webp";

export function LifestyleBenefitsSection() {
  return (
    <section
      className="
        mx-auto
        mt-[52px]
        grid
        max-w-[1455px]
        grid-cols-1
        items-center
        gap-[70px]
        px-5
        pb-[48px]
        md:grid-cols-[1.08fr_0.92fr]
      "
    >
      {/* Left Image */}
      <div className="km-reveal overflow-hidden rounded-[18px]">
        <img
          src={img10}
          alt="Lifestyle benefits"
          className="
            h-[430px]
            w-full
            object-cover
            object-center
            md:h-[555px]
          "
        />
      </div>

      {/* Right Content */}
      <div className="km-reveal md:pl-[8px]">
        <h2
          className="
            max-w-[650px]
            font-['Inter',sans-serif]
            text-[40px]
            font-[900]
            leading-[1.03]
            tracking-[-0.075em]
            text-[#0d2b22]
            md:text-[50px]
          "
        >
          Lifestyle Benefits You’ll Love
        </h2>

        <div
          className="
            mt-[16px]
            max-w-[610px]
            font-['Inter',sans-serif]
            text-[17px]
            font-[700]
            leading-[1.18]
            tracking-[-0.035em]
            text-black
            md:text-[19px]
          "
        >
          <ul className="list-disc pl-[21px]">
            <li>Morning walks with the river breeze</li>
            <li>Quick temple visits without traffic</li>
            <li>Weekend shopping in minutes</li>
            <li>Easy school runs and daily commutes</li>
            <li>Peaceful nights with no city noise</li>
          </ul>

          <p
            className="
              mt-[24px]
              max-w-[600px]
              font-[500]
              leading-[1.28]
              tracking-[-0.045em]
              text-black
            "
          >
            It’s not just location — it’s a lifestyle crafted for those who
            appreciate fine living and meaningful moments.
          </p>
        </div>
      </div>
    </section>
  );
}