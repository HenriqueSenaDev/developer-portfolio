import { AwsIcon } from "@/assets/vectors/tech-icons/aws";
import { Button } from "@/components/button";
import {
  AwardIcon,
  FileTextIcon,
  GraduationCapIcon,
  MedalIcon,
} from "lucide-react";
import Link from "next/link";

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
      <AwardIcon
        className="size-5 flex-shrink-0 max-[530px]:mt-1"
        strokeWidth={1.5}
      />
    ),
    description:
      "Bolsa em Iniciação Científica pelo Instituto de Matemática Pura e Aplicada.",
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
    description: "4 medalhas olímpicas nacionais em matemática.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-6 items-center pb-8 px-5 pt-[42px] mx-auto max-w-xl lg:max-w-screen-xl lg:py-16 lg:gap-10 lg:px-8"
    >
      <div className="w-full flex flex-col gap-6 lg:flex-row-reverse lg:gap-12">
        <div className="flex flex-col gap-y-4 lg:flex-1 lg:max-w-[560px] lg:items-center">
          <p className="font-light lg:text-lg">
            Desenvolvedor de apliações Full Stack através de tecnologias como{" "}
            <strong className="text-primary font-semibold">NextJS</strong>,{" "}
            <strong className="text-primary font-semibold">NestJS</strong> e{" "}
            <strong className="text-primary font-semibold">
              Spring Framework
            </strong>
            . Profissional comunicativo e independente com mais de 1 ano na
            indústria do software.
          </p>

          <p className="font-light lg:text-lg">
            Habilidades de grande valor técnico e organizacional em frontend e
            backend. Constantemente atualizado sobre as tecnologias mais{" "}
            <strong className="text-primary font-semibold">modernas</strong> e
            sempre pronto para{" "}
            <strong className="text-primary font-semibold">desafios</strong>.
          </p>

          <Link
            href="https://drive.google.com/drive/folders/1uI2nhcVWRUX4yuAB1W6AlYxOz9uRi3Gq?usp=sharing"
            target="_blank"
          >
            <Button className="hidden lg:flex py-3 px-[18px] h-[unset] transition-all hover:opacity-70 mt-3 text-[15px]">
              <FileTextIcon className="flex-shrink-0 !size-[22px]" />
              Baixar Currículo (CV)
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-6 items-center lg:flex-1">
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3 lg:gap-6 lg:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
            {tagsContent.map(({ Icon, description }, index) => (
              <div
                key={index}
                className="flex items-start w-full bg-white bg-opacity-[8%] rounded-md py-3 px-4 gap-2 transition-all cursor-default border-2 border-transparent hover:border-primary hover:bg-transparent lg:py-4 lg:gap-3"
              >
                <Icon />

                <p className="text-[13px] lg:text-[14px]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="https://drive.google.com/drive/folders/1uI2nhcVWRUX4yuAB1W6AlYxOz9uRi3Gq?usp=sharing"
        target="_blank"
      >
        <Button className="py-3 px-[18px] h-[unset] transition-all hover:opacity-70 lg:hidden">
          <FileTextIcon className="!size-5 flex-shrink-0" />
          Baixar Currículo (CV)
        </Button>
      </Link>
    </section>
  );
};
