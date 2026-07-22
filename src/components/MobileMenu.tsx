"use client";

import { useEffect } from "react";
import type { NavItem } from "@/lib/site";
import { DOCTOR_WHATSAPP_MESSAGE } from "@/lib/site";
import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
};

export function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="القائمة">
      <button
        type="button"
        className="absolute inset-0 bg-navy-deep/55"
        aria-label="إغلاق القائمة"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto border-b border-navy/10 bg-warm px-4 pb-8 pt-4 shadow-lift">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-navy">القائمة</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-navy/10 bg-white text-navy"
            aria-label="إغلاق"
          >
            ✕
          </button>
        </div>
        <nav className="mt-4" aria-label="التنقل للجوال">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-navy transition hover:bg-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <WhatsAppButton
          label="استشارة مجانية"
          message={DOCTOR_WHATSAPP_MESSAGE}
          className="mt-5 w-full"
        />
      </div>
    </div>
  );
}
