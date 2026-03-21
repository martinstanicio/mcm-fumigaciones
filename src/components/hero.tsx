import hero from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { description, title } from "@/content/metadata";
import {
  IconMessageCircleDollar,
  IconCircleCheck,
  IconBug,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  "Productos habilitados por ANMAT y SENASA",
  "Empresa habilitada por el Ministerio de Asuntos Agrarios",
  "Cobertura en todo el Partido de Escobar y alrededores",
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
            Manejo Integrado de Plagas
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg leading-relaxed text-gray-200">{description}</p>

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
                href="#contacto"
                className="flex items-center justify-center gap-2"
              >
                <IconMessageCircleDollar />
                <span>¡Pedí tu presupuesto!</span>
              </Link>
            </Button>
            <Button size="lg" variant="glass" asChild>
              <Link
                href="#servicios"
                className="flex items-center justify-center gap-2"
              >
                <IconBug />
                <span>Nuestros servicios</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
