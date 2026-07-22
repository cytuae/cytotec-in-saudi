import type { TocItem } from "@/lib/types";

type TableOfContentsProps = {
  items: TocItem[];
  title?: string;
};

export function TableOfContents({
  items,
  title = "محتويات الصفحة",
}: TableOfContentsProps) {
  return (
    <nav aria-label={title} className="card-surface p-5 sm:p-6">
      <p className="text-sm font-semibold text-navy">{title}</p>
      <ol className="mt-4 space-y-2.5">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-start gap-3 text-sm leading-6 text-ink/75 transition hover:text-navy"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-mist text-xs font-semibold text-navy group-hover:bg-gold/20">
                {index + 1}
              </span>
              <span className="underline-offset-4 group-hover:underline">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
