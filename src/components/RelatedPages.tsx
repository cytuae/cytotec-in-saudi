import Link from "next/link";
import type { RelatedLink } from "@/lib/types";

type RelatedPagesProps = {
  pages: RelatedLink[];
  title?: string;
};

export function RelatedPages({ pages, title = "صفحات ذات صلة" }: RelatedPagesProps) {
  return (
    <section aria-labelledby="related-heading">
      <h2 id="related-heading" className="heading-section">
        {title}
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="card-surface group block p-5 transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            <h3 className="text-lg font-semibold text-navy group-hover:text-navy-deep">
              {page.title}
            </h3>
            <p className="mt-2 text-[18px] leading-[1.75] text-ink/70">{page.description}</p>
            <span className="mt-4 inline-flex text-sm font-semibold text-gold">اقرأ المزيد ←</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
