import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/content/faqs";
import Link from "next/link";

export function FAQ() {
  return (
    <section id="faq" className="bg-background">
      <div className="container mx-auto space-y-16 px-4 py-24 xl:max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold tracking-wider text-primary uppercase">
            Preguntas Frecuentes
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Resolvemos tus dudas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-3xl"
          defaultValue="faq-0"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center">
          <span>¿Seguís con alguna duda?</span>
          <Button variant="link" asChild>
            <Link href="#contacto">Contactanos</Link>
          </Button>
        </p>
      </div>
    </section>
  );
}
