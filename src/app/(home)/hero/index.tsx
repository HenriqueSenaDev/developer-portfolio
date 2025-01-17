"use client";

import Image from "next/image";
import heroImgSrc from "@/assets/images/hero-personal.png";
import TextLoop from "react-text-loop";
import { DMSansFontFamily } from "@/assets/fonts";
import { Button } from "@/components/button";
import { MessageSquareIcon, PickaxeIcon } from "lucide-react";
import { smoothScrollToSection } from "@/utils/dom";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col px-5 mt-[22px] lg:flex-row lg:gap-5 lg:max-w-screen-xl lg:mx-auto"
    >
      <div className="w-full flex flex-col gap-7 mx-auto max-w-xl lg:mx-0 lg:max-w-2xl lg:mt-10 lg:gap-8">
        <div className="flex flex-col gap-3 lg:gap-5">
          <div
            className={`${DMSansFontFamily.className} font-bold leading-tight`}
          >
            <h1 className="text-xl min-[360px]:text-2xl min-[385px]:text-[26px] md:text-4xl lg:text-5xl">
              Desenvolva com{" "}
              <TextLoop className="text-primary" interval={3000}>
                <strong>eficiência</strong>
                <strong>inovação</strong>
                <strong>confiança</strong>
              </TextLoop>
            </h1>

            <h3 className="text-base min-[360px]:text-lg min-[385px]:text-xl md:text-2xl lg:text-4xl">
              software{" "}
              <TextLoop className="text-primary" interval={5000}>
                <strong>de grande valor.</strong>
                <strong>de qualidade.</strong>
                <strong>performático.</strong>
              </TextLoop>
            </h3>
          </div>

          <p className="text-[13px] min-[370px]:text-[14.5px] font-light md:text-base lg:text-xl">
            Aprimore seu negócio com as funcionalidades mais modernas e
            sofisticadas do mercado com um desenvolvedor capacitado e
            independente.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-3 gap-y-2 md:gap-5">
          <Button
            className="h-9 px-3 gap-[6px] text-[13px] transition-all hover:opacity-70 md:px-4 md:text-sm lg:h-11 lg:gap-3 lg:px-5 lg:text-base lg:rounded-lg"
            onClick={() => smoothScrollToSection("abilities")}
          >
            <PickaxeIcon className="lg:!size-5" />O que posso construir
          </Button>

          <Button
            variant="secondary"
            className="h-9 px-3 gap-[6px] text-[13px] transition-all md:px-4 md:text-sm lg:h-11 lg:gap-3 lg:px-5 lg:text-base lg:rounded-lg"
            onClick={() => smoothScrollToSection("contact")}
          >
            <MessageSquareIcon />
            Entre em contato
          </Button>
        </div>
      </div>

      <Image
        priority
        className="w-full max-w-[232px] translate-y-[2px] h-auto mx-auto mt-8 md:max-w-[250px] lg:max-w-[300px] lg:mt-0"
        alt="Desenvolvedor Luiz Henrique, jovem de cor branca com barba preta e cabelo castanho baixo, vestido com uma camisa branca e com as próprias mãos segurando uma na outra estendidas à frente do corpo como um sinal de confiança e negócios. No fundo, um retângulo cinza translúcido."
        src={heroImgSrc}
      />
    </section>
  );
};
