export type TocItem = {
  id: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SourceItem = {
  title: string;
  note?: string;
  href?: string;
};

export type ContentTable = {
  headers: string[];
  rows: string[][];
};

export type ContentSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  checklist?: string[];
  table?: ContentTable;
  subsections?: {
    id?: string;
    title: string;
    paragraphs?: string[];
    bullets?: string[];
    checklist?: string[];
    table?: ContentTable;
  }[];
};

export type RelatedLink = {
  href: string;
  title: string;
  description: string;
};

export type MoneyPageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  /** Answer-first intro: one paragraph, ~70–110 words */
  intro: string[];
  lastUpdated: string;
  datePublished?: string;
  medicalPage?: boolean;
  toc: TocItem[];
  sections: ContentSection[];
  faqs: FaqItem[];
  sources: SourceItem[];
  related: RelatedLink[];
  breadcrumbs: { name: string; path: string }[];
  cta?: {
    title: string;
    description: string;
    buttonLabel?: string;
  };
};
