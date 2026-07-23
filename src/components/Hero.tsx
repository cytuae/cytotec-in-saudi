import Link from "next/link";
import { DOCTOR } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

type HeroProps = {
  badge: string;
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  trustPoints?: string[];
};

export function Hero({
  badge,
  title,
  description,
  primaryLabel = "تحدثي مع الدكتورة الآن",
  secondaryHref = DOCTOR.href,
  secondaryLabel = "تعرفي على الدكتورة",
  trustPoints = [
    "استشارة أولية مجانية.",
    "خصوصية وسرية.",
    "توجيه فردي حسب الحالة.",
  ],
}: HeroProps) {
  return (
    <section className="relative overflow-hidden visual-pack text-warm">
      <div className="absolute inset-0 visual-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full border border-gold/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-[2rem] border border-white/10"
        aria-hidden="true"
      />

      <div className="container-site relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="badge border-gold/35 bg-gold/15 text-gold">{badge}</p>
          <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[18px] leading-[1.75] text-warm/80">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton label={primaryLabel} ctaLocation="hero" />
            <Link
              href={secondaryHref}
              className="btn border border-white/20 bg-transparent text-warm hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[18px] leading-[1.6] text-warm/80">
            {trustPoints.map((point) => (
              <li key={point} className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="text-gold">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
