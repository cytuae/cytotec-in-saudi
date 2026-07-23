import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { PageIntro } from "@/components/PageIntro";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { DOCTOR, LAST_CONTENT_UPDATE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "تواصل معنا | استشارة مجانية مع الدكتورة عهود",
  description:
    "اطلبي استشارتك المجانية والسرية مع الدكتورة عهود توفيق عبر واتساب حول سايتوتك وحبوب الإجهاض وحبوب تنزيل الحمل في السعودية.",
  path: "/contact",
});

const breadcrumbs = [
  { name: "الرئيسية", path: "/" },
  { name: "تواصل معنا", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "تواصل معنا | استشارة مجانية",
            description: "استشارة أولية مجانية وسرية مع الدكتورة عهود توفيق.",
            path: "/contact",
            dateModified: LAST_CONTENT_UPDATE,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <div className="container-site section-y pb-28 md:pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntro
          badge={DOCTOR.consultation}
          h1="اطلبي استشارتك المجانية"
          paragraphs={[
            "تواصلي مباشرة مع الدكتورة عهود توفيق عبر واتساب، أو أكملي النموذج المختصر لتهيئة رسالتكِ.",
            "يمكنكِ مشاركة التفاصيل الطبية مباشرة مع الدكتورة أثناء الاستشارة الخاصة.",
          ]}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <LeadForm />
          <aside className="space-y-4">
            <div className="card-surface p-5">
              <h2 className="heading-sub text-xl">{DOCTOR.name}</h2>
              <p className="mt-2 text-sm leading-7 text-ink/70">
                {DOCTOR.title} — {DOCTOR.experienceShort}
              </p>
              <WhatsAppButton
                label="تحدثي مع الدكتورة الآن"
                ctaLocation="contact_page"
                className="mt-4 w-full"
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
