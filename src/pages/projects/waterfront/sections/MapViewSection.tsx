import { useRef, useState } from "react";
import before from "../../../../assets/thewaterfront/before.png";
import after from "../../../../assets/thewaterfront/after.png";

export function MapViewSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;

    // Snap fully to edges to avoid tiny image strips
    if (percent < 3) percent = 0;
    if (percent > 97) percent = 100;

    setPosition(Math.min(100, Math.max(0, percent)));
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const beforeVisible = position > 8;
  const afterVisible = position < 92;
  const showDivider = position > 0 && position < 100;

  return (
    <section className="waterfront-animate w-full overflow-hidden px-5 pb-[78px] pt-[46px] md:px-10 md:pb-[96px] md:pt-[62px] lg:px-[110px] lg:pb-[105px] lg:pt-[70px]">
      <div className="mx-auto w-full max-w-[1260px] overflow-hidden">
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={() => setIsDragging(false)}
          className="
            relative
            h-[420px]
            w-full
            touch-none
            cursor-ew-resize
            select-none
            overflow-hidden
            rounded-[8px]
            sm:h-[520px]
            md:h-[640px]
            lg:h-[708px]
            xl:h-[708px]
          "
        >
          {/* AFTER IMAGE */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={after}
              alt="After"
              draggable={false}
              className="
                h-full
                w-full
                scale-[1.08]
                object-cover
                object-center
                md:scale-[1.1]
                lg:scale-[1.14]
              "
            />
          </div>

          {/* BEFORE IMAGE - wrapper is clipped, image is scaled inside */}
          <div
            className="absolute inset-0 z-10 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - position}% 0 0)`,
            }}
          >
            <img
              src={before}
              alt="Before"
              draggable={false}
              className="
                h-full
                w-full
                scale-[1.08]
                object-cover
                object-center
                md:scale-[1.1]
                lg:scale-[1.14]
              "
            />
          </div>

          {/* CLEAN LABELS */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 z-50 flex items-start justify-between px-[16px] pt-[20px] sm:px-[22px] sm:pt-[24px] md:px-[28px] md:pt-[32px] lg:px-[34px] lg:pt-[38px]">
            <span
              className={`
                text-[26px]
                font-extrabold
                leading-none
                tracking-[-0.04em]
                text-white
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]
                transition-opacity
                duration-200
                sm:text-[38px]
                md:text-[48px]
                lg:text-[52px]
                ${beforeVisible ? "opacity-100" : "opacity-0"}
              `}
            >
              Before
            </span>

            <span
              className={`
                text-[26px]
                font-extrabold
                leading-none
                tracking-[-0.04em]
                text-white
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]
                transition-opacity
                duration-200
                sm:text-[38px]
                md:text-[48px]
                lg:text-[52px]
                ${afterVisible ? "opacity-100" : "opacity-0"}
              `}
            >
              After
            </span>
          </div>

          {/* CENTER LINE */}
          {showDivider && (
            <div
              className="pointer-events-none absolute top-0 z-30 h-full w-[2px] -translate-x-1/2 bg-white"
              style={{ left: `${position}%` }}
            />
          )}

          {/* DRAG HANDLE */}
          <div
            className="
              absolute
              top-1/2
              z-50
              flex
              h-[42px]
              w-[42px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-[20px]
              font-bold
              text-[var(--projects-mapviewsection-text-1)]
              shadow-md
              backdrop-blur-sm
              md:h-[54px]
              md:w-[54px]
              md:text-[28px]
            "
            style={{
              left: `clamp(21px, ${position}%, calc(100% - 21px))`,
              transform: "translateX(-50%) translateY(-50%)",
            }}
          >
            <span className="pointer-events-none leading-none">‹›</span>
          </div>
        </div>
      </div>
    </section>
  );
}