import Header from "./header";
import { Hero } from "./hero";
import { TechsFlow } from "./techs-flow";
import { About } from "./about";
import { Projects } from "./projects";

export default function Home() {
  return (
    <div className="min-h-screen pb-10">
      <Header />
      <Hero />
      <TechsFlow />
      <About />
      <Projects />
    </div>
  );
}
