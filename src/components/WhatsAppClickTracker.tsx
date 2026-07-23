"use client";

import { useEffect } from "react";
import {
  isWhatsAppHref,
  resolveCtaLocation,
  trackWhatsAppClick,
} from "@/lib/analytics";

const trackedPointerEvents = new WeakSet<Event>();

function findWhatsAppAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null;
  const anchor = target.closest("a");
  if (!(anchor instanceof HTMLAnchorElement)) return null;
  const href = anchor.getAttribute("href");
  return isWhatsAppHref(href) ? anchor : null;
}

function handleWhatsAppInteraction(event: Event) {
  if (trackedPointerEvents.has(event)) return;

  const anchor = findWhatsAppAnchor(event.target);
  if (!anchor) return;

  trackedPointerEvents.add(event);

  const href = anchor.href || anchor.getAttribute("href") || "";
  const linkText =
    anchor.getAttribute("aria-label")?.trim() ||
    anchor.textContent?.replace(/\s+/g, " ").trim() ||
    "";

  trackWhatsAppClick({
    linkUrl: href,
    linkText,
    ctaLocation: resolveCtaLocation(anchor),
  });
}

/**
 * Captures WhatsApp link clicks site-wide (wa.me, api.whatsapp.com, whatsapp://).
 * Uses capture + WeakSet so the same browser event is never counted twice.
 */
export function WhatsAppClickTracker() {
  useEffect(() => {
    document.addEventListener("click", handleWhatsAppInteraction, true);
    document.addEventListener("auxclick", handleWhatsAppInteraction, true);
    return () => {
      document.removeEventListener("click", handleWhatsAppInteraction, true);
      document.removeEventListener("auxclick", handleWhatsAppInteraction, true);
    };
  }, []);

  return null;
}
