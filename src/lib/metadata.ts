import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME, SITE_NAME_AR } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  // Use the provided title as-is when it is already a complete document title.
  const fullTitle =
    title.includes("|") || title.includes(SITE_NAME_AR)
      ? title
      : `${title} | ${SITE_NAME_AR}`;

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ar_SA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
