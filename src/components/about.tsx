import { Card, CardContent } from "./ui/card";
import {
  IconAward,
  IconBug,
  IconBuilding,
  IconClock,
  IconHome,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";

const stats = [
  { icon: IconClock, value: "7+", label: "Años de experiencia" },
  { icon: IconUsers, value: "500+", label: "Clientes satisfechos" },
  { icon: IconAward, value: "100%", label: "Compromiso" },
  { icon: IconShieldCheck, value: "Escobar", label: "Zona de Cobertura" },
];

const features = [
  {
    icon: IconBug,
    title: "Control integral de plagas",
    description:
      "Hormigas, cucarachas, moscas, mosquitos, chinches, pulgas, escorpiones, roedores y más.",
  },
  {
    icon: IconHome,
    title: "Servicio residencial",
    description:
      "Fumigación completa para hogares, con productos seguros para tu familia y mascotas.",
  },
  {
    icon: IconBuilding,
    title: "Servicio comercial",
    description:
      "Atención a comercios, restaurantes y galpones en todo el Partido de Escobar.",
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
              Comenzamos nuestra actividad en el año{" "}
              <strong className="text-foreground">2018</strong> como un
              emprendimiento familiar, con la misión de ofrecer servicios de
              control de plagas de alta calidad a precios accesibles para el
              Partido de Escobar.
            </p>
            <p>
              Somos una empresa familiar dedicada a brindar soluciones efectivas
              contra todo tipo de plagas. Nos distinguimos por el{" "}
              <strong className="text-foreground">trato personalizado</strong>,
              la puntualidad y el uso de productos certificados que son seguros
              para tu familia y mascotas.
            </p>
            <p>
              Trabajamos en comercios y domicilios, siempre con el compromiso de
              dejar tu espacio libre de plagas. También realizamos trabajos en
              galpones y otras zonas con costo de traslado.
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
