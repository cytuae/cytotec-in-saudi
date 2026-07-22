import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { priceContent } from "@/content/price";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: priceContent.metaTitle,
  description: priceContent.metaDescription,
  path: "/cytotec-price-saudi",
  keywords: priceContent.keywords,
});

export default function PricePage() {
  return (
    <MoneyPageLayout
      content={priceContent}
      badge="سعر سايتوتك في السعودية 2026"
      secondCtaAfterIndex={priceContent.sections.length - 1}
      checklist={[
        "السعر يُقرأ مع العبوة والمصدر",
        "الأصالة لا تُستنتج من الرقم وحده",
        "استشارة مجانية قبل القرار",
      ]}
    />
  );
}
