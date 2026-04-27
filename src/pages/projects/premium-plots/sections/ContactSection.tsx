import { Phone, Mail, MapPinned } from "lucide-react";

const DARK = "#17352d";
const CREAM = "#f6f3df";

export function ContactSection() {
  return (
    <footer className="km-reveal mt-16 rounded-t-[20px] p-8 pb-12 sm:p-12" style={{ backgroundColor: DARK, color: CREAM }}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-[22px] font-black tracking-[-0.075em] sm:text-[28px]">
            Ready to Build Your Dream?
          </h2>
          <p className="mt-3 max-w-[400px] text-[10px] font-medium leading-[1.5] opacity-70 sm:text-[11px]">
            Get in touch with our team for plot availability, pricing, and
            guided site tours.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Phone size={14} />
              </div>
              <span className="text-[11px] font-bold">+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Mail size={14} />
              </div>
              <span className="text-[11px] font-bold">sales@kalamangala.com</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <MapPinned size={14} />
              </div>
              <span className="max-w-[200px] text-[11px] font-bold">
                Kalamangala Township, Thindal, Coimbatore, Tamil Nadu
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end md:items-end">
          <div className="text-left md:text-right">
            <h3 className="text-[16px] font-black tracking-tight">Kalamangala</h3>
            <p className="text-[9px] font-medium opacity-50">
              © 2024 Kalamangala. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
