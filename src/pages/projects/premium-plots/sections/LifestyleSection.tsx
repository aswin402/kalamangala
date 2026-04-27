import img9 from "../../../../assets/premium-residential-plots-in-coimbatore/img9.webp";

export function LifestyleSection() {
  return (
    <section className="km-reveal mt-7 overflow-hidden rounded-[10px] bg-[#eee9cf]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 h-[200px] md:order-1 md:h-auto">
          <img
            src={img9}
            alt="Kalamangala amenities"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 flex flex-col justify-center p-8 md:order-2 md:p-12">
          <h2 className="text-[20px] font-black leading-none tracking-[-0.06em] sm:text-[26px]">
            Lifestyle Benefits
            <br />
            You’ll Love
          </h2>

          <ul className="mt-5 space-y-3">
            {[
              "Clear Legal Title & Documentation",
              "Proper Road Access & Drainage",
              "Community Parks & Open Spaces",
              "Round-the-Clock Security Protocols",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-[#17352d]" />
                <span className="text-[10px] font-bold tracking-tight sm:text-[11px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
