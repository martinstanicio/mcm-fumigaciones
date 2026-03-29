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
import { paymentMethods } from "@/content/payment-methods";
import { plagues } from "@/content/plagues";
import { services } from "@/content/services";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { IconMessage } from "@tabler/icons-react";
import Link from "next/link";

export function Services() {
  return (
    <section id="servicios" className="bg-secondary">
      <div className="container mx-auto space-y-16 px-4 py-24 xl:max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold tracking-wider text-primary uppercase">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Soluciones para el control de plagas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Brindamos servicios de fumigación con productos certificados por
            ANMAT y SENASA, utilizando la metodología de Manejo Integrado de
            Plagas (MIP).
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
                <Button
                  asChild
                  variant="outline"
                  className="flex w-full items-center justify-center gap-2"
                >
                  <Link
                    href={getWhatsAppLink(
                      phone,
                      `Hola, me interesa el servicio de "${service.title}"`,
                    ).toString()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconMessage />
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
          <ul className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2">
            {plagues.map((plague) => (
              <li
                key={plague}
                className="rounded-full border border-border bg-card px-4 py-2 text-center text-sm font-medium text-card-foreground max-sm:grow"
              >
                {plague}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-center text-xl font-semibold">Medios de Pago</h3>
          <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
            {paymentMethods.map((method) => (
              <li
                key={method.title}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-center text-sm font-medium text-card-foreground"
              >
                <method.icon className="text-primary" />
                <span>{method.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
