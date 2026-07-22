import {
  absoluteUrl,
  DOCTOR,
  DOCTOR_CREDENTIALS_VERIFIED,
  SITE_NAME,
  SITE_NAME_AR,
  SITE_URL,
} from "./site";

type FaqItem = { question: string; answer: string };
type Crumb = { name: string; path: string };

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: SITE_NAME_AR,
    url: SITE_URL,
    inLanguage: "ar",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: SITE_NAME_AR,
    url: SITE_URL,
    description:
      "معلومات عن سايتوتك والميزوبروستول في السعودية مع استشارة مجانية وسرية مع الدكتورة عهود توفيق.",
  };
}

/** Person schema only — never Physician / MedicalClinic / license while unverified. */
export function doctorPersonSchema() {
  const person: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DOCTOR.name,
    jobTitle: DOCTOR.title,
    description: DOCTOR.experience,
    url: absoluteUrl(DOCTOR.href),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: DOCTOR.educationEn,
    },
    areaServed: ["Dubai", "Riyadh"],
  };

  // TODO: When DOCTOR_CREDENTIALS_VERIFIED becomes true, add license, clinic, worksFor, sameAs.
  if (DOCTOR_CREDENTIALS_VERIFIED) {
    // Reserved for verified credentials only.
  }

  return person;
}

export function doctorReviewedBy() {
  return {
    "@type": "Person",
    name: DOCTOR.name,
    jobTitle: DOCTOR.title,
    url: absoluteUrl(DOCTOR.href),
  };
}

export function webPageSchema({
  title,
  description,
  path,
  dateModified,
  datePublished,
  lastReviewed,
  medical = false,
}: {
  title: string;
  description: string;
  path: string;
  dateModified?: string;
  datePublished?: string;
  lastReviewed?: string;
  medical?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": medical ? "MedicalWebPage" : "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: "ar",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(lastReviewed
      ? {
          lastReviewed,
          reviewedBy: doctorReviewedBy(),
        }
      : {}),
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
