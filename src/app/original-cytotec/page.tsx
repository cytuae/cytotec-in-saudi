import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { originalContent } from "@/content/original";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: originalContent.metaTitle,
  description: originalContent.metaDescription,
  path: "/original-cytotec",
  keywords: originalContent.keywords,
});

export default function OriginalCytotecPage() {
  return (
    <MoneyPageLayout
      content={originalContent}
      badge="سايتوتك الأصلي والمقلد"
      secondCtaAfterIndex={originalContent.sections.length - 1}
      checklist={[
        "الصورة لا تكفي",
        "بيانات العبوة أولًا",
        "لا شهادة أصالة عن بُعد",
      ]}
    />
  );
}
