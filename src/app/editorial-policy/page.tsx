import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { PageIntro } from "@/components/PageIntro";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { LAST_CONTENT_UPDATE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "سياسة التحرير",
  description:
    "سياسة التحرير في Cytotec in Saudi: مصادر، حدود الادعاء، تحديث التواريخ، ومنع اختلاق الشهادات أو الأسعار.",
  path: "/editorial-policy",
});

const breadcrumbs = [
  { name: "الرئيسية", path: "/" },
  { name: "سياسة التحرير", path: "/editorial-policy" },
];

export default function EditorialPolicyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "سياسة التحرير",
            description: "معايير كتابة ومراجعة المحتوى.",
            path: "/editorial-policy",
            dateModified: LAST_CONTENT_UPDATE,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <div className="container-site section-y max-w-3xl pb-28 md:pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntro
          h1="سياسة التحرير"
          paragraphs={[
            "تهدف هذه السياسة إلى إبقاء المحتوى واضحًا، غير مكرر، وغير مضلل تجاريًا أو طبيًا.",
          ]}
        />
        <LastUpdated date={LAST_CONTENT_UPDATE} />
        <div className="mt-8 space-y-6 prose-site">
          <section>
            <h2 className="heading-sub">مبادئ الصياغة</h2>
            <ul className="mt-3 list-disc pr-5 space-y-2">
              <li>عربية طبيعية موجهة للجمهور السعودي.</li>
              <li>عنوان واحد رئيسي لكل صفحة مع بنية H2/H3 واضحة.</li>
              <li>روابط داخلية سياقية بدل الحشو.</li>
              <li>إظهار Last updated عند المحتوى الجوهري.</li>
            </ul>
          </section>
          <section>
            <h2 className="heading-sub">ما نرفض نشره</h2>
            <ul className="mt-3 list-disc pr-5 space-y-2">
              <li>أسعار ثابتة مخترعة.</li>
              <li>ادعاء توفر مطلق غير مؤرخ.</li>
              <li>أطباء أو مراجعات أو شهادات غير حقيقية.</li>
              <li>تعليمات جرعات شخصية.</li>
              <li>عبارات «رسمي/مرخص/أصلي 100%» بلا دليل.</li>
            </ul>
          </section>
          <section>
            <h2 className="heading-sub">التصحيحات</h2>
            <p className="mt-3">
              يمكن اقتراح تصحيح عبر صفحة التواصل. التصحيحات الجوهرية تُحدّث مع تاريخ المراجعة.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
