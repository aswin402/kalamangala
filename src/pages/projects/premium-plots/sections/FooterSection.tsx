export function FooterSection() {
  return (
    <section
      className="
        relative
        mx-auto
        mt-[20px]
        w-full
        overflow-hidden
        px-5
        py-[42px]
        text-center
        sm:py-[48px]
        md:py-[52px]
        lg:py-[48px]
      "
      style={{
        backgroundColor: "#fbfcf0",
        backgroundImage: `
          linear-gradient(120deg, rgba(13,43,34,0.055) 12px, transparent 12px),
          linear-gradient(300deg, rgba(13,43,34,0.055) 12px, transparent 12px)
        `,
        backgroundSize: "42px 42px",
        backgroundPosition: "0 0",
      }}
    >
      <div className="mx-auto max-w-[1455px]">
        <h3
          className="
            font-['Inter',sans-serif]
            text-[30px]
            font-bold
            leading-[1.05]
            tracking-[-0.055em]
            text-[#0d2b22]
            sm:text-[38px]
            md:text-[46px]
            lg:text-[50px]
            xl:text-[52px]
          "
        >
          The Waterfront by Kalamangala
        </h3>

        <p
          className="
            mx-auto
            mt-[12px]
            max-w-[980px]
            font-['Inter',sans-serif]
            text-[16px]
            font-[700]
            leading-[1.25]
            tracking-[-0.045em]
            text-[#0d2b22]
            sm:text-[19px]
            md:mt-[14px]
            md:text-[23px]
            lg:text-[25px]
          "
        >
          Where every direction leads to convenience, and every view opens to calm.
        </p>
      </div>
    </section>
  );
}