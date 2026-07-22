import { MONEY_PAGE_CTA } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

export function CTASection({
  title = MONEY_PAGE_CTA.title,
  description = MONEY_PAGE_CTA.description,
  buttonLabel = MONEY_PAGE_CTA.buttonLabel,
}: CTASectionProps) {
  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-gold/20 bg-navy px-6 py-8 text-warm sm:px-8 sm:py-10">
      <div className="relative z-10 max-w-2xl">
        <p className="badge border-gold/30 bg-gold/15 text-gold">استشارة مجانية</p>
        <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">{title}</h2>
        <p className="mt-4 text-[18px] leading-[1.75] text-warm/80">{description}</p>
        <div className="mt-6">
          <WhatsAppButton label={buttonLabel} />
        </div>
      </div>
    </section>
  );
}
