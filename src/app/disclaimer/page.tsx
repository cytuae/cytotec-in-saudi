import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LastUpdated } from "@/components/LastUpdated";
import { PageIntro } from "@/components/PageIntro";
import { SafetyNotice } from "@/components/SafetyNotice";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { LAST_CONTENT_UPDATE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "إخلاء المسؤولية",
  description:
    "إخلاء مسؤولية طبي وقانوني: المحتوى توعوي ولا يغني عن الطبيب، ولا يتضمن جرعات شخصية أو ادعاءات ترخيص أو توفر غير موثقة.",
  path: "/disclaimer",
});

const breadcrumbs = [
  { name: "الرئيسية", path: "/" },
  { name: "إخلاء المسؤولية", path: "/disclaimer" },
];

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "إخلاء المسؤولية",
            description: "حدود المحتوى الطبي والقانوني للموقع.",
            path: "/disclaimer",
            dateModified: LAST_CONTENT_UPDATE,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <div className="container-site section-y max-w-3xl pb-28 md:pb-20">
        <Breadcrumbs items={breadcrumbs} />
        <PageIntro
          h1="إخلاء المسؤولية"
          paragraphs={[
            "يُرجى قراءة هذا الإخلاء قبل الاعتماد على أي معلومة في الموقع لاتخاذ قرار صحي أو تجاري.",
          ]}
        />
        <LastUpdated date={LAST_CONTENT_UPDATE} />
        <div className="mt-8">
          <SafetyNotice />
        </div>
        <div className="mt-8 space-y-6 prose-site">
          <section>
            <h2 className="heading-sub">لا تشخيص ولا جرعات</h2>
            <p className="mt-3">
              لا يقدّم الموقع تشخيصًا، ولا خطة علاجية فردية، ولا تعليمات جرعات شخصية، ولا متابعة
              حالات طبية.
            </p>
          </section>
          <section>
            <h2 className="heading-sub">لا ادعاءات غير مثبتة</h2>
            <p className="mt-3">
              لا ندّعي أننا الموقع الرسمي لأي شركة، ولا نؤكد أصالة منتجات أطراف ثالثة، ولا نعرض
              تراخيص أو عناوين عيادات غير موجودة.
            </p>
          </section>
          <section>
            <h2 className="heading-sub">الطوارئ</h2>
            <p className="mt-3">
              في الحالات العاجلة يجب التواصل مع الخدمات الطبية المختصة فورًا. الموقع ليس خط طوارئ.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
