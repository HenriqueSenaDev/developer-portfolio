"use client";

import Image from "next/image";
import heroImgSrc from "@/assets/images/hero-personal.png";
import TextLoop from "react-text-loop";
import { DMSansFontFamily } from "@/assets/fonts";
import { Button } from "@/components/button";
import { MessageSquareIcon, PickaxeIcon } from "lucide-react";

export const Hero = () => {
  return (
    <section className="flex flex-col px-5 mt-[22px]">
      <div className="w-full flex flex-col gap-7 max-w-xl mx-auto">
        <div className="flex flex-col gap-3">
          <div
            className={`${DMSansFontFamily.className} font-bold leading-tight`}
          >
            <h1 className="text-xl min-[370px]:text-[26px] md:text-4xl">
              Desenvolva com{" "}
              <TextLoop className="text-primary" interval={3000}>
                <strong>eficiência</strong>
                <strong>inovação</strong>
                <strong>confiança</strong>
              </TextLoop>
            </h1>

            <h3 className="text-base min-[370px]:text-xl md:text-2xl">
              software{" "}
              <TextLoop className="text-primary" interval={5000}>
                <strong>de grande valor.</strong>
                <strong>de qualidade.</strong>
                <strong>performático.</strong>
              </TextLoop>
            </h3>
          </div>

          <p className="text-[13px] min-[370px]:text-[14.5px] font-light md:text-base">
            Desenvolvedor Full-Stack capacitado e independente. Aprimore seu
            negócio com as funcionalidades mais modernas e sofisticadas do
            mercado.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-3 gap-y-2 md:gap-5">
          <Button className="h-9 px-3 gap-[6px] text-[13px] md:px-4 md:text-sm">
            <PickaxeIcon />O que posso construir
          </Button>

          <Button
            variant="secondary"
            className="h-9 px-3 gap-[6px] text-[13px] md:px-4 md:text-sm"
          >
            <MessageSquareIcon />
            Entre em contato
          </Button>
        </div>
      </div>

      <Image
        priority
        className="w-full max-w-[232px] h-auto mx-auto mt-8 md:max-w-[250px]"
        // ! temporary alternative description
        alt="temporary alternative"
        src={heroImgSrc}
      />
    </section>
  );
};
