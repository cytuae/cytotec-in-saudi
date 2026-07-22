import { MoneyPageLayout } from "@/components/MoneyPageLayout";
import { availabilityContent } from "@/content/availability";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: availabilityContent.metaTitle,
  description: availabilityContent.metaDescription,
  path: "/availability",
  keywords: availabilityContent.keywords,
});

export default function AvailabilityPage() {
  return (
    <MoneyPageLayout
      content={availabilityContent}
      badge="إطار التوفر"
      secondCtaAfterIndex={availabilityContent.sections.length - 1}
      checklist={[
        "التسجيل ≠ التوفر الفعلي",
        "التوفر ≠ الصرف",
        "المعلومة تتغير مع الوقت",
      ]}
    />
  );
}
