"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DOCTOR_WHATSAPP_MESSAGE, mainNav, SITE_NAME_AR } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-navy/8 bg-warm/90 backdrop-blur-md">
        <div className="container-site flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link href="/" className="min-w-0 shrink-0" aria-label="الصفحة الرئيسية">
            <span className="block text-sm font-bold tracking-wide text-navy sm:text-base">
              {SITE_NAME_AR}
            </span>
            <span className="block text-[11px] text-ink/55">Cytotec in Saudi</span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="التنقل الرئيسي">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-2.5 py-2 text-[13px] font-medium transition ${
                    active
                      ? "bg-navy text-warm"
                      : "text-ink/75 hover:bg-white hover:text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <WhatsAppButton
              label="استشارة مجانية"
              message={DOCTOR_WHATSAPP_MESSAGE}
              className="hidden min-h-10 px-4 text-sm sm:inline-flex"
            />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-navy/10 bg-white text-navy xl:hidden"
              aria-label="فتح القائمة"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span aria-hidden="true" className="text-lg leading-none">
                ☰
              </span>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} items={mainNav} />
    </>
  );
}
