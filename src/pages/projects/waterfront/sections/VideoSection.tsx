import { Play } from "lucide-react";

export function VideoSection() {
  return (
    <section className="waterfront-animate mx-auto mb-[95px] w-full px-6 pt-[70px]">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="relative aspect-video w-full overflow-hidden rounded-[6px]">
          <img
            src="https://i.ytimg.com/vi_webp/MzczJI7bn34/sddefault.webp"
            alt="The Waterfront Video"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              aria-label="Play video"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-[#ff0000] text-white shadow-sm"
            >
              <Play size={25} className="ml-[3px] fill-white stroke-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}