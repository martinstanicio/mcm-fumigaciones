import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IconQuote, IconStar, IconStarFilled } from "@tabler/icons-react";

const testimonials = [
  {
    name: "María González",
    location: "Belén de Escobar",
    text: "Excelente servicio. Llegaron puntual, fueron muy profesionales y el problema de cucarachas desapareció por completo. 100% recomendados.",
    rating: 5,
  },
  {
    name: "Carlos Fernández",
    location: "Garín",
    text: "Contraté el servicio de desratización y quedé muy conforme. Explicaron todo el proceso y dieron seguimiento. Muy buen precio.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    location: "Dueña de comercio",
    text: "Trabajamos con ellos hace años. Son responsables, puntuales y siempre cumplen. Los recomiendo para cualquier negocio.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    location: "Maquinista Savio",
    text: "Tenía un problema grave de hormigas en el jardín. Vinieron, evaluaron y en una sola aplicación solucionaron todo. Muy recomendable.",
    rating: 5,
  },
  {
    name: "Ana Paula Gómez",
    location: "Ingeniero Maschwitz",
    text: "Contraté para fumigación de pulgas por mis mascotas. Fueron muy cuidadosos y el tratamiento fue efectivo. Excelente atención.",
    rating: 5,
  },
  {
    name: "Diego Ramírez",
    location: "Loma Verde",
    text: "Rápidos, eficientes y con muy buen precio. Solucionaron el problema de mosquitos en mi patio. Totalmente recomendados.",
    rating: 5,
  },
];

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
              <CardFooter>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
