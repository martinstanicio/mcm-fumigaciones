import { About } from "@/components/about";
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
    </div>
  );
}
