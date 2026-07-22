import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { misoprostolContent } from "@/content/misoprostol";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: misoprostolContent.metaTitle,
  description: misoprostolContent.metaDescription,
  path: "/misoprostol-saudi",
  keywords: misoprostolContent.keywords,
});

export default function MisoprostolPage() {
  return (
    <MoneyPageLayout
      content={misoprostolContent}
      badge="ميزوبروستول في السعودية"
      secondCtaAfterIndex={misoprostolContent.sections.length - 1}
      checklist={[
        "المادة الفعالة خلف سايتوتك",
        "الأسماء والأخطاء الإملائية",
        "توجيه فردي حسب الحالة",
      ]}
    />
  );
}
