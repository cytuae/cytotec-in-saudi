type PageIntroProps = {
  h1: string;
  paragraphs: string[];
  badge?: string;
};

export function PageIntro({ h1, paragraphs, badge }: PageIntroProps) {
  return (
    <header className="max-w-3xl">
      {badge ? <span className="badge mb-4">{badge}</span> : null}
      <h1 className="heading-display">{h1}</h1>
      <div className="prose-site mt-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </header>
  );
}
