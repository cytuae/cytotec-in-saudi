import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { PageIntro } from "@/components/PageIntro";
import { RelatedPages } from "@/components/RelatedPages";
import { SafetyNotice } from "@/components/SafetyNotice";
import { faqGroups, faqPageMeta } from "@/content/faq";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import { LAST_CONTENT_UPDATE } from "@/lib/site";

export const metadata = buildMetadata({
  title: faqPageMeta.title,
  description: faqPageMeta.description,
  path: "/faq",
  keywords: ["أسئلة شائعة سايتوتك", "FAQ ميزوبروستول السعودية", "سايتوتك السعودية أسئلة"],
});

const breadcrumbs = [
  { name: "الرئيسية", path: "/" },
  { name: "الأسئلة الشائعة", path: "/faq" },
];

export default function FaqPage() {
  const allFaqs = faqGroups.flatMap((group) => group.items);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: faqPageMeta.title,
            description: faqPageMeta.description,
            path: "/faq",
            dateModified: LAST_CONTENT_UPDATE,
          }),
          breadcrumbSchema(breadcrumbs),
          faqPageSchema(allFaqs),
        ]}
      />
      <div className="container-site section-y pb-28 md:pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntro
          badge="FAQ موسّع"
          h1={faqPageMeta.title}
          paragraphs={[
            "جمّعنا الأسئلة الأكثر تكرارًا حول المنتج والمادة والسعر والتوفر والأصالة والخصوصية والاستشارة والحالات العاجلة.",
            "الإجابات عامة وتوعوية، ولا تتضمن جرعات شخصية أو تأكيد توفر غير موثق.",
          ]}
        />
        <LastUpdated date={LAST_CONTENT_UPDATE} />

        <div className="mt-8">
          <SafetyNotice />
        </div>

        <nav aria-label="أقسام الأسئلة" className="mt-8 flex flex-wrap gap-2">
          {faqGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`} className="btn-secondary min-h-10 text-sm">
              {group.title}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-14">
          {faqGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <FAQAccordion items={group.items} title={group.title} />
            </div>
          ))}
        </div>

        <div className="mt-14">
          <RelatedPages
            pages={[
              {
                href: "/misoprostol-saudi",
                title: "ميزوبروستول",
                description: "المادة الفعالة والفرق عن سايتوتك.",
              },
              {
                href: "/cytotec-price-saudi",
                title: "السعر",
                description: "لماذا تختلف الأسعار وما الذي يجب التحقق منه.",
              },
              {
                href: "/contact",
                title: "تواصل",
                description: "استفسار عام بسرية حول المحتوى والتحقق.",
              },
            ]}
          />
        </div>

        <div className="mt-12">
          <CTASection />
        </div>
      </div>
    </>
  );
}
