import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { PageIntro } from "@/components/PageIntro";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, doctorPersonSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import { DOCTOR, LAST_CONTENT_UPDATE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "الدكتورة عهود توفيق | استشارية نساء وتوليد",
  description:
    "تعرّفي على الدكتورة عهود توفيق، استشارية نساء وتوليد وخريجة إمبريال كوليدج لندن. استشارات خاصة وسرية للنساء من دبي والرياض.",
  path: DOCTOR.href,
  keywords: [
    "الدكتورة عهود توفيق",
    "استشارة نساء وتوليد مجانية",
    "سايتوتك في السعودية",
  ],
});

const breadcrumbs = [
  { name: "الرئيسية", path: "/" },
  { name: DOCTOR.name, path: DOCTOR.href },
];

const faqs = [
  {
    question: "هل الاستشارة مجانية؟",
    answer: "نعم، الاستشارة الأولية مجانية وسرية.",
  },
  {
    question: "كيف تتم الاستشارة؟",
    answer:
      "تبدئين عبر واتساب، ثم تناقش الدكتورة معكِ المعلومات الأساسية عن حالتكِ لتقديم توجيه فردي مناسب.",
  },
  {
    question: "هل يمكن الاستشارة من دبي أو الرياض؟",
    answer:
      "نعم، تقدم الدكتورة استشارات خاصة للنساء من دبي والرياض ضمن مسار الاستشارة الأولية عبر واتساب.",
  },
  {
    question: "هل يُعطى توجيه عام للجميع؟",
    answer:
      "تتم مناقشة كل حالة بصورة فردية مع الدكتورة، لأن التوجيه الطبي لا يمكن تعميمه دون معرفة المعلومات الأساسية عن الحالة.",
  },
];

export default function DoctorPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "الدكتورة عهود توفيق — استشارية نساء وتوليد",
            description:
              "تعرّفي على الدكتورة عهود توفيق واحصلي على استشارة أولية مجانية وسرية.",
            path: DOCTOR.href,
            datePublished: LAST_CONTENT_UPDATE,
            dateModified: LAST_CONTENT_UPDATE,
            lastReviewed: LAST_CONTENT_UPDATE,
          }),
          breadcrumbSchema(breadcrumbs),
          doctorPersonSchema(),
          faqPageSchema(faqs),
        ]}
      />

      <div className="container-site section-y pb-28 md:pb-20">
        <Breadcrumbs items={breadcrumbs} />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <PageIntro
              badge={DOCTOR.consultation}
              h1="الدكتورة عهود توفيق — استشارية نساء وتوليد"
              paragraphs={[
                "الدكتورة عهود توفيق استشارية نساء وتوليد وخريجة إمبريال كوليدج لندن. تقدم استشارات خاصة وسرية للنساء من دبي والرياض، مع التركيز على الاستماع للحالة وتقديم توجيه فردي قبل اتخاذ أي قرار طبي.",
              ]}
            />
            <div className="mt-6">
              <WhatsAppButton label="تحدثي مع الدكتورة الآن" />
            </div>
          </div>

          <aside className="card-surface p-6 text-center">
            <div
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-navy text-2xl font-bold text-gold"
              aria-hidden="true"
            >
              {DOCTOR.initials}
            </div>
            <p className="mt-4 text-lg font-bold text-navy">{DOCTOR.name}</p>
            <p className="mt-1 text-sm text-ink/70">{DOCTOR.title}</p>
            <p className="mt-2 text-sm text-ink/70">{DOCTOR.education}</p>
            <p className="mt-2 text-sm text-ink/70">{DOCTOR.areaServedLabel}</p>
            <p className="mt-2 text-sm font-medium text-navy">{DOCTOR.consultation}</p>
            <WhatsAppButton label="ابدئي الاستشارة الآن" className="mt-5 w-full" />
          </aside>
        </div>

        <div className="mt-12 space-y-10">
          <section id="about" className="scroll-mt-28">
            <h2 className="heading-section">نبذة عن الدكتورة</h2>
            <p className="prose-site mt-4">
              الدكتورة عهود توفيق استشارية نساء وتوليد تساعد السيدات على فهم المصطلحات والخيارات
              المرتبطة بسايتوتك وحبوب الإجهاض وحبوب تنزيل الحمل، مع التركيز على التوجيه الفردي
              والاستماع للحالة قبل أي قرار طبي.
            </p>
          </section>

          <section id="education" className="scroll-mt-28">
            <h2 className="heading-section">التعليم ونطاق الاستشارة</h2>
            <p className="prose-site mt-4">{DOCTOR.experience}</p>
            <p className="prose-site mt-4">
              الاستشارة الأولية مجانية وسرية، وتهدف إلى توضيح الأسئلة وتحديد الخطوة المناسبة دون
              تقديم وصفة عامة أو بروتوكول موحد للجميع.
            </p>
          </section>

          <CTASection
            title="احصلي على استشارة مجانية"
            buttonLabel="اسألي الدكتورة عهود"
          />

          <section id="topics" className="scroll-mt-28">
            <h2 className="heading-section">الحالات والاستفسارات التي يمكن مناقشتها</h2>
            <ul className="mt-4 space-y-2.5 text-base leading-8 text-ink/85">
              <li className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>استفسارات عن سايتوتك في السعودية والشراء والتوفر.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>حبوب الإجهاض في السعودية والمصطلحات المرتبطة بها.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>حبوب تنزيل الحمل والمرادفات الشائعة.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>سعر سايتوتك في السعودية وكيفية فهم العروض.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>ميزوبروستول في السعودية والفرق بين الأسماء.</span>
              </li>
            </ul>
          </section>

          <section id="how" className="scroll-mt-28">
            <h2 className="heading-section">كيف تتم الاستشارة؟</h2>
            <ol className="mt-4 space-y-3 text-base leading-8 text-ink/85">
              <li>1. تضغطين على زر الاستشارة المجانية لفتح واتساب.</li>
              <li>2. ترسلين الرسالة الجاهزة أو توضّحين موضوع استفساركِ.</li>
              <li>3. تناقش الدكتورة معكِ المعلومات الأساسية عن حالتكِ.</li>
              <li>4. تحصلين على توجيه فردي يناسب حالتكِ.</li>
            </ol>
          </section>

          <section id="privacy" className="scroll-mt-28">
            <h2 className="heading-section">الخصوصية والسرية</h2>
            <p className="prose-site mt-4">
              الاستشارة أولية مجانية وسرية. يمكنكِ مشاركة التفاصيل الطبية مباشرة مع الدكتورة أثناء
              الاستشارة الخاصة.
            </p>
          </section>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <FAQAccordion items={faqs} />
            <LeadForm />
          </div>

          <CTASection
            title="تحتاجين إلى توجيه حسب حالتك؟"
            buttonLabel="تحدثي مع الدكتورة الآن"
          />

          <p className="rounded-2xl border border-navy/10 bg-mist px-4 py-4 text-sm leading-7 text-ink/80 sm:px-5">
            المعلومات العامة لا تغني عن تقييم الحالة طبيًا. عند وجود نزيف شديد، ألم غير محتمل،
            إغماء أو أعراض مقلقة، يجب طلب الرعاية الطبية العاجلة.
          </p>
        </div>
      </div>
    </>
  );
}
