"use client";

import { FormEvent, useState } from "react";
import { DOCTOR, getWhatsAppUrl } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

const topics = [
  "سايتوتك",
  "حبوب الإجهاض",
  "حبوب تنزيل الحمل",
  "السعر والتوفر",
  "استفسار آخر",
] as const;

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("firstName") || "").trim();
    const city = String(data.get("city") || "").trim();
    const topic = String(data.get("topic") || "").trim();

    const lines = [
      "مرحبًا دكتورة عهود، أرغب في استشارة مجانية وسرية.",
      name ? `الاسم: ${name}` : null,
      city ? `المدينة: ${city}` : null,
      topic ? `موضوع الاستشارة: ${topic}` : null,
    ].filter(Boolean);

    const url = getWhatsAppUrl(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4 p-5 sm:p-6">
      <div>
        <h2 className="heading-sub text-xl">اطلبي استشارتك المجانية</h2>
        <p className="mt-2 text-[18px] leading-[1.75] text-ink/70">
          أكملي الحقول المختصرة ثم تابعي مباشرة مع {DOCTOR.shortName} عبر واتساب.
        </p>
      </div>

      <div>
        <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-navy">
          الاسم الأول (اختياري)
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          autoComplete="given-name"
          className="min-h-11 w-full rounded-xl border border-navy/15 bg-white px-4 text-sm outline-none ring-gold/40 focus:ring-2"
          placeholder="يمكنكِ استخدام اسم مستعار"
        />
      </div>

      <div>
        <label htmlFor="city" className="mb-2 block text-sm font-semibold text-navy">
          المدينة
        </label>
        <input
          id="city"
          name="city"
          type="text"
          required
          className="min-h-11 w-full rounded-xl border border-navy/15 bg-white px-4 text-sm outline-none ring-gold/40 focus:ring-2"
          placeholder="مثال: الرياض"
        />
      </div>

      <div>
        <label htmlFor="topic" className="mb-2 block text-sm font-semibold text-navy">
          موضوع الاستشارة
        </label>
        <select
          id="topic"
          name="topic"
          required
          className="min-h-11 w-full rounded-xl border border-navy/15 bg-white px-4 text-sm outline-none ring-gold/40 focus:ring-2"
          defaultValue="سايتوتك"
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn-gold w-full">
        <WhatsAppIcon className="h-[1.15rem] w-[1.15rem] shrink-0" />
        <span>متابعة عبر واتساب</span>
      </button>

      <p className="text-[18px] leading-[1.75] text-ink/65">
        يمكنكِ مشاركة التفاصيل الطبية مباشرة مع الدكتورة أثناء الاستشارة الخاصة.
      </p>

      {submitted ? (
        <p className="alert-success" role="status">
          تم فتح واتساب برسالة مهيأة. يمكنكِ المتابعة من هناك مباشرة.
        </p>
      ) : null}
    </form>
  );
}
