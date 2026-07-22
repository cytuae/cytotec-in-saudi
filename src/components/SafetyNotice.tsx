import type { ReactNode } from "react";

type SafetyNoticeProps = {
  variant?: "warning" | "info";
  title?: string;
  children?: ReactNode;
};

export function SafetyNotice({
  variant = "warning",
  title = "تنبيه طبي وقانوني",
  children,
}: SafetyNoticeProps) {
  return (
    <aside
      className={variant === "warning" ? "alert-warning" : "alert-info"}
      role="note"
      aria-label={title}
    >
      <p className="font-semibold text-navy">{title}</p>
      <div className="mt-2 space-y-2 leading-7 text-ink/85">
        {children ?? (
          <>
            <p>
              المحتوى في هذا الموقع للتوعية العامة فقط، ولا يُعد تشخيصًا طبيًا أو وصفة أو
              تعليمات جرعات شخصية، ولا يغني عن استشارة جهة طبية مختصة.
            </p>
            <p>
              لا ندّعي ترخيصًا أو توفرًا أو أصالة منتج أو بيعًا مباشرًا دون دليل موثق. أي قرار
              يتعلق بالصحة يجب أن يُبنى على تقييم مهني مناسب للوضع القانوني والطبي.
            </p>
          </>
        )}
      </div>
    </aside>
  );
}
