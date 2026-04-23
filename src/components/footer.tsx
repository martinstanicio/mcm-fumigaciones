import { Brand } from "./brand";
import { OpenHours } from "./open-hours";
import { Separator } from "./ui/separator";
import { phone, simplerFormattedPhone } from "@/content/contact-info";
import { siteName } from "@/content/metadata";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { IconBrandWhatsapp, IconMapPin, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="dark bg-background text-foreground">
      <div className="container mx-auto space-y-6 p-4 py-24 xl:max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <Brand />
            <p className="max-w-md leading-relaxed text-muted-foreground">
              Empresa familiar dedicada al control de plagas desde 2018. Con
              respaldo técnico del{" "}
              <strong>Ingeniero Agrónomo Agustín Weskamp</strong>, ofrecemos
              soluciones efectivas y seguras para hogares y comercios en todo el
              Partido de Escobar.
            </p>

            <ul className="space-y-3">
              <Link
                href={getWhatsAppLink(phone).toString()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground"
              >
                <IconBrandWhatsapp />
                <span>WhatsApp</span>
              </Link>
              <Link
                href={`tel:${phone}`}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <IconPhone />
                <span>{simplerFormattedPhone}</span>
              </Link>
              <p className="flex items-center gap-3 text-muted-foreground">
                <IconMapPin />
                <span>Partido de Escobar, Buenos Aires</span>
              </p>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Horario de Atención</h2>
            <OpenHours />
          </div>
        </div>

        <Separator />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteName}.
          </p>
          <p>
            Página web diseñada por{" "}
            <Link
              href="https://www.linkedin.com/in/martinstanicio/"
              target="_blank"
              className="font-bold text-primary hover:underline focus:underline"
            >
              Martín Stanicio
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
