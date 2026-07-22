import Link from "next/link";
import { footerNav, legalNav, SITE_NAME, SITE_NAME_AR } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-navy-deep text-warm">
      <div className="container-site section-y">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-lg font-bold">{SITE_NAME_AR}</span>
              <span className="mt-1 block text-sm text-warm/60">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-warm/70">
              سايتوتك في السعودية مع استشارة أولية مجانية وسرية مع الدكتورة عهود توفيق، استشارية
              نساء وتوليد وخريجة إمبريال كوليدج لندن.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gold">صفحات أساسية</p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm/75 transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-gold">قانونية</p>
            <ul className="mt-4 space-y-2.5">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm/75 transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm leading-7 text-warm/65">
            المعلومات العامة لا تغني عن تقييم الحالة طبيًا. عند وجود نزيف شديد، ألم غير محتمل،
            إغماء أو أعراض مقلقة، يجب طلب الرعاية الطبية العاجلة.
          </p>
          <p className="mt-3 text-sm text-warm/55">
            © {year}{" "}
            <Link href="/" className="hover:text-gold">
              {SITE_NAME}
            </Link>
            . جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
