export type CtaLocation =
  | "header"
  | "hero"
  | "content"
  | "lead_form"
  | "footer"
  | "sticky_mobile"
  | "sticky_desktop"
  | "contact_page"
  | "unknown";

export type WhatsAppClickParams = {
  linkUrl: string;
  linkText: string;
  ctaLocation: CtaLocation;
  pagePath?: string;
  pageTitle?: string;
};

const CITY_BY_PATH: Record<string, string> = {
  "/cytotec-riyadh": "riyadh",
  "/cytotec-jeddah": "jeddah",
  "/cytotec-dammam": "dammam",
  "/cytotec-makkah": "makkah",
  "/cytotec-madinah": "madinah",
  "/cytotec-khobar": "khobar",
  "/cytotec-qassim": "qassim",
  "/cytotec-taif": "taif",
};

const WHATSAPP_HOST_RE = /(?:^|\.)(?:wa\.me|api\.whatsapp\.com)$/i;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getGaMeasurementId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  return id || undefined;
}

export function cityFromPath(pathname: string): string {
  const path = pathname.split("?")[0]?.replace(/\/$/, "") || "/";
  const normalized = path === "" ? "/" : path;
  return CITY_BY_PATH[normalized] ?? "national";
}

export function getDeviceType(): "mobile" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  return window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop";
}

/** Strip message text and other query params — never send WhatsApp message body to GA. */
export function sanitizeWhatsAppUrl(href: string): string {
  try {
    if (href.startsWith("whatsapp:")) {
      const [base] = href.split("?");
      return base || href;
    }
    const url = new URL(href, typeof window !== "undefined" ? window.location.origin : "https://cytotec-in-saudi.com");
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch {
    return href.split("?")[0] || href;
  }
}

export function isWhatsAppHref(href: string | null | undefined): boolean {
  if (!href) return false;
  const value = href.trim();
  if (!value) return false;
  if (value.toLowerCase().startsWith("whatsapp:")) return true;
  try {
    const url = new URL(value, typeof window !== "undefined" ? window.location.origin : "https://cytotec-in-saudi.com");
    return WHATSAPP_HOST_RE.test(url.hostname);
  } catch {
    return /wa\.me|api\.whatsapp\.com/i.test(value);
  }
}

let lastEventKey = "";
let lastEventAt = 0;

/**
 * Sends whatsapp_click once per physical interaction (800ms dedupe window).
 * Failures are swallowed so WhatsApp navigation is never blocked.
 */
export function trackWhatsAppClick(params: WhatsAppClickParams): void {
  try {
    if (typeof window === "undefined") return;

    const linkUrl = sanitizeWhatsAppUrl(params.linkUrl);
    const pagePath = params.pagePath || window.location.pathname || "/";
    const pageTitle = params.pageTitle || document.title || "";
    const ctaLocation = params.ctaLocation || "unknown";
    const linkText = (params.linkText || "").trim().slice(0, 120);

    const key = `${pagePath}|${ctaLocation}|${linkUrl}|${linkText}`;
    const now = Date.now();
    if (key === lastEventKey && now - lastEventAt < 800) {
      return;
    }
    lastEventKey = key;
    lastEventAt = now;

    if (typeof window.gtag !== "function") return;

    window.gtag("event", "whatsapp_click", {
      page_path: pagePath,
      page_title: pageTitle,
      link_url: linkUrl,
      link_text: linkText,
      cta_location: ctaLocation,
      city: cityFromPath(pagePath),
      device_type: getDeviceType(),
      transport_type: "beacon",
    });
  } catch {
    // Analytics must never block WhatsApp.
  }
}

export function resolveCtaLocation(el: Element | null): CtaLocation {
  const raw = el?.closest("[data-cta-location]")?.getAttribute("data-cta-location");
  const allowed: CtaLocation[] = [
    "header",
    "hero",
    "content",
    "lead_form",
    "footer",
    "sticky_mobile",
    "sticky_desktop",
    "contact_page",
    "unknown",
  ];
  if (raw && (allowed as string[]).includes(raw)) {
    return raw as CtaLocation;
  }
  return "unknown";
}
