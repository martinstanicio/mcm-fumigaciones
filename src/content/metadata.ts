import { plagues } from "./plagues";
import type { Metadata, Viewport } from "next";

export const siteName = "MCM Fumigaciones";
export const title = "Protegemos tu hogar y negocio de plagas";
export const description =
  "Especialistas en fumigación y control de plagas en Escobar. Eliminamos cucarachas, roedores, hormigas y más en hogares y comercios.";
export const keywords = [
  siteName,
  ...plagues,
  "servicios de fumigación",
  "fumigaciones",
  "fumigación",
  "fumigación comercios",
  "fumigación hogares",
  "fumigación Escobar",
  "fumigación Garín",
  "fumigación Maschwitz",
  "fumigación Maquinista Savio",
  "fumigación Matheu",
  "fumigación Zelaya",
  "fumigación Zona Norte",
  "fumigación Buenos Aires",
  "fumigación cucarachas",
  "fumigación mosquitos",
  "fumigación pulgas",
  "fumigación urgencia",
  "control plagas",
  "control plagas residencial",
  "control escorpiones",
  "control roedores",
  "desratización",
  "eliminar hormigas",
  "eliminar plagas",
  "exterminar chinches de cama",
  "presupuesto de fumigación",
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
