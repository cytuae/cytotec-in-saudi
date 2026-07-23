import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { cytotecKhobarContent } from "@/content/cytotec-khobar";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: cytotecKhobarContent.metaTitle,
  description: cytotecKhobarContent.metaDescription,
  path: "/cytotec-khobar",
  keywords: cytotecKhobarContent.keywords,
});

export default function CytotecKhobarPage() {
  return (
    <MoneyPageLayout
      content={cytotecKhobarContent}
      badge="سايتوتك في الخبر"
      secondCtaAfterIndex={3}
      checklist={[
        "الخبر غير الدمام في نية البحث",
        "تحققي من إعلانات المنتديات",
        "الصورة ليست تحققًا كاملًا",
      ]}
    />
  );
}
