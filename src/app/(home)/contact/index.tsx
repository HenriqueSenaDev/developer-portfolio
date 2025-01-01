import { Button } from "@/components/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section className="flex flex-col items-center text-center my-8 px-5 gap-9 max-w-xl mx-auto">
      <h1 className="font-semibold text-lg min-[350px]:text-xl">
        Gostou do que viu? Me deixe sabendo!
      </h1>

      <div className="flex flex-wrap gap-4 min-[350px]:justify-center">
        <Button className="bg-white text-black text-xs px-3">
          <GithubIcon />
          HenriqueSenaDev
        </Button>

        <Button className="bg-[#0E76A8] text-xs px-3">
          <LinkedinIcon />
          HenriqueSena Dev
        </Button>

        <Button className="bg-[#B51616] text-xs px-3">
          <MailIcon />
          acopsenadeveloper@gmail.com
        </Button>
      </div>
    </section>
  );
};
