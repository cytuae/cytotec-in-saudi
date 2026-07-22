import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site section-y pb-28 md:pb-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="badge mx-auto">404</p>
        <h1 className="heading-display mt-4">الصفحة غير موجودة</h1>
        <p className="mt-4 text-base leading-8 text-ink/70">
          الرابط قد يكون قديمًا أو مكتوبًا بشكل غير صحيح. يمكنكِ العودة للرئيسية أو فتح الأسئلة
          الشائعة.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            الصفحة الرئيسية
          </Link>
          <Link href="/faq" className="btn-secondary">
            الأسئلة الشائعة
          </Link>
          <Link href="/contact" className="btn-secondary">
            تواصل معنا
          </Link>
        </div>
      </div>
    </div>
  );
}
