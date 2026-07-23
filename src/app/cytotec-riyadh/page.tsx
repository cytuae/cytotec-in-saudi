import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { cytotecRiyadhContent } from "@/content/cytotec-riyadh";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: cytotecRiyadhContent.metaTitle,
  description: cytotecRiyadhContent.metaDescription,
  path: "/cytotec-riyadh",
  keywords: cytotecRiyadhContent.keywords,
});

export default function CytotecRiyadhPage() {
  return (
    <MoneyPageLayout
      content={cytotecRiyadhContent}
      badge="سايتوتك في الرياض"
      secondCtaAfterIndex={3}
      checklist={[
        "رتّبي السؤال قبل الضغط",
        "فرّقي الاسم عن المادة",
        "استشارة مجانية وسرية",
      ]}
    />
  );
}
