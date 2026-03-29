import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { testimonials } from "@/content/testimonials";
import { IconQuote, IconStar, IconStarFilled } from "@tabler/icons-react";

export function Testimonials() {
  return (
    <section id="opiniones" className="bg-secondary">
      <div className="container mx-auto space-y-16 px-4 py-24 xl:max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold tracking-wider text-primary uppercase">
            Testimonios
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              <CardContent>
                <IconQuote className="absolute top-4 right-4 size-8 text-primary/20" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: Math.min(testimonial.rating, 5) }).map(
                    (_, i) => (
                      <IconStarFilled key={i} className="size-5 text-primary" />
                    ),
                  )}
                  {Array.from({
                    length: 5 - Math.min(testimonial.rating, 5),
                  }).map((_, i) => (
                    <IconStar key={i} className="size-5 text-primary" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-muted-foreground italic">
                  {`"${testimonial.text}"`}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
