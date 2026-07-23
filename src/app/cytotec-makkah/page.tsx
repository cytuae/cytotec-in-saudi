import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { cytotecMakkahContent } from "@/content/cytotec-makkah";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: cytotecMakkahContent.metaTitle,
  description: cytotecMakkahContent.metaDescription,
  path: "/cytotec-makkah",
  keywords: cytotecMakkahContent.keywords,
});

export default function CytotecMakkahPage() {
  return (
    <MoneyPageLayout
      content={cytotecMakkahContent}
      badge="سايتوتك في مكة"
      secondCtaAfterIndex={3}
      checklist={[
        "فرزي الإعلان عن المعلومة",
        "ثبّتي المادة قبل أي مشاركة",
        "استشارة سرية عن بُعد",
      ]}
    />
  );
}
