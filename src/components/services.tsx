import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { phone } from "@/content/contact-info";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  IconBug,
  IconBuilding,
  IconBuildingWarehouse,
  IconCheese,
  IconHome,
  IconLeaf,
} from "@tabler/icons-react";
import Link from "next/link";

const services = [
  {
    icon: IconBug,
    title: "Control de Cucarachas",
    description:
      "Eliminación efectiva de cucarachas en hogares y comercios. Tratamiento profesional con productos seguros.",
    popular: true,
  },
  {
    icon: IconLeaf,
    title: "Control de Hormigas",
    description:
      "Tratamiento especializado para hormigas invasoras y hormigas podadoras. Solución definitiva para jardines y hogares.",
    popular: true,
  },
  {
    icon: IconCheese,
    title: "Desratización",
    description:
      "Control integral de roedores con métodos seguros. Incluye sellado de accesos y seguimiento.",
    popular: false,
  },
  {
    icon: IconHome,
    title: "Fumigación Residencial",
    description:
      "Servicio completo para casas y departamentos. Eliminamos moscas, mosquitos, moscardones, pulgas, chinches de cama y más.",
    popular: true,
  },
  {
    icon: IconBuilding,
    title: "Fumigación Comercial",
    description:
      "Soluciones para restaurantes, locales y oficinas en todo el Partido de Escobar. Certificados disponibles.",
    popular: false,
  },
  {
    icon: IconBuildingWarehouse,
    title: "Galpones y Depósitos",
    description:
      "Fumigación de galpones y espacios industriales (sin certificado). Servicio disponible con costo de traslado.",
    popular: false,
  },
];

const plagues = [
  "Hormigas invasoras",
  "Hormigas podadoras",
  "Cucarachas",
  "Moscas",
  "Mosquitos",
  "Moscardones",
  "Chinches de cama",
  "Pulgas",
  "Escorpiones",
  "Tábanos",
  "Roedores",
];

export function Services() {
  return (
    <section id="servicios" className="bg-secondary">
      <div className="container mx-auto space-y-16 px-4 py-24 xl:max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold tracking-wider text-primary uppercase">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Soluciones completas para el control de plagas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ofrecemos servicios de fumigación para comercios y domicilios en
            todo el Partido de Escobar. También realizamos trabajos en otras
            zonas con costo de traslado.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="relative overflow-hidden transition-shadow hover:shadow-lg"
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4">Popular</Badge>
              )}
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link
                    href={getWhatsAppLink(
                      phone,
                      `Hola, me interesa el servicio de "${service.title}"`,
                    ).toString()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-center text-xl font-semibold">
            Plagas que Tratamos
          </h3>
          <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
            {plagues.map((plague) => (
              <li
                key={plague}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground"
              >
                {plague}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
