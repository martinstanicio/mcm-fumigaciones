import type { Metadata, Viewport } from "next";

export const siteName = "MCM Fumigaciones";
export const title = "";
export const description = "";
export const keywords = [siteName];
export const url = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
  : undefined;

export const viewport: Viewport = { colorScheme: "only light" };

export const metadata: Metadata = {
  metadataBase: url,
  title: `${title} | ${siteName}`,
  description,
  generator: "Next.js",
  keywords,
  creator: "Martín Stanicio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${title} | ${siteName}`,
    description,
    siteName,
    locale: "es_AR",
    url: "/",
  },
};
