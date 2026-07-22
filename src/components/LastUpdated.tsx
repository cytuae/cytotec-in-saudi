type LastUpdatedProps = {
  date: string;
  label?: string;
};

export function LastUpdated({ date, label = "آخر تحديث" }: LastUpdatedProps) {
  const formatted = new Intl.DateTimeFormat("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));

  return (
    <p className="mt-4 text-sm text-ink/60">
      <span className="font-medium text-ink/80">{label}:</span> {formatted}
    </p>
  );
}
