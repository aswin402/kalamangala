import { useState } from "react";
import { Play } from "lucide-react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = "MzczJI7bn34";

  return (
    <section className="waterfront-animate mx-auto mb-[60px] w-full px-5 pt-[50px] md:px-10 lg:px-12 xl:px-[110px]">
      <div className="mx-auto w-full max-w-[1260px]">
        <div className="relative aspect-video w-full overflow-hidden rounded-[6px] bg-black">
          {!isPlaying ? (
            <>
              <img
                src={`https://i.ytimg.com/vi_webp/${videoId}/sddefault.webp`}
                alt="The Waterfront Video"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play video"
                  onClick={() => setIsPlaying(true)}
                  className="flex h-[46px] w-[60px] items-center justify-center rounded-[14px] bg-[#ff0000] text-white shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-105"
                >
                  <Play
                    size={28}
                    strokeWidth={0}
                    className="ml-[4px] fill-white"
                  />
                </button>
              </div>
            </>
          ) : (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="The Waterfront Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}