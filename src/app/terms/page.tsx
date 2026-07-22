import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { PageIntro } from "@/components/PageIntro";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { LAST_CONTENT_UPDATE, SITE_NAME } from "@/lib/site";

export const metadata = buildMetadata({
  title: "الشروط والأحكام",
  description: "شروط استخدام موقع Cytotec in Saudi وحدود المسؤولية والاستخدام المقبول للمحتوى.",
  path: "/terms",
});

const breadcrumbs = [
  { name: "الرئيسية", path: "/" },
  { name: "الشروط والأحكام", path: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "الشروط والأحكام",
            description: "شروط استخدام الموقع.",
            path: "/terms",
            dateModified: LAST_CONTENT_UPDATE,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <div className="container-site section-y max-w-3xl pb-28 md:pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntro
          h1="الشروط والأحكام"
          paragraphs={[`باستخدامكِ موقع ${SITE_NAME} فإنكِ توافقين على أن المحتوى توعوي عام وليس خدمة طبية أو صيدلانية.`]}
        />
        <LastUpdated date={LAST_CONTENT_UPDATE} />
        <div className="mt-8 space-y-6 prose-site">
          <section>
            <h2 className="heading-sub">طبيعة الخدمة</h2>
            <p className="mt-3">
              نقدم معلومات عامة وروابط تحقق. لا نبيع أدوية عبر الموقع، ولا نؤكد توفرًا أو أصالة منتج
              معيّن يخص طرفًا ثالثًا.
            </p>
          </section>
          <section>
            <h2 className="heading-sub">الاستخدام المقبول</h2>
            <p className="mt-3">
              يُحظر إساءة استخدام صفحات التواصل لإرسال تهديدات أو محتوى غير قانوني أو بيانات الغير
              دون حق. يُحظر كذلك إعادة نشر المحتوى بطريقة توحي بأن الموقع يقدّم وصفات أو خدمات طبية.
            </p>
          </section>
          <section>
            <h2 className="heading-sub">التعديلات</h2>
            <p className="mt-3">
              قد نحدّث الشروط أو الصفحات عند تغيّر المنهجية أو المتطلبات القانونية/التحريرية.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
