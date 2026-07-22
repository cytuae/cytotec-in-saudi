import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { abortionPillsContent } from "@/content/abortion-pills";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: abortionPillsContent.metaTitle,
  description: abortionPillsContent.metaDescription,
  path: "/abortion-pills-saudi",
  keywords: abortionPillsContent.keywords,
});

export default function AbortionPillsPage() {
  return (
    <MoneyPageLayout
      content={abortionPillsContent}
      badge="حبوب الإجهاض في السعودية"
      secondCtaAfterIndex={abortionPillsContent.sections.length - 1}
      checklist={[
        "معلومات مباشرة عن الأسماء والمادة",
        "تحقق من العبوة قبل أي قرار",
        "استشارة مجانية وسرية",
      ]}
    />
  );
}
