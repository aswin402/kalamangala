import { type ReactNode } from 'react';

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-[6px] text-[11px] font-[800] uppercase leading-none tracking-[-0.045em] text-foreground md:text-[12px]">
    <span
      className="
        grid h-[14px] w-[14px] place-items-center rounded-full
        border border-foreground
        before:block before:h-[8px] before:w-[8px] before:rounded-full before:bg-card-green
        md:h-[16px] md:w-[16px]
        md:before:h-[9px] md:before:w-[9px]
      "
    />
    {children}
  </span>
);
