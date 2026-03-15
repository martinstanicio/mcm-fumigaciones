import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  formattedPhone,
  phone,
  simplerFormattedPhone,
} from "@/content/contact-info";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: IconBrandWhatsapp,
    title: "WhatsApp",
    description: "Respuesta inmediata",
    contact: formattedPhone,
    link: getWhatsAppLink(phone).toString(),
    buttonText: "Enviar mensaje",
  },
  {
    icon: IconPhone,
    title: "Teléfono",
    description: "Llamadas directas",
    contact: simplerFormattedPhone,
    link: `tel:${phone}`,
    buttonText: "Llamar ahora",
  },
];

export function Contact() {
  return (
    <section id="contacto" className="bg-secondary">
      <div className="container mx-auto space-y-16 px-4 py-24 xl:max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold tracking-wider text-primary uppercase">
            Contacto
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            ¿Listo para eliminar las plagas? Contactanos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Solicita tu presupuesto sin compromiso. Te respondemos a la
            brevedad.
          </p>
        </div>

        <div className="mx-auto grid gap-6 sm:max-w-2xl sm:grid-cols-2">
          {contactMethods.map((method) => (
            <Card className="text-center" key={method.title}>
              <CardHeader>
                <div className="mx-auto my-4 flex size-16 items-center justify-center rounded-full bg-secondary">
                  <method.icon className="size-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{method.contact}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" size="lg">
                  <Link
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <method.icon />
                    <span>{method.buttonText}</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
