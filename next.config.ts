import type { NextConfig } from "next";

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971547952044").replace(
  /\D/g,
  "",
);

if (process.env.VERCEL_ENV === "production" && !whatsappNumber) {
  throw new Error("Production blocked: NEXT_PUBLIC_WHATSAPP_NUMBER is missing.");
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
