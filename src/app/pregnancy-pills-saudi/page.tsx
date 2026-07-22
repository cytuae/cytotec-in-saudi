import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { pregnancyPillsContent } from "@/content/pregnancy-pills";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: pregnancyPillsContent.metaTitle,
  description: pregnancyPillsContent.metaDescription,
  path: "/pregnancy-pills-saudi",
  keywords: pregnancyPillsContent.keywords,
});

export default function PregnancyPillsPage() {
  return (
    <MoneyPageLayout
      content={pregnancyPillsContent}
      badge="حبوب تنزيل الحمل في السعودية"
      secondCtaAfterIndex={pregnancyPillsContent.sections.length - 1}
      checklist={[
        "مرادفات متقاربة بأسماء مختلفة",
        "الربط بالمادة الفعالة",
        "استشارة فردية حسب الحالة",
      ]}
    />
  );
}
