import { About } from "../components/About";
import { CustomersSay } from "../components/CustomersSay ";
import { Hero } from "../components/Hero";
import { Specials } from "../components/Specials";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Specials />
      <CustomersSay />
      <About />
    </main>
  );
}