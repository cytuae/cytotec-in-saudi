import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { buyCytotecContent } from "@/content/buy-cytotec";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: buyCytotecContent.metaTitle,
  description: buyCytotecContent.metaDescription,
  path: "/buy-cytotec-saudi",
  keywords: buyCytotecContent.keywords,
});

export default function BuyCytotecPage() {
  return (
    <MoneyPageLayout
      content={buyCytotecContent}
      badge="شراء سايتوتك في السعودية"
      secondCtaAfterIndex={buyCytotecContent.sections.length - 1}
      checklist={[
        "المادة والعبوة قبل الدفع",
        "أسئلة مهمة قبل الشراء",
        "استشارة مجانية مع الدكتورة",
      ]}
    />
  );
}
