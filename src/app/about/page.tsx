import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { PageIntro } from "@/components/PageIntro";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { DOCTOR, LAST_CONTENT_UPDATE, SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "عن الموقع",
  description:
    "تعرّفي على موقع Cytotec in Saudi والدكتورة عهود توفيق ومنهجية تقديم المعلومات والاستشارة المجانية.",
  path: "/about",
});

const breadcrumbs = [
  { name: "الرئيسية", path: "/" },
  { name: "عن الموقع", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "عن الموقع",
            description: "رسالة الموقع والدكتورة عهود توفيق.",
            path: "/about",
            dateModified: LAST_CONTENT_UPDATE,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <div className="container-site section-y pb-28 md:pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntro
          badge="عن الموقع"
          h1="عن موقع سايتوتك في السعودية"
          paragraphs={[
            `${SITE_NAME} يساعد السيدات على الوصول إلى معلومات واضحة حول سايتوتك وحبوب الإجهاض وحبوب تنزيل الحمل في السعودية، مع مسار مباشر لاستشارة مجانية وسرية مع ${DOCTOR.name}.`,
          ]}
        />
        <LastUpdated date={LAST_CONTENT_UPDATE} />

        <div className="mt-8 space-y-8">
          <section className="card-surface p-6">
            <h2 className="heading-sub">رسالة الموقع</h2>
            <p className="prose-site mt-3">
              جذب الزائرة من البحث، طمأنتها، تعريفها بالدكتورة عهود توفيق، وتحويلها إلى استشارة
              أولية مجانية عبر واتساب للحصول على توجيه فردي حسب حالتها.
            </p>
          </section>

          <section className="card-surface p-6">
            <h2 className="heading-sub">الدكتورة عهود توفيق</h2>
            <ul className="mt-4 space-y-2.5 text-base leading-8 text-ink/85">
              <li>• {DOCTOR.name}</li>
              <li>• {DOCTOR.title}</li>
              <li>• {DOCTOR.experience}</li>
              <li>• {DOCTOR.consultation}</li>
            </ul>
            <Link href={DOCTOR.href} className="btn-secondary mt-5 inline-flex">
              صفحة الدكتورة
            </Link>
          </section>

          <section className="card-surface p-6">
            <h2 className="heading-sub">منهجية المحتوى</h2>
            <ul className="mt-4 space-y-2.5 text-base leading-8 text-ink/85">
              <li>• محتوى عربي واضح يغطي الكلمات التي تبحث عنها الزائرة.</li>
              <li>• ربط مباشر بالاستشارة المجانية عبر واتساب.</li>
              <li>• التوجيه الطبي يتم بصورة فردية بعد تقييم الحالة.</li>
              <li>• لا يتم نشر جدول جرعات عام.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-dashed border-gold/50 bg-gold/5 p-6">
            <h2 className="heading-sub">بيانات إضافية لاحقًا</h2>
            <p className="prose-site mt-3">
              {/* TODO: Add verified professional credentials and doctor photo when provided. */}
              عند توفر صورة شخصية أو بيانات مهنية إضافية موثقة، ستُضاف هنا دون اختراع معلومات.
            </p>
          </section>

          <CTASection
            title="احصلي على استشارة مجانية"
            buttonLabel="تحدثي مع الدكتورة الآن"
          />
        </div>
      </div>
    </>
  );
}
