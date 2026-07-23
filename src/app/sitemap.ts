import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  "/",
  "/abortion-pills-saudi",
  "/pregnancy-pills-saudi",
  "/buy-cytotec-saudi",
  "/cytotec-price-saudi",
  "/misoprostol-saudi",
  "/original-cytotec",
  "/availability",
  "/cytotec-riyadh",
  "/cytotec-jeddah",
  "/cytotec-dammam",
  "/dr-ohood-tawfik",
  "/faq",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/editorial-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-22");

  return routes.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("privacy") || route.includes("terms") ? 0.4 : 0.8,
  }));
}
