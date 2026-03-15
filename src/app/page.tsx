import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
