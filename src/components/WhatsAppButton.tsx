import type { CtaLocation } from "@/lib/analytics";
import { DOCTOR_WHATSAPP_MESSAGE, getWhatsAppUrl } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  className?: string;
  variant?: "primary" | "secondary" | "gold" | "hero-secondary";
  ctaLocation?: CtaLocation;
};

export function WhatsAppButton({
  label = "تحدثي مع الدكتورة الآن",
  message = DOCTOR_WHATSAPP_MESSAGE,
  className = "",
  variant = "gold",
  ctaLocation = "unknown",
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(message);
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
        ? "btn-secondary"
        : variant === "hero-secondary"
          ? "btn border border-white/20 bg-transparent text-warm hover:bg-white/10"
          : "btn-gold";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-location={ctaLocation}
      className={`${variantClass} ${className}`}
    >
      <WhatsAppIcon className="h-[1.15rem] w-[1.15rem] shrink-0" />
      <span>{label}</span>
    </a>
  );
}
