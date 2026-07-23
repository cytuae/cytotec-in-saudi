import { DOCTOR_WHATSAPP_MESSAGE, getWhatsAppUrl } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Fixed full-width WhatsApp CTA at the bottom of every page.
 */
export function StickyMobileCTA() {
  const url = getWhatsAppUrl(DOCTOR_WHATSAPP_MESSAGE);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-warm/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="احصلي على حبوب سايتوتك الآن عبر واتساب"
        className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-3 text-[15px] font-semibold text-white shadow-lift transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:text-base"
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        <span>احصلي على حبوب سايتوتك الآن</span>
      </a>
    </div>
  );
}
