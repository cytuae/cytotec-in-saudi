import { DOCTOR, DOCTOR_WHATSAPP_MESSAGE, getWhatsAppUrl } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Fixed side WhatsApp CTA on every page — always visible, conversion-focused.
 */
export function StickyMobileCTA() {
  const url = getWhatsAppUrl(DOCTOR_WHATSAPP_MESSAGE);

  return (
    <div className="pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 end-3 sm:end-4 md:bottom-8 md:end-6">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ابدئي استشارة مجانية وسرية عبر واتساب"
        className="wa-float pointer-events-auto group flex items-center gap-2.5 rounded-2xl bg-[#25D366] p-2 pe-3.5 text-white shadow-lift transition duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:gap-3 sm:pe-4"
      >
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 sm:h-12 sm:w-12">
          <span className="wa-float-pulse absolute inset-0 rounded-xl" aria-hidden="true" />
          <WhatsAppIcon className="relative h-5 w-5 sm:h-6 sm:w-6" />
        </span>
        <span className="min-w-0 max-w-[9.5rem] text-start sm:max-w-[12rem]">
          <span className="block text-[13px] font-bold leading-snug sm:text-[15px]">
            تحدثي معنا الآن
          </span>
          <span className="mt-0.5 block text-[11px] leading-snug text-white/90 sm:text-[12px]">
            استشارة مجانية وسرية
          </span>
          <span className="mt-0.5 hidden text-[11px] leading-snug text-white/80 sm:block">
            {DOCTOR.shortName}
          </span>
        </span>
      </a>
    </div>
  );
}
