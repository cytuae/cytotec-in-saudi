"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/lib/types";

type FAQAccordionProps = {
  items: FaqItem[];
  title?: string;
};

export function FAQAccordion({ items, title = "أسئلة شائعة" }: FAQAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-28" aria-labelledby={`${baseId}-title`}>
      <h2 id={`${baseId}-title`} className="heading-section">
        {title}
      </h2>
      <div className="mt-6 divide-y divide-navy/10 overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;

          return (
            <div key={item.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-start text-[18px] font-semibold leading-[1.5] text-navy transition hover:bg-warm/70 sm:px-5 sm:py-5"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy/10 text-lg leading-none text-gold transition ${
                      isOpen ? "rotate-45 bg-navy text-gold" : "bg-warm"
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-4 pb-5 text-[18px] leading-[1.75] text-ink/80 sm:px-5"
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
