import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { cytotecTaifContent } from "@/content/cytotec-taif";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: cytotecTaifContent.metaTitle,
  description: cytotecTaifContent.metaDescription,
  path: "/cytotec-taif",
  keywords: cytotecTaifContent.keywords,
});

export default function CytotecTaifPage() {
  return (
    <MoneyPageLayout
      content={cytotecTaifContent}
      badge="سايتوتك في الطائف"
      secondCtaAfterIndex={3}
      checklist={[
        "فرزي المعلومة عن الإعلان",
        "ثبّتي المصطلح قبل التواصل",
        "استشارة سرية عن بُعد",
      ]}
    />
  );
}
