export const SITE_URL = "https://cytotec-in-saudi.com";
export const SITE_NAME = "Cytotec in Saudi";
export const SITE_NAME_AR = "سايتوتك في السعودية";
export const SITE_DESCRIPTION =
  "معلومات مباشرة عن سايتوتك والميزوبروستول وحبوب تنزيل الحمل في السعودية، مع استشارة أولية مجانية وسرية مع الدكتورة عهود توفيق.";

export const LAST_CONTENT_UPDATE = "2026-07-22";
export const DATE_PUBLISHED = "2026-07-22";

/**
 * When true, verified professional credentials may be added (license, clinic, sameAs).
 * Keep false until licenses/hospital/sameAs are documented with real proof.
 */
export const DOCTOR_CREDENTIALS_VERIFIED = false;

export const DOCTOR = {
  name: "الدكتورة عهود توفيق",
  shortName: "د. عهود توفيق",
  personName: "الدكتورة عهود توفيق",
  title: "استشارية نساء وتوليد",
  education: "خريجة إمبريال كوليدج لندن",
  educationEn: "Imperial College London",
  areaServedLabel: "تقدم استشارات خاصة للنساء من دبي والرياض",
  /** Unified public bio line used across the site. */
  experience:
    "خريجة إمبريال كوليدج لندن، وتقدم استشارات خاصة للنساء من دبي والرياض.",
  experienceShort:
    "خريجة إمبريال كوليدج لندن، وتقدم استشارات خاصة للنساء من دبي والرياض.",
  consultation: "استشارة أولية مجانية وسرية",
  initials: "ع ت",
  href: "/dr-ohood-tawfik",
  phoneDisplay: "+971 54 795 2044",
} as const;

export const WHATSAPP_NUMBER = "971547952044";

export const DOCTOR_WHATSAPP_MESSAGE =
  "مرحبًا دكتورة عهود، أرغب في استشارة مجانية وسرية.";

export const MONEY_PAGE_CTA = {
  title: "تحتاجين إلى جواب يناسب حالتك؟",
  description:
    "ابدئي استشارة أولية مجانية وسرية مع الدكتورة عهود توفيق لمناقشة الأسئلة المتعلقة بحالتك والمعلومات التي تحتاجينها قبل اتخاذ أي قرار.",
  buttonLabel: "ابدئي الاستشارة المجانية عبر واتساب",
} as const;

export type NavItem = {
  href: string;
  label: string;
};

export const mainNav: NavItem[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/buy-cytotec-saudi", label: "شراء سايتوتك" },
  { href: "/abortion-pills-saudi", label: "حبوب الإجهاض" },
  { href: "/pregnancy-pills-saudi", label: "حبوب تنزيل الحمل" },
  { href: "/cytotec-price-saudi", label: "السعر والتوفر" },
  { href: "/misoprostol-saudi", label: "ميزوبروستول" },
  { href: DOCTOR.href, label: "الدكتورة عهود" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/contact", label: "تواصل معنا" },
];

export const footerNav: NavItem[] = [
  { href: "/buy-cytotec-saudi", label: "شراء سايتوتك في السعودية" },
  { href: "/abortion-pills-saudi", label: "حبوب الإجهاض في السعودية" },
  { href: "/pregnancy-pills-saudi", label: "حبوب تنزيل الحمل" },
  { href: "/cytotec-price-saudi", label: "سعر سايتوتك في السعودية" },
  { href: "/misoprostol-saudi", label: "ميزوبروستول في السعودية" },
  { href: "/original-cytotec", label: "الأصلي والتحقق" },
  { href: "/availability", label: "التوفر" },
  { href: DOCTOR.href, label: "استشارة الدكتورة عهود" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/about", label: "عن الموقع" },
  { href: "/contact", label: "تواصل معنا" },
];

export const legalNav: NavItem[] = [
  { href: "/privacy", label: "سياسة الخصوصية" },
  { href: "/terms", label: "الشروط والأحكام" },
  { href: "/disclaimer", label: "إخلاء المسؤولية" },
  { href: "/editorial-policy", label: "سياسة التحرير" },
];

export function getWhatsAppNumber(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  return fromEnv || WHATSAPP_NUMBER;
}

export function getWhatsAppUrl(message?: string): string {
  const number = getWhatsAppNumber();
  const text = encodeURIComponent(message ?? DOCTOR_WHATSAPP_MESSAGE);
  return `https://wa.me/${number}?text=${text}`;
}

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}
