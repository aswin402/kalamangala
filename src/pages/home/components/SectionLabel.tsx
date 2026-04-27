import { type ReactNode } from 'react';

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-[6px] text-[10px] font-black uppercase leading-none tracking-[-0.055em] text-[#14352d]">
    <span className="h-[8px] w-[8px] rounded-full border border-[#14352d]/40 bg-[#14352d]" />
    {children}
  </span>
);
