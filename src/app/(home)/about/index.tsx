import { Button } from "@/components/button";
import { FileTextIcon } from "lucide-react";
import Link from "next/link";

const historicList: string[] = [
  "Engenheiro de Software pela federal do Ceará (UFC).",
  "Técnico em Informática por escola profissionalizante.",
  "Medalhista nacional em raciocínio lógico e matemática por 5 vezes.",
  "Iniciação científica em matemática pelo Instituto de Matemática Pura e Aplicada (INPA).",
];

const stacksList: string[] = [
  "TypeScript, ReactJS, TailwindCSS, NextJS.",
  "TypeScript, NodeJS, Express, NestJS.",
  "Java, Spring Framework.",
];

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-6 items-center pb-8 px-5 pt-[42px] mx-auto max-w-xl lg:max-w-screen-xl lg:py-16 lg:gap-10 lg:px-8"
    >
      <div className="w-full flex flex-col gap-6 lg:flex-row lg:gap-12">
        <div className="flex flex-col gap-y-3 lg:flex-1">
          <h2 className="font-medium text-2xl lg:text-[30px]">Sobre mim</h2>

          <p className="font-light lg:text-lg lg:leading-6">
            Desenvolvedor proativo e independente com mais de <strong className="text-primary font-semibold">3 anos de experiência</strong> na criação de SaaS para web.
          </p>

          <p className="font-light lg:text-lg lg:leading-6">
            <strong className="text-primary font-semibold">Comunicação</strong> efetiva e <strong className="text-primary font-semibold">liderança</strong> na engenharia aplicada através das melhores práticas de mercado.
          </p>

          <p className="font-light lg:text-lg lg:leading-6">
            Soluções modernas e eficazes mediante <strong className="text-primary font-semibold">raciocínio analítico</strong> e <strong className="text-primary font-semibold">resolução de problemas</strong> com entrega contínua de valor ao produto de software.
          </p>

          <Link
            href="https://drive.google.com/drive/folders/1uI2nhcVWRUX4yuAB1W6AlYxOz9uRi3Gq?usp=sharing"
            target="_blank"
            className="max-lg:hidden w-min self-center mt-10"
          >
            <Button className="py-3 px-[18px] h-[unset] transition-all hover:opacity-70 flex text-[15px]">
              <FileTextIcon className="!size-5 flex-shrink-0 lg:!size-[22px]" />
              Baixar Currículo (CV)
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-2 lg:flex-1">
          <h2 className="font-medium text-2xl lg:text-[30px]">Histórico</h2>

          <ul className="list-disc flex flex-col gap-y-2 pl-5">
            {historicList.map((item, index) => (
              <li key={index}>
                <p className="font-light lg:text-lg lg:leading-6">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <h2 className="font-medium text-2xl lg:text-[30px] mt-2">
            Stacks de desenvolvimento
          </h2>

          <ul className="list-disc flex flex-col gap-y-2 pl-5">
            {stacksList.map((item, index) => (
              <li key={index}>
                <p className="font-light lg:text-lg lg:leading-6">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href="https://drive.google.com/drive/folders/1uI2nhcVWRUX4yuAB1W6AlYxOz9uRi3Gq?usp=sharing"
        target="_blank"
        className="lg:hidden"
      >
        <Button className="py-3 px-[18px] h-[unset] transition-all hover:opacity-70 flex lg:text-[15px]">
          <FileTextIcon className="!size-5 flex-shrink-0 lg:!size-[22px]" />
          Baixar Currículo (CV)
        </Button>
      </Link>
    </section>
  );
};
