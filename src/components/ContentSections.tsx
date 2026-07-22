import Link from "next/link";
import type { ContentSection, ContentTable } from "@/lib/types";

type ContentSectionsProps = {
  sections: ContentSection[];
};

function renderCell(cell: string) {
  if (cell.startsWith("/") && !cell.includes(" ")) {
    return (
      <Link href={cell} className="font-medium text-navy underline underline-offset-4 hover:text-gold">
        {cell}
      </Link>
    );
  }
  return cell;
}

function ContentTableView({ table }: { table: ContentTable }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-2xl border border-navy/10 bg-white">
      <table className="min-w-full text-right text-[18px] leading-[1.7]">
        <thead className="bg-mist/80 text-navy">
          <tr>
            {table.headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join("-")} className="border-t border-navy/10 align-top">
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${index}`}
                  className={`px-4 py-3 ${index === 0 ? "font-medium text-navy" : "text-ink/80"}`}
                >
                  {renderCell(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 rounded-2xl border border-success/20 bg-[#F1F8F5] p-5 text-[18px] leading-[1.75] text-ink/85">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-xs font-bold text-success"
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <h2 className="heading-section">{section.title}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 64)} className="prose-site mt-5">
              {paragraph}
            </p>
          ))}
          {section.bullets?.length ? (
            <ul className="mt-5 space-y-3 text-[18px] leading-[1.75] text-ink/85">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {section.checklist?.length ? <Checklist items={section.checklist} /> : null}
          {section.table ? <ContentTableView table={section.table} /> : null}
          {section.subsections?.map((sub) => (
            <div key={sub.title} id={sub.id} className="mt-7 scroll-mt-28">
              <h3 className="heading-sub text-xl">{sub.title}</h3>
              {sub.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 64)} className="prose-site mt-4">
                  {paragraph}
                </p>
              ))}
              {sub.bullets?.length ? (
                <ul className="mt-4 space-y-3 text-[18px] leading-[1.75] text-ink/85">
                  {sub.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {sub.checklist?.length ? <Checklist items={sub.checklist} /> : null}
              {sub.table ? <ContentTableView table={sub.table} /> : null}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
