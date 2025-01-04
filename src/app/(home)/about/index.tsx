import aboutSrcImg from "@/assets/images/about-personal.png";
import { AwsIcon } from "@/assets/vectors/tech-icons/aws";
import { Button } from "@/components/button";
import {
  AwardIcon,
  FileTextIcon,
  GraduationCapIcon,
  MedalIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const autoDescriptionContent: string[] = [
  "Profissional comunicativo e independente com mais de 1 ano na indústria do software.",
  "Desenvolvedor Full Stack através das linguagens TypeScript e Java.",
  "Em busca do perfil generalista frontend e especialista backend.",
  "Sempre atualizado nas tecnologias mais modernas e pronto para desafios.",
];

const tagsContent: { Icon: React.FC; description: string }[] = [
  {
    Icon: () => (
      <GraduationCapIcon
        className="size-5 flex-shrink-0 lg:size-6"
        strokeWidth={1.5}
      />
    ),
    description:
      "Graduando em Engenharia de Software pela Universidade Federal do Ceará.",
  },
  {
    Icon: () => (
      <AwardIcon
        className="size-5 flex-shrink-0 max-[530px]:mt-1 lg:size-6"
        strokeWidth={1.5}
      />
    ),
    description:
      "Bolsa em Iniciação Científica pelo Instituto de Matemática Pura e Aplicada.",
  },
  {
    Icon: () => (
      <GraduationCapIcon
        className="size-5 flex-shrink-0 lg:size-6"
        strokeWidth={1.5}
      />
    ),
    description: "Técnico em Informática por Escola Profissionalizante.",
  },
  {
    Icon: () => (
      <AwsIcon
        className="size-5 flex-shrink-0 lg:size-6"
        strokeWidth={1.5}
        fill="white"
      />
    ),
    description: "Insígnia AWS Academy Cloud Foundations.",
  },
  {
    Icon: () => (
      <MedalIcon className="size-5 flex-shrink-0 lg:size-6" strokeWidth={1.5} />
    ),
    description: "5 medalhas olímpicas nacionais em Matemática.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col px-5 pt-[42px] pb-8 gap-6 lg:pt-16 lg:gap-14 lg:pb-[76px]"
    >
      <div className="flex flex-col gap-y-6 max-w-[calc(576px-40px)] mx-auto lg:flex-row lg:max-w-screen-xl lg:gap-[100px]">
        <Image
          className="w-full max-w-[140px] mx-auto min-[400px]:max-w-[150px] md:max-w-[180px] lg:max-w-[unset] lg:size-[240px] "
          src={aboutSrcImg}
          // ! temporary alternative
          alt="temporary alternative"
        />

        <ul className="flex flex-col gap-2 list-disc pl-5 text-[15px] lg:text-[19px] lg:font-light lg:max-w-[570px]">
          {autoDescriptionContent.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6 items-center max-w-xl mx-auto lg:max-w-screen-xl lg:px-7">
        <div className="flex flex-col items-start gap-x-3 gap-y-[18px] lg:w-full lg:flex-row lg:flex-wrap lg:gap-6">
          {tagsContent.map(({ Icon, description }, index) => (
            <div
              key={index}
              className="flex items-start w-full bg-secondary rounded-md py-2 px-3 gap-3 text-[13.5px] lg:w-[unset] lg:text-[15px]"
            >
              <Icon />
              <p>{description}</p>
            </div>
          ))}
        </div>

        <Link
          href="https://drive.google.com/drive/folders/1uI2nhcVWRUX4yuAB1W6AlYxOz9uRi3Gq?usp=sharing"
          target="_blank"
        >
          <Button className="py-3 px-[18px] h-[unset] transition-all hover:opacity-70 lg:text-[15px] lg:self-start xl:self-center">
            <FileTextIcon className="!size-5 flex-shrink-0 lg:!size-[22px]" />
            Baixar Currículo (CV)
          </Button>
        </Link>
      </div>
    </section>
  );
};
