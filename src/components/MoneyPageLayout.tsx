import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSections } from "@/components/ContentSections";
import { CTASection } from "@/components/CTASection";
import { DoctorCard } from "@/components/DoctorCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { PageIntro } from "@/components/PageIntro";
import { RelatedPages } from "@/components/RelatedPages";
import { SourceList } from "@/components/SourceList";
import { TableOfContents } from "@/components/TableOfContents";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from "@/lib/schema";
import { DOCTOR, MONEY_PAGE_CTA } from "@/lib/site";
import type { MoneyPageContent } from "@/lib/types";

type MoneyPageLayoutProps = {
  content: MoneyPageContent;
  badge?: string;
  checklist?: string[];
  /** Index (0-based) of section after which the second Doctor CTA appears. */
  secondCtaAfterIndex?: number;
  children?: ReactNode;
};

function DoctorCta({ content }: { content: MoneyPageContent }) {
  return (
    <CTASection
      title={content.cta?.title ?? MONEY_PAGE_CTA.title}
      description={content.cta?.description ?? MONEY_PAGE_CTA.description}
      buttonLabel={content.cta?.buttonLabel ?? MONEY_PAGE_CTA.buttonLabel}
    />
  );
}

export function MoneyPageLayout({
  content,
  badge,
  checklist,
  secondCtaAfterIndex,
  children,
}: MoneyPageLayoutProps) {
  const published = content.datePublished ?? content.lastUpdated;
  const schemas = [
    webPageSchema({
      title: content.h1,
      description: content.metaDescription,
      path: `/${content.slug}`,
      datePublished: published,
      dateModified: content.lastUpdated,
      lastReviewed: content.lastUpdated,
      medical: content.medicalPage ?? true,
    }),
    breadcrumbSchema(content.breadcrumbs),
    faqPageSchema(content.faqs),
  ];

  const breakAt = Math.min(
    Math.max(secondCtaAfterIndex ?? Math.max(2, content.sections.length - 2), 2),
    Math.max(content.sections.length - 1, 2),
  );
  const firstSections = content.sections.slice(0, 2);
  const middleSections = content.sections.slice(2, breakAt + 1);
  const lastSections = content.sections.slice(breakAt + 1);

  const related = [
    ...content.related.filter((item) => item.href !== DOCTOR.href && item.href !== "/contact"),
    {
      href: DOCTOR.href,
      title: "استشارة الدكتورة عهود",
      description: "استشارة أولية مجانية وسرية مع استشارية نساء وتوليد.",
    },
    {
      href: "/contact",
      title: "تواصل معنا",
      description: "نموذج مختصر ثم متابعة عبر واتساب.",
    },
  ].slice(0, 3);

  return (
    <>
      <JsonLd data={schemas} />
      <div className="container-site section-y pb-28 md:pb-20">
        <Breadcrumbs items={content.breadcrumbs} />
        <PageIntro h1={content.h1} paragraphs={content.intro} badge={badge} />
        <LastUpdated date={content.lastUpdated} />

        <div className="mt-8">
          <TableOfContents items={content.toc} />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0 space-y-14">
            <ContentSections sections={firstSections} />

            <DoctorCta content={content} />
            <DoctorCard />

            <ContentSections sections={middleSections} />

            <DoctorCta content={content} />

            <ContentSections sections={lastSections} />
            {children}
            <FAQAccordion items={content.faqs} />
            <SourceList sources={content.sources} />
            <RelatedPages pages={related} />

            <DoctorCta content={content} />

            <p className="rounded-2xl border border-navy/10 bg-mist px-4 py-5 text-[18px] leading-[1.75] text-ink/80 sm:px-5">
              المعلومات العامة لا تغني عن تقييم الحالة طبيًا. عند وجود نزيف شديد، ألم غير محتمل،
              إغماء أو أعراض مقلقة، يجب طلب الرعاية الطبية العاجلة.
            </p>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="card-surface p-5">
              <p className="text-[18px] font-semibold text-navy">{DOCTOR.shortName}</p>
              <p className="mt-2 text-[18px] leading-[1.7] text-ink/70">{DOCTOR.consultation}</p>
              <WhatsAppButton label="تحدثي مع الدكتورة الآن" className="mt-4 w-full" />
              <Link href={DOCTOR.href} className="btn-secondary mt-3 w-full">
                تعرفي على الدكتورة
              </Link>
            </div>
            {checklist?.length ? (
              <div className="card-surface p-5">
                <p className="text-sm font-semibold text-navy">نقاط سريعة</p>
                <ul className="mt-3 space-y-2.5 text-[18px] leading-[1.7] text-ink/75">
                  {checklist.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </>
  );
}
