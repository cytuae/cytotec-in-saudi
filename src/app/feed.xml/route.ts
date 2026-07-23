import { buildRssXml } from "@/lib/feed";

export const dynamic = "force-static";
export const revalidate = false;

export function GET() {
  const xml = buildRssXml();

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
