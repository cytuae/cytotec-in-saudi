"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!message) return;

    // Frontend-only: يجهّز الرسالة محليًا دون إرسال إلى خادم.
    const subject = encodeURIComponent("استفسار من موقع Cytotec in Saudi");
    const body = encodeURIComponent(
      `الاسم/اللقب التواصلي: ${name || "غير محدد"}\n\nالرسالة:\n${message}`
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4 p-5 sm:p-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
          الاسم أو لقب تواصلي (اختياري)
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="min-h-11 w-full rounded-xl border border-navy/15 bg-white px-4 text-sm outline-none ring-gold/40 focus:ring-2"
          placeholder="يمكنكِ استخدام اسم مستعار"
        />
      </div>

      <div>
        <label htmlFor="topic" className="mb-2 block text-sm font-semibold text-navy">
          موضوع الاستفسار
        </label>
        <select
          id="topic"
          name="topic"
          className="min-h-11 w-full rounded-xl border border-navy/15 bg-white px-4 text-sm outline-none ring-gold/40 focus:ring-2"
          defaultValue="verification"
        >
          <option value="verification">التحقق والمصطلحات</option>
          <option value="price">السعر والعروض</option>
          <option value="privacy">الخصوصية</option>
          <option value="other">استفسار عام</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
          رسالتك
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none ring-gold/40 focus:ring-2"
          placeholder="اكتبي سؤالك العام دون تفاصيل حساسة غير لازمة"
        />
      </div>

      <p className="text-sm leading-7 text-ink/65">
        هذا النموذج يعمل من الواجهة فقط. تجنّبي إرسال بيانات وثائق أو معلومات طبية دقيقة
        غير ضرورية. للاستفسارات العاجلة طبيًا توجهي مباشرة للخدمات المختصة.
      </p>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        تجهيز رسالة الاستفسار
      </button>

      {submitted ? (
        <p className="alert-success" role="status">
          تم تجهيز الرسالة عبر تطبيق البريد على جهازكِ إن كان متاحًا. يمكنكِ أيضًا استخدام
          واتساب إن كان مفعّلًا في إعدادات النشر.
        </p>
      ) : null}
    </form>
  );
}
