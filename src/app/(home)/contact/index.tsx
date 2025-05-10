"use client";

import { Button } from "@/components/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export const Contact = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("acopsenadeveloper@gmail.com");
    alert("Copiado para a clipboard.");
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center my-8 px-5 gap-9 max-w-xl mx-auto lg:max-w-screen-xl lg:my-16 lg:gap-[42px]"
    >
      <h1 className="font-semibold text-lg min-[350px]:text-xl lg:text-4xl">
        Gostou do que viu? Fale comigo!
      </h1>

      <div className="flex flex-wrap gap-4 min-[350px]:justify-center lg:max-w-[450px] lg:gap-5">
        <Link href="https://github.com/HenriqueSenaDev" target="_blank">
          <Button className="bg-white text-black text-xs px-3 font-normal  transition-all hover:bg-[#FFFFFFB2] lg:text-base lg:h-12 lg:px-4 lg:rounded-lg lg:gap-3">
            <GithubIcon className="lg:!size-6" />
            HenriqueSenaDev
          </Button>
        </Link>

        <Link
          href="https://www.linkedin.com/in/henriquesena-dev-002a4829b/"
          target="_blank"
        >
          <Button className="bg-[#0E76A8] text-xs px-3 font-normal  transition-all hover:opacity-70 lg:text-base lg:h-12 lg:px-4 lg:rounded-lg lg:gap-3">
            <LinkedinIcon className="lg:!size-6" />
            HenriqueSena Dev
          </Button>
        </Link>

        <Button
          className="bg-[#B51616] text-xs px-3 font-normal  transition-all hover:bg-[#B51616B2] lg:text-base lg:h-12 lg:px-4 lg:rounded-lg lg:gap-3"
          onClick={handleCopyEmail}
        >
          <MailIcon className="lg:!size-6" />
          acopsenadeveloper@gmail.com
        </Button>
      </div>
    </section>
  );
};
