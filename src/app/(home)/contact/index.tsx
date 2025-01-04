import { Button } from "@/components/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section className="flex flex-col items-center text-center my-8 px-5 gap-9 max-w-xl mx-auto lg:max-w-screen-xl lg:my-16 lg:gap-[42px]">
      <h1 className="font-semibold text-lg min-[350px]:text-xl lg:text-4xl">
        Gostou do que viu? Me deixe sabendo!
      </h1>

      <div className="flex flex-wrap gap-4 min-[350px]:justify-center lg:max-w-[450px] lg:gap-5">
        <Button className="bg-white text-black text-xs px-3 font-normal  transition-all hover:bg-[#FFFFFFB2] lg:text-base lg:h-12 lg:px-4 lg:rounded-lg lg:gap-3">
          <GithubIcon className="lg:!size-6" />
          HenriqueSenaDev
        </Button>

        <Button className="bg-[#0E76A8] text-xs px-3 font-normal  transition-all hover:opacity-70 lg:text-base lg:h-12 lg:px-4 lg:rounded-lg lg:gap-3">
          <LinkedinIcon className="lg:!size-6" />
          HenriqueSena Dev
        </Button>

        <Button className="bg-[#B51616] text-xs px-3 font-normal  transition-all hover:bg-[#B51616B2] lg:text-base lg:h-12 lg:px-4 lg:rounded-lg lg:gap-3">
          <MailIcon className="lg:!size-6" />
          acopsenadeveloper@gmail.com
        </Button>
      </div>
    </section>
  );
};
