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

const autoDescriptionContent: string[] = [
  "Profissional comunicativo e independente com mais de 1 ano na indústria do software.",
  "Desenvolvedor FullStack Web através das linguagens TypeScript e Java.",
  "Em busca do perfil generalista frontend e especialista backend.",
  "Sempre atualizado nas tecnologias mais modernas e pronto para desafios.",
];

const tagsContent: { Icon: React.FC; description: string }[] = [
  {
    Icon: () => (
      <GraduationCapIcon className="size-5 flex-shrink-0" strokeWidth={1.5} />
    ),
    description:
      "Graduando em Engenharia de Software pela Universidade Federal do Ceará.",
  },
  {
    Icon: () => (
      <GraduationCapIcon className="size-5 flex-shrink-0" strokeWidth={1.5} />
    ),
    description: "Técnico em Informática por Escola Profissionalizante.",
  },
  {
    Icon: () => (
      <AwsIcon
        className="size-5 flex-shrink-0"
        strokeWidth={1.5}
        fill="white"
      />
    ),
    description: "Insígnia AWS Academy Cloud Foundations.",
  },
  {
    Icon: () => (
      <MedalIcon className="size-5 flex-shrink-0" strokeWidth={1.5} />
    ),
    description: "5 medalhas olímpicas nacionais em Matemática.",
  },
  {
    Icon: () => (
      <AwardIcon
        className="size-5 flex-shrink-0 max-[530px]:mt-1"
        strokeWidth={1.5}
      />
    ),
    description:
      "Bolsa em Iniciação Científica pelo Instituto de Matemática Pura e Aplicada.",
  },
];

export const About = () => {
  return (
    <section className="flex flex-col px-5 pt-[42px] pb-8 gap-6">
      <div className="flex flex-col gap-y-6">
        <Image
          className="w-full max-w-[140px] mx-auto md:max-w-[180px]"
          src={aboutSrcImg}
          // ! temporary alternative
          alt="temporary alternative"
        />

        <ul className="flex flex-col gap-2 list-disc pl-5 text-[15px]">
          {autoDescriptionContent.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col items-start gap-x-3 gap-y-[18px]">
          {tagsContent.map(({ Icon, description }, index) => (
            <div
              key={index}
              className="flex items-start w-full bg-secondary rounded-md py-2 px-3 gap-3 text-[13.5px]"
            >
              <Icon />
              <p>{description}</p>
            </div>
          ))}
        </div>

        <Button className="py-3 px-[18px] h-[unset]">
          <FileTextIcon className="size-5 flex-shrink-0" />
          Baixar Currículo (CV)
        </Button>
      </div>
    </section>
  );
};
