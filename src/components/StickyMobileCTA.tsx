import { DOCTOR_WHATSAPP_MESSAGE, getWhatsAppUrl } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Full-width centered WhatsApp CTA fixed in the middle of the viewport on every page.
 */
export function StickyMobileCTA() {
  const url = getWhatsAppUrl(DOCTOR_WHATSAPP_MESSAGE);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-1/2 z-40 -translate-y-1/2 px-0">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="احصلي على حبوب سايتوتك الآن عبر واتساب"
        className="wa-float pointer-events-auto relative flex w-full min-h-[4.5rem] items-center justify-center gap-3 bg-[#25D366] px-4 py-4 text-center text-white shadow-[0_12px_40px_rgba(11,31,51,0.28)] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:min-h-[5.25rem] sm:gap-4 sm:py-5"
      >
        <span className="wa-float-pulse absolute inset-0" aria-hidden="true" />
        <WhatsAppIcon className="relative h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
        <span className="relative text-[1.05rem] font-bold leading-snug sm:text-xl md:text-2xl">
          احصلي على حبوب سايتوتك الآن
        </span>
      </a>
    </div>
  );
}
