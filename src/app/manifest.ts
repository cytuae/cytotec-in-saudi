import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cytotec in Saudi",
    short_name: "Cytotec SA",
    description: "مرجع عربي توعوي عن سايتوتك والميزوبروستول في السعودية",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F3",
    theme_color: "#0B1F33",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
