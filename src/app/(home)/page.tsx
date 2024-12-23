import Header from "./header";
import { Hero } from "./hero";
import { TechsFlow } from "./techs-flow";

export default function Home() {
  return (
    <div className="min-h-screen pb-10">
      <Header />
      <Hero />
      <TechsFlow />
    </div>
  );
}
