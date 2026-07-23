import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { cytotecMadinahContent } from "@/content/cytotec-madinah";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: cytotecMadinahContent.metaTitle,
  description: cytotecMadinahContent.metaDescription,
  path: "/cytotec-madinah",
  keywords: cytotecMadinahContent.keywords,
});

export default function CytotecMadinahPage() {
  return (
    <MoneyPageLayout
      content={cytotecMadinahContent}
      badge="سايتوتك في المدينة المنورة"
      secondCtaAfterIndex={3}
      checklist={[
        "ميّزي النتائج المحلية عن الأجنبية",
        "جهّزي الأسئلة قبل التواصل",
        "علامات التقييم العاجل",
      ]}
    />
  );
}
