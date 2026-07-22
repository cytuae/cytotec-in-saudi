import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { PageIntro } from "@/components/PageIntro";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { LAST_CONTENT_UPDATE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "سياسة الخصوصية",
  description:
    "كيف يتعامل موقع Cytotec in Saudi مع الخصوصية والبيانات وMinimization للمعلومات الحساسة.",
  path: "/privacy",
});

const breadcrumbs = [
  { name: "الرئيسية", path: "/" },
  { name: "سياسة الخصوصية", path: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "سياسة الخصوصية",
            description: "مبادئ الخصوصية وتقليل البيانات.",
            path: "/privacy",
            dateModified: LAST_CONTENT_UPDATE,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <div className="container-site section-y max-w-3xl pb-28 md:pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntro
          h1="سياسة الخصوصية"
          paragraphs={[
            "نحترم خصوصية الزائرات ونشجع على مشاركة أقل قدر ممكن من البيانات عند التواصل.",
          ]}
        />
        <LastUpdated date={LAST_CONTENT_UPDATE} />

        <div className="mt-8 space-y-6 prose-site">
          <section>
            <h2 className="heading-sub">ما نجمعه</h2>
            <p className="mt-3">
              في الوضع الحالي، الموقع ثابت المحتوى ولا يستخدم قاعدة بيانات لحسابات المستخدمين. نموذج
              التواصل يعمل من الواجهة وقد يفتح تطبيق البريد على جهازكِ.
            </p>
          </section>
          <section>
            <h2 className="heading-sub">واتساب</h2>
            <p className="mt-3">
              إذا فُعّل رقم واتساب عبر متغير البيئة عند النشر، فإن المحادثة تتم عبر منصة واتساب
              وفق إعدادات خصوصيتكِ هناك. لا نضع رقمًا داخل المستودع برمجيًا بشكل افتراضي.
            </p>
          </section>
          <section>
            <h2 className="heading-sub">ملفات تعريف الارتباط والتحليلات</h2>
            <p className="mt-3">
              قد يضيف الاستضافة أو أدوات تحليل لاحقة ملفات تعريف ارتباط تقنية. عند تفعيل أي أداة
              تتبع، يُفضّل تحديث هذه السياسة بما يعكس ذلك بوضوح.
            </p>
          </section>
          <section>
            <h2 className="heading-sub">بيانات حساسة</h2>
            <p className="mt-3">
              لا ترسلِ وثائق هوية أو تفاصيل طبية دقيقة عبر قنوات غير ضرورية. المحتوى التوعوي لا
              يتطلب ذلك.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
