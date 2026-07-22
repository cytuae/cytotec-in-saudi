import Link from "next/link";

export type Crumb = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="مسار التنقل" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/65">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true" className="text-ink/30">/</span> : null}
              {isLast ? (
                <span aria-current="page" className="font-medium text-navy">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition hover:text-navy">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
