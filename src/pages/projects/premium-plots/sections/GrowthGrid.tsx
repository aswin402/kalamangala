import {
  Shield,
  MapPin,
  Clock,
  Droplets,
  TreePine,
} from "lucide-react";

const DARK = "#17352d";
const SOFT = "#ded9ad";

export function GrowthGrid() {
  const growthCards = [
    {
      icon: <Shield size={24} />,
      title: "Gated Security",
      text: "Controlled access ensures a safe environment for your family and property.",
    },
    {
      icon: <MapPin size={24} />,
      title: "Prime Connectivity",
      text: "Located near essential roads, schools, and workplaces for daily ease.",
    },
    {
      icon: <Clock size={24} />,
      title: "Long-Term Value",
      text: "Plots in growing zones tend to appreciate better over time.",
    },
    {
      icon: <Droplets size={24} />,
      title: "Essential Utilities",
      text: "Infrastructure is ready for seamless home construction and living.",
    },
    {
      icon: <TreePine size={24} />,
      title: "Green Surroundings",
      text: "Balanced planning with open spaces and natural air quality.",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="km-reveal text-center text-[18px] font-black tracking-[-0.06em] sm:text-[22px]">
        Infrastructure Planned for Growth
      </h2>

      <div className="mx-auto mt-6 grid max-w-[820px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {growthCards.slice(0, 3).map((item) => (
          <div
            key={item.title}
            className="km-reveal flex flex-col items-center rounded-[8px] bg-[#eee9cf] p-6 text-center"
          >
            <div
              className="mb-3 flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: DARK, color: SOFT }}
            >
              {item.icon}
            </div>

            <h3 className="text-[14px] font-bold tracking-tight">
              {item.title}
            </h3>

            <p className="mt-2 text-[9px] font-medium leading-[1.4] opacity-75">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-4 grid max-w-[540px] grid-cols-1 gap-4 sm:grid-cols-2">
        {growthCards.slice(3).map((item) => (
          <div
            key={item.title}
            className="km-reveal flex flex-col items-center rounded-[8px] bg-[#eee9cf] p-6 text-center"
          >
            <div
              className="mb-3 flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: DARK, color: SOFT }}
            >
              {item.icon}
            </div>

            <h3 className="text-[14px] font-bold tracking-tight">
              {item.title}
            </h3>

            <p className="mt-2 text-[9px] font-medium leading-[1.4] opacity-75">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
