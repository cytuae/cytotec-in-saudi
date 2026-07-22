import type { SourceItem } from "@/lib/types";
import { DATE_PUBLISHED, LAST_CONTENT_UPDATE } from "@/lib/site";

export const defaultLastUpdated = LAST_CONTENT_UPDATE;
export { DATE_PUBLISHED };

export const sharedSources: SourceItem[] = [
  {
    title: "WHO — Abortion care guideline",
    href: "https://www.who.int/publications/b/74796",
    note: "إرشادات عامة دولية حول رعاية الإجهاض؛ ليست دليل استخدام شخصي.",
  },
  {
    title: "WHO — Clinical practice handbook for abortion care",
    href: "https://www.who.int/publications/i/item/9789240075207",
    note: "دليل سريري عام للمهنيين الصحيين؛ لا يُنقل كجرعات للحالات الفردية.",
  },
  {
    title: "NHS — Abortion risks and complications",
    href: "https://www.nhs.uk/tests-and-treatments/abortion/risks/",
    note: "ملخص عام حول المخاطر والمضاعفات المحتملة.",
  },
  {
    title: "الهيئة العامة للغذاء والدواء — السعودية (SFDA)",
    href: "https://www.sfda.gov.sa",
    note: "الجهة التنظيمية المحلية للاطلاع على تحديثات التسجيل والتنبيهات.",
  },
  {
    title: "SFDA — Drug circulars and withdrawal example",
    href: "https://www.sfda.gov.sa/en/drugscircularsandwithdrawal/89365",
    note: "مثال على أهمية رقم التشغيلة والمصدر الرسمي عند التحقق من المنتجات.",
  },
  {
    title: "MedlinePlus — Misoprostol",
    href: "https://medlineplus.gov/druginfo/meds/a689009.html",
    note: "ملخص معلومات عامة للمريض حول المادة الفعالة.",
  },
];

export const emergencyBullets = [
  "نزيف شديد لا يتوقف أو يبلل فوطًا متعددة خلال وقت قصير.",
  "ألم شديد لا يتحسن أو يتفاقم بسرعة.",
  "حمى مستمرة أو قشعريرة أو علامات عدوى.",
  "دوخة شديدة أو إغماء أو صعوبة في التنفس.",
  "أعراض حمل خارج الرحم محتملة مع ألم حاد في جانب واحد.",
];
