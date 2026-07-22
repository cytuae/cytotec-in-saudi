import type { SourceItem } from "@/lib/types";

type SourceListProps = {
  sources: SourceItem[];
  title?: string;
};

export function SourceList({ sources, title = "مصادر ومراجع عامة" }: SourceListProps) {
  return (
    <section aria-labelledby="sources-heading" className="card-surface p-5 sm:p-6">
      <h2 id="sources-heading" className="heading-sub">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-7 text-ink/70">
        نعرض مصادر عامة للمساعدة على التحقق. لا يعني ذكر مصدر تأييدًا لمنتج أو خدمة تجارية.
      </p>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <li
            key={source.title}
            className="rounded-xl border border-navy/8 bg-warm/60 px-4 py-3 text-sm leading-7"
          >
            {source.href ? (
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-inline"
              >
                {source.title}
              </a>
            ) : (
              <span className="font-medium text-navy">{source.title}</span>
            )}
            {source.note ? <p className="mt-1 text-ink/70">{source.note}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
