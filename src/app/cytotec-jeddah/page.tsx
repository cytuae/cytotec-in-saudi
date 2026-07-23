import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { cytotecJeddahContent } from "@/content/cytotec-jeddah";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: cytotecJeddahContent.metaTitle,
  description: cytotecJeddahContent.metaDescription,
  path: "/cytotec-jeddah",
  keywords: cytotecJeddahContent.keywords,
});

export default function CytotecJeddahPage() {
  return (
    <MoneyPageLayout
      content={cytotecJeddahContent}
      badge="سايتوتك في جدة"
      secondCtaAfterIndex={3}
      checklist={[
        "ميّزي المعلومة عن الإعلان",
        "قيّمي المصدر قبل المشاركة",
        "استشارة سرية لفهم الخيارات",
      ]}
    />
  );
}
