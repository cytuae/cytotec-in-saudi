import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { cytotecQassimContent } from "@/content/cytotec-qassim";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: cytotecQassimContent.metaTitle,
  description: cytotecQassimContent.metaDescription,
  path: "/cytotec-qassim",
  keywords: cytotecQassimContent.keywords,
});

export default function CytotecQassimPage() {
  return (
    <MoneyPageLayout
      content={cytotecQassimContent}
      badge="سايتوتك في القصيم"
      secondCtaAfterIndex={3}
      checklist={[
        "منطقة تشمل بريدة وعنيزة",
        "لا فرع محلي مُختلق",
        "جهّزي الأسئلة قبل الاستشارة",
      ]}
    />
  );
}
