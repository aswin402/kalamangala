import { type ReactNode } from 'react';

export const SectionLabel = ({ children, className = "font-[800]" }: { children: ReactNode; className?: string }) => (
  <span className={`inline-flex items-center gap-[4px] md:gap-[6px] text-[10px] uppercase leading-none tracking-[-0.045em] text-foreground md:text-[12px] ${className}`}>
    <span
      className="
        grid h-[10px] w-[10px] place-items-center rounded-full
        border border-foreground font-semibold
        before:block before:h-[6px] before:w-[6px] before:rounded-full before:bg-card-green
        md:h-[14px] md:w-[14px]
        md:before:h-[9px] md:before:w-[9px]
      "
    />
    {children}
  </span>
);
