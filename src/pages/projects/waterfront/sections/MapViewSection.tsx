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
                font-semibold
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
                font-semibold
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
              className="pointer-events-none absolute top-0 z-50 h-full w-[4px] -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)]"
              style={{ left: `${position}%` }}
            />
          )}

          {/* DRAG HANDLE */}
          <div
            className="
              absolute
              top-1/2
              z-40
              flex
              h-[48px]
              w-[48px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-neutral-900
              shadow-[0_4px_12px_rgba(0,0,0,0.1)]
              backdrop-blur-[4px]
              md:h-[64px]
              md:w-[64px]
            "
            style={{
              left: `clamp(32px, ${position}%, calc(100% - 32px))`,
              transform: "translateX(-50%) translateY(-50%)",
            }}
          >
            <div className="pointer-events-none flex items-center gap-[8px] md:gap-[12px]">
              <svg width="14" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:h-[22px] md:w-[16px]">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <svg width="14" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:h-[22px] md:w-[16px]">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}