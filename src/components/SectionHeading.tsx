type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  as?: "h1" | "h2" | "h3";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  as = "h2",
  id,
}: SectionHeadingProps) {
  const Tag = as;
  const alignClass = align === "center" ? "text-center mx-auto" : "text-start";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? <span className="badge mb-3">{eyebrow}</span> : null}
      <Tag id={id} className={as === "h1" ? "heading-display" : "heading-section"}>
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-[18px] leading-[1.75] text-ink/75">{description}</p>
      ) : null}
    </div>
  );
}
