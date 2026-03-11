import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
    </div>
  );
}
