import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { formattedPhone, phone } from "@/content/contact-info";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  IconPhone,
  IconMessageCircle,
  IconCircleCheck,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  "Productos certificados y seguros",
  "Garantía de satisfacción",
  "Cobertura en todo el Partido de Escobar",
];

export function Hero() {
  return (
    <section id="inicio" className="relative">
      <Image
        src={hero}
        alt="Servicio profesional de fumigación"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-20"
        priority
      />

      <div className="container mx-auto px-4 py-24 lg:py-32 xl:max-w-7xl">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            Control de plagas profesional
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Protegemos tu hogar y negocio de plagas
          </h1>
          <p className="text-lg leading-relaxed text-gray-200">
            Empresa familiar especializada en control de plagas en hogares y
            comercios. Eliminamos cucarachas, hormigas, roedores y más.
          </p>

          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-white">
                <IconCircleCheck className="text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link
                href={getWhatsAppLink(
                  phone,
                  "Hola, estoy interesado en sus servicios de fumigación. ¿Podrían brindarme más información?",
                ).toString()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconMessageCircle />
                <span>¡Pedí tu presupuesto!</span>
              </Link>
            </Button>
            <Button size="lg" variant="glass" asChild>
              <Link href={`tel:+${phone}`}>
                <IconPhone />
                <span>{formattedPhone}</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
