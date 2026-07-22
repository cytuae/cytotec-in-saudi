type TrustChecklistProps = {
  title?: string;
  items: string[];
};

export function TrustChecklist({
  title = "قائمة تحقق سريعة",
  items,
}: TrustChecklistProps) {
  return (
    <div className="card-surface p-5 sm:p-6">
      <h3 className="heading-sub text-xl">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-7 text-ink/80 sm:text-base">
            <span
              aria-hidden="true"
              className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-xs font-bold text-success"
            >
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
