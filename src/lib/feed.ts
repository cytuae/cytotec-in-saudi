import { SITE_URL } from "@/lib/site";

export type FeedItem = {
  title: string;
  path: string;
  description: string;
  /** ISO date YYYY-MM-DD — stable until content is republished */
  pubDate: string;
};

/** Initial core content publish date (stable). */
const PUB_CORE = "2026-07-22";
/** City pages batch publish date (stable). */
const PUB_CITIES = "2026-07-23";
/** Supporting pages first published with the initial site (stable). */
const PUB_SUPPORT = "2026-07-22";
/** Last actual feed publication / rebuild (stable; update only when feed is republished). */
const FEED_LAST_BUILD = "2026-07-23";

/**
 * Stable content catalog for RSS.
 * Excludes privacy, terms, disclaimer, and contact.
 * Descriptions stay short and avoid WhatsApp numbers or clinician bio details.
 */
export const FEED_ITEMS: FeedItem[] = [
  {
    title: "سايتوتك في السعودية",
    path: "/",
    description:
      "نقطة انطلاق لفهم مصطلحات سايتوتك والميزوبروستول وحبوب تنزيل الحمل، مع توجيه نحو الصفحة الأنسب لكل نية بحث.",
    pubDate: PUB_CORE,
  },
  {
    title: "شراء سايتوتك في السعودية",
    path: "/buy-cytotec-saudi",
    description:
      "إطار عملي لأسئلة التحقق من المادة والعبوة والمصدر قبل أي تعامل، دون اختلاق أسعار أو مخزون.",
    pubDate: PUB_CORE,
  },
  {
    title: "حبوب الإجهاض في السعودية",
    path: "/abortion-pills-saudi",
    description:
      "توضيح المصطلحات والفروق العامة حول حبوب الإجهاض، مع حدود المعلومات العامة ومتى يلزم تقييم أوسع.",
    pubDate: PUB_CORE,
  },
  {
    title: "حبوب تنزيل الحمل في السعودية",
    path: "/pregnancy-pills-saudi",
    description:
      "تفكيك المرادفات الشائعة لحبوب تنزيل الحمل وتمييز المقاصد المتداخلة قبل أي استنتاج من البحث وحده.",
    pubDate: PUB_CORE,
  },
  {
    title: "سعر سايتوتك في السعودية",
    path: "/cytotec-price-saudi",
    description:
      "قراءة عوامل اختلاف السعر والتوفر دون رقم مختلق، مع التركيز على سياق العبوة والمصدر.",
    pubDate: PUB_CORE,
  },
  {
    title: "ميزوبروستول في السعودية",
    path: "/misoprostol-saudi",
    description:
      "تثبيت المادة الفعالة والفرق عن الأسماء التجارية والأخطاء الإملائية الشائعة في نتائج البحث.",
    pubDate: PUB_CORE,
  },
  {
    title: "سايتوتك الأصلي والتحقق",
    path: "/original-cytotec",
    description:
      "منهج تحقق من بيانات العبوة ورقم التشغيلة وحدود الصور، دون شهادة أصالة عن بُعد.",
    pubDate: PUB_CORE,
  },
  {
    title: "هل سايتوتك متوفر في السعودية؟",
    path: "/availability",
    description:
      "التفريق بين التسجيل الدوائي والتوفر الفعلي والصرف، دون ادعاء مخزون يومي.",
    pubDate: PUB_CORE,
  },
  {
    title: "سايتوتك في الرياض",
    path: "/cytotec-riyadh",
    description:
      "زاوية الرياض: ضغط القرار، الفرق بين الاسم والمادة، والتحقق قبل مشاركة بيانات حساسة.",
    pubDate: PUB_CITIES,
  },
  {
    title: "سايتوتك في جدة",
    path: "/cytotec-jeddah",
    description:
      "زاوية جدة: فرز الإعلانات المتضاربة عن المعلومة الطبية وتقييم المصدر قبل التواصل.",
    pubDate: PUB_CITIES,
  },
  {
    title: "سايتوتك في الدمام",
    path: "/cytotec-dammam",
    description:
      "زاوية الدمام: مخاطر الإعلان المجهول ومنهج التحقق دون ادعاء فرع محلي.",
    pubDate: PUB_CITIES,
  },
  {
    title: "سايتوتك في مكة",
    path: "/cytotec-makkah",
    description:
      "زاوية مكة: التعامل مع النتائج المتضاربة والتحقق قبل القرار ضمن استشارة عن بُعد.",
    pubDate: PUB_CITIES,
  },
  {
    title: "سايتوتك في المدينة المنورة",
    path: "/cytotec-madinah",
    description:
      "زاوية المدينة المنورة: تمييز النتائج المحلية عن الأجنبية وتجهيز الأسئلة قبل القرار.",
    pubDate: PUB_CITIES,
  },
  {
    title: "سايتوتك في الخبر",
    path: "/cytotec-khobar",
    description:
      "زاوية الخبر: تقييم إعلانات المنتديات والتحقق من الادعاءات قبل أي تواصل.",
    pubDate: PUB_CITIES,
  },
  {
    title: "سايتوتك في القصيم",
    path: "/cytotec-qassim",
    description:
      "زاوية القصيم لبريدة وعنيزة: فهم تغطية المنطقة وتقييم العروض المجهولة دون ادعاء فرع.",
    pubDate: PUB_CITIES,
  },
  {
    title: "الاستشارة الأولية المجانية والسرية",
    path: "/dr-ohood-tawfik",
    description:
      "مسار استشارة أولية عن بُعد لترتيب أسئلة سايتوتك والمصطلحات المرتبطة ضمن حدود واضحة.",
    pubDate: PUB_SUPPORT,
  },
  {
    title: "الأسئلة الشائعة",
    path: "/faq",
    description:
      "إجابات مختصرة عن أكثر الأسئلة تكرارًا حول المصطلحات والمسارات المعلوماتية في الموقع.",
    pubDate: PUB_SUPPORT,
  },
  {
    title: "عن الموقع",
    path: "/about",
    description:
      "تعريف بمنهجية الموقع في تقديم معلومات عامة مرتبة وحدود الادعاء دون اختلاق توفر أو أسعار.",
    pubDate: PUB_SUPPORT,
  },
  {
    title: "سياسة التحرير",
    path: "/editorial-policy",
    description:
      "قواعد المصادر وحدود الادعاء وتحديث التواريخ ومنع اختلاق الشهادات أو الأسعار.",
    pubDate: PUB_SUPPORT,
  },
];

export const FEED_CHANNEL = {
  title: "سايتوتك في السعودية",
  link: SITE_URL,
  language: "ar-SA",
  description:
    "موجز صفحات المعلومات عن سايتوتك والميزوبروستول والمصطلحات المرتبطة في السعودية. خريطة الموقع: https://cytotec-in-saudi.com/sitemap.xml",
  selfUrl: `${SITE_URL}/feed.xml`,
  lastBuildDate: FEED_LAST_BUILD,
} as const;

export function toRfc822Date(isoDate: string): string {
  // Stable midnight UTC from YYYY-MM-DD — does not change per request.
  const date = new Date(`${isoDate}T00:00:00.000Z`);
  return date.toUTCString();
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function absoluteFeedUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildRssXml(): string {
  const lastBuildDate = toRfc822Date(FEED_CHANNEL.lastBuildDate);
  const itemsXml = FEED_ITEMS.map((item) => {
    const link = absoluteFeedUrl(item.path);
    return [
      "    <item>",
      `      <title>${escapeXml(item.title)}</title>`,
      `      <link>${escapeXml(link)}</link>`,
      `      <guid isPermaLink="true">${escapeXml(link)}</guid>`,
      `      <description>${escapeXml(item.description)}</description>`,
      `      <pubDate>${toRfc822Date(item.pubDate)}</pubDate>`,
      "    </item>",
    ].join("\n");
  }).join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escapeXml(FEED_CHANNEL.title)}</title>`,
    `    <link>${escapeXml(FEED_CHANNEL.link)}</link>`,
    `    <description>${escapeXml(FEED_CHANNEL.description)}</description>`,
    `    <language>${FEED_CHANNEL.language}</language>`,
    `    <lastBuildDate>${lastBuildDate}</lastBuildDate>`,
    `    <atom:link href="${escapeXml(FEED_CHANNEL.selfUrl)}" rel="self" type="application/rss+xml"/>`,
    itemsXml,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
}
