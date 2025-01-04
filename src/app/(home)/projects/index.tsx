import { Tech } from "@/types/techs";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { techImgSrcMap } from "./techs-mapper";

type ProjectDetails = {
  name: string;
  description: string;
  tags: string[];
  githubRepoURL: string;
  productionURL?: string;
  techs: Tech[];
  images: {
    thumb: string;
  };
};

const projects: ProjectDetails[] = [
  {
    name: "Mind Lab",
    description:
      "Plataforma virtual para o ensino de programação a pessoas com o Transtorno do Espectro Autista (TEA). Princípios neurocientíficos para metodologias de ensino eficazes.",
    githubRepoURL: "https://github.com/HenriqueSenaDev/mind-lab",
    productionURL: "https://mind-lab-frontend.vercel.app/personalization",
    tags: ["theme switcher", "video player", "FAQ"],
    techs: ["typescript", "react", "vite"],
    images: {
      thumb:
        "https://raw.githubusercontent.com/HenriqueSenaDev/assets/refs/heads/main/mind-lab/theme.png",
    },
  },
];

export const Projects = () => {
  return (
    <section>
      {projects.map((project, index) => {
        const bgClass = index % 2 === 0 ? "bg-secondary" : "bg-transparent";

        return (
          <div key={project.name} className={bgClass}>
            <div className="flex flex-col py-[42px] px-5 gap-y-6 max-w-xl mx-auto lg:max-w-screen-xl lg:flex-row lg:gap-x-10 lg:py-16 xl:lg:gap-x-12">
              <Image
                className="block h-auto rounded-md lg:max-w-[calc(55%-56px)]"
                width={1845}
                height={937}
                src={project.images.thumb}
                alt=""
              />

              <div className="flex flex-col">
                <h2 className="text-[28px] leading-7 lg:text-[40px] line-clamp-1 lg:leading-8">
                  {project.name}
                </h2>

                <p className="text-base mt-4 lg:text-lg lg:leading-6">
                  {project.description}
                </p>

                <div className="flex items-center flex-wrap gap-3 mt-4 lg:mt-[18px]">
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center justify-center bg-secondary rounded-md px-4 h-9"
                    >
                      <span className="text-[15px] font-medium">{tag}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-5 mt-6 text-[17px]">
                  <Link
                    href={project.githubRepoURL}
                    target="_blank"
                    className="flex items-center gap-[6px]"
                  >
                    <GithubIcon />

                    <span className="underline underline-offset-2">Github</span>
                  </Link>

                  {project.productionURL && (
                    <Link
                      href={project.productionURL}
                      target="_blank"
                      className="flex items-center gap-[6px]"
                    >
                      <ExternalLinkIcon />

                      <span className="underline underline-offset-2">
                        Visitar
                      </span>
                    </Link>
                  )}
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-3 mt-6">
                  {project.techs.map((tech) => {
                    const imageMetadata = techImgSrcMap[tech];

                    return (
                      <Image
                        key={tech}
                        className="h-7 w-auto lg:h-[34px]"
                        src={imageMetadata.src}
                        height={imageMetadata.height}
                        width={imageMetadata.width}
                        alt=""
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
