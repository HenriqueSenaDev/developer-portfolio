import Header from "./header";
import { Hero } from "./hero";
import { TechsFlow } from "./techs-flow";
import { About } from "./about";
import { Projects } from "./projects";
import { Contact } from "./contact";
import { Footer } from "./footer";

// TODO: movile navigation, projects feed, project detatils, i18n.
export default function Home() {
  return (
    <div className="h-screen pb-10 overflow-y-auto">
      <Header />
      <Hero />
      <TechsFlow />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
