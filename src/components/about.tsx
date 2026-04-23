import { Card, CardContent } from "./ui/card";
import { siteName } from "@/content/metadata";
import {
  IconAward,
  IconClock,
  IconDroplets,
  IconShieldCheck,
  IconSpray,
  IconUsers,
  IconUserShield,
} from "@tabler/icons-react";

const stats = [
  {
    icon: IconClock,
    value: `${new Date().getFullYear() - 2018}+`,
    label: "Años de experiencia",
  },
  { icon: IconUsers, value: "500+", label: "Clientes satisfechos" },
  { icon: IconAward, value: "5117", label: "Habilitación N°" },
  { icon: IconShieldCheck, value: "ANMAT", label: "Productos certificados" },
];

const features = [
  {
    icon: IconDroplets,
    title: "Nebulizaciones",
    description:
      "Aplicación de micro gotas frías o calientes para mayor cobertura en ambientes cerrados y abiertos.",
  },
  {
    icon: IconSpray,
    title: "Desinfección",
    description:
      "Productos efectivos contra agentes bacterianos, virales y fúngicos. Ideal para colegios, gimnasios, clínicas, oficinas y vestuarios.",
  },
  {
    icon: IconUserShield,
    title: "Servicios adicionales",
    description: "Sanidad vegetal y asesoramiento técnico profesional.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="bg-background">
      <div className="container mx-auto space-y-16 px-4 py-24 xl:max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold tracking-wider text-primary uppercase">
            Sobre Nosotros
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Una empresa familiar comprometida con tu bienestar
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent>
                <stat.icon className="mx-auto mb-3 size-8 text-primary" />
                <p className="text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">{siteName}</strong> es una
              empresa especializada en el control de plagas en comercios,
              oficinas, fábricas, locales y viviendas. También brindamos
              servicios en barrios privados, canchas de fútbol y clubes de
              campo.
            </p>
            <p>
              Utilizamos el{" "}
              <strong className="text-foreground">
                Manejo Integrado de Plagas (MIP)
              </strong>{" "}
              como estrategia de control, que busca reducir o eliminar el uso de
              insecticidas y minimizar el impacto al medio ambiente.
            </p>
            <p>
              Nuestros productos están habilitados por{" "}
              <strong className="text-foreground">ANMAT</strong> y{" "}
              <strong className="text-foreground">SENASA</strong>, y la empresa
              habilitada por el{" "}
              <strong className="text-foreground">
                Ministerio de Desarrollo Agrario
              </strong>{" "}
              bajo el Nº 5117 (Exp. Escobar Nº 211283), con el respaldo y
              dirección técnica del{" "}
              <strong className="text-foreground">
                Ingeniero Agrónomo Agustín Weskamp
              </strong>
              .
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
