import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { cytotecDammamContent } from "@/content/cytotec-dammam";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: cytotecDammamContent.metaTitle,
  description: cytotecDammamContent.metaDescription,
  path: "/cytotec-dammam",
  keywords: cytotecDammamContent.keywords,
});

export default function CytotecDammamPage() {
  return (
    <MoneyPageLayout
      content={cytotecDammamContent}
      badge="سايتوتك في الدمام"
      secondCtaAfterIndex={3}
      checklist={[
        "لا فرع محلي مُختلق",
        "تحقق لا ضمان بيع",
        "علامات التقييم العاجل",
      ]}
    />
  );
}
