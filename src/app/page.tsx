import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { DoctorCard } from "@/components/DoctorCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SourceList } from "@/components/SourceList";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { homeContent } from "@/content/home";
import { buildMetadata } from "@/lib/metadata";
import {
  doctorPersonSchema,
  faqPageSchema,
  webPageSchema,
} from "@/lib/schema";
import { DOCTOR, LAST_CONTENT_UPDATE, MONEY_PAGE_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "سايتوتك في السعودية | استشارة مجانية وسرية مع د. عهود توفيق",
  description:
    "معلومات مباشرة عن سايتوتك والميزوبروستول وحبوب تنزيل الحمل في السعودية، مع استشارة أولية مجانية وسرية مع الدكتورة عهود توفيق.",
  path: "/",
  keywords: [
    "سايتوتك في السعودية",
    "سايتوتك السعودية",
    "سايتوتيك في السعودية",
    "حبوب سايتوتك",
    "استشارة سايتوتك",
    "ميزوبروستول السعودية",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: homeContent.heroTitle,
            description:
              "سايتوتك في السعودية مع استشارة مجانية وسرية مع الدكتورة عهود توفيق.",
            path: "/",
            datePublished: LAST_CONTENT_UPDATE,
            dateModified: LAST_CONTENT_UPDATE,
            lastReviewed: LAST_CONTENT_UPDATE,
          }),
          faqPageSchema(homeContent.faqs),
          doctorPersonSchema(),
        ]}
      />

      <Hero
        badge={homeContent.heroBadge}
        title={homeContent.heroTitle}
        description={homeContent.heroDescription}
        primaryLabel="ابدئي الاستشارة المجانية عبر واتساب"
      />

      <section className="container-site section-y">
        <SectionHeading title={homeContent.needToKnowTitle} />
        {homeContent.needToKnowParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="prose-site mt-5 max-w-3xl">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="container-site section-y-tight">
        <CTASection
          title={MONEY_PAGE_CTA.title}
          description={MONEY_PAGE_CTA.description}
          buttonLabel={MONEY_PAGE_CTA.buttonLabel}
        />
      </section>

      <section className="bg-white/70 section-y">
        <div className="container-site">
          <SectionHeading
            title={homeContent.pathsTitle}
            description={homeContent.pathsIntro}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {homeContent.paths.map((path) => (
              <article key={path.href} className="card-surface flex flex-col p-6">
                <h3 className="text-xl font-bold text-navy">{path.title}</h3>
                <p className="mt-3 flex-1 text-[18px] leading-[1.75] text-ink/70">
                  {path.description}
                </p>
                <Link href={path.href} className="btn-secondary mt-5 w-full">
                  {path.cta}
                </Link>
                {"secondaryHref" in path && path.secondaryHref ? (
                  <Link
                    href={path.secondaryHref}
                    className="btn-secondary mt-3 w-full"
                  >
                    {path.secondaryCta}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site section-y">
        <SectionHeading title={homeContent.whyDiffersTitle} />
        {homeContent.whyDiffersParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="prose-site mt-5 max-w-3xl">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="container-site section-y-tight">
        <CTASection
          title={MONEY_PAGE_CTA.title}
          description={MONEY_PAGE_CTA.description}
          buttonLabel={MONEY_PAGE_CTA.buttonLabel}
        />
      </section>

      <section className="container-site section-y">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <SectionHeading title={homeContent.doctorSectionTitle} />
            {homeContent.doctorSectionParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="prose-site mt-5">
                {paragraph}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppButton label="تحدثي مع الدكتورة الآن" />
              <Link href={DOCTOR.href} className="btn-secondary">
                تعرفي على الدكتورة
              </Link>
            </div>
          </div>
          <DoctorCard />
        </div>
      </section>

      <section className="bg-white/70 section-y">
        <div className="container-site">
          <SectionHeading title={homeContent.consultTitle} />
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {homeContent.consultSteps.map((step, index) => (
              <li key={step.title} className="card-surface p-6">
                <p className="text-sm font-semibold text-gold">الخطوة {index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-[18px] leading-[1.75] text-ink/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-site section-y">
        <SectionHeading title={homeContent.privacyTitle} />
        {homeContent.privacyParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="prose-site mt-5 max-w-3xl">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="bg-navy text-warm section-y">
        <div className="container-site">
          <div className="max-w-3xl">
            <h2 className="heading-section text-warm">{homeContent.citiesTitle}</h2>
            <p className="mt-5 text-[18px] leading-[1.75] text-warm/85">
              {homeContent.citiesNote}
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {homeContent.cityPages.map((city) => (
              <li key={city.href}>
                <Link
                  href={city.href}
                  className="block rounded-2xl border border-white/15 bg-white/5 px-4 py-4 text-[18px] leading-snug text-warm/90 transition hover:border-gold/40 hover:bg-white/10"
                >
                  <span className="block text-sm font-semibold text-gold">{city.name}</span>
                  <span className="mt-2 block">{city.anchor}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {homeContent.cities.map((city) => (
              <li
                key={city}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-[18px] leading-none text-warm/85"
              >
                {city}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <WhatsAppButton label="ابدئي استشارتك من أي مدينة" />
          </div>
        </div>
      </section>

      <section className="container-site section-y">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
          <FAQAccordion items={homeContent.faqs} title={homeContent.faqsTitle} />
          <LeadForm />
        </div>
      </section>

      <section className="container-site section-y">
        <p className="prose-site mb-6 max-w-3xl">{homeContent.sourcesIntro}</p>
        <SourceList sources={homeContent.sources} title={homeContent.sourcesTitle} />
      </section>

      <section className="container-site section-y-tight">
        <CTASection
          title={MONEY_PAGE_CTA.title}
          description={MONEY_PAGE_CTA.description}
          buttonLabel={MONEY_PAGE_CTA.buttonLabel}
        />
      </section>

      <section className="container-site pb-28 pt-4 md:pb-20">
        <p className="rounded-2xl border border-navy/10 bg-mist px-4 py-5 text-[18px] leading-[1.75] text-ink/80 sm:px-5">
          {homeContent.footerNotice}
        </p>
      </section>
    </>
  );
}
