import { type ReactNode } from 'react';

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-[6px] text-[10px] font-black uppercase leading-none tracking-[-0.055em] text-foreground">
    <span className="h-[8px] w-[8px] rounded-full border border-foreground/40 bg-card-green" />
    {children}
  </span>
);
