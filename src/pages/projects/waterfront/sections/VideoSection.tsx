import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">
      <div className="relative aspect-video rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl border-4 border-white/20">
        <img
          src="https://i.ytimg.com/vi_webp/MzczJI7bn34/sddefault.webp"
          alt="Project Video Placeholder"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
            <Play className="text-foreground fill-foreground ml-1" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
