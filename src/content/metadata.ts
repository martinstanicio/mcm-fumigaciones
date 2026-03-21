import { plagues } from "./plagues";
import type { Metadata, Viewport } from "next";

export const siteName = "MCM Fumigaciones";
export const title = "Protegemos tu hogar y negocio de plagas";
export const description =
  "Especialistas en control de plagas para comercios, oficinas, fábricas, viviendas, barrios privados, clubes de campo y más.";
export const keywords = [
  siteName,
  ...plagues,
  "control de plagas",
  "fumigaciones",
  "eliminación de plagas",
  "servicios de fumigación",
  "fumigación de comercios",
  "fumigación de hogares",
  "escobar",
  "buenos aires",
];
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
