import { Locales } from "@/i18n/locale";
import { Tech } from "@/types/techs";

export type ProjectInfo = {
  description: string;
  tags: string[];
};

export type ProjectData = {
  name: string;
  i18nInfo: Record<Locales, ProjectInfo>;
  githubRepoURL: string;
  productionURL?: string;
  techs: Tech[];
  images: {
    thumb: string;
  };
};

export const projects: ProjectData[] = [
  {
    name: "Mind Lab",
    i18nInfo: {
      "pt-BR": {
        description:
          "Plataforma virtual para o ensino de programação a pessoas com o Transtorno do Espectro Autista (TEA). Princípios neurocientíficos para metodologias de ensino eficazes.",
        tags: ["theme switcher", "video player", "FAQ"],
      },
      en: {
        description:
          "Virtual platform for teaching programming to people with Autism Spectrum Disorder (ASD). Neuroscientific principles for effective teaching methodologies.",
        tags: ["theme switcher", "video player", "FAQ"],
      },
    },
    githubRepoURL: "https://github.com/HenriqueSenaDev/mind-lab",
    productionURL: "https://mind-lab-frontend.vercel.app/personalization",
    techs: ["typescript", "react", "vite"],
    images: {
      thumb:
        "https://raw.githubusercontent.com/HenriqueSenaDev/assets/refs/heads/main/mind-lab/theme.png",
    },
  },
  // {
  //   name: "Presenter Web",
  //   description:
  //     "Gerenciamento de eventos com competições entre equipes e avaliações de jurados, integrado juntamente ao projeto presenter-admin.",
  //   githubRepoURL: "https://github.com/HenriqueSenaDev/presenter-web",
  //   tags: ["eventos", "competições", "jurados"],
  //   techs: ["typescript", "react", "vite", "java", "spring", "jwt", "maven"],
  //   images: {
  //     thumb:
  //       "https://raw.githubusercontent.com/HenriqueSenaDev/assets/refs/heads/main/presenter-web/landing.png",
  //   },
  // },
  // {
  //   name: "Enem Timer",
  //   description:
  //     "Ferramenta auxíliar para cronometragem do tempo de questões e redação para estudo de vestibulares. Feedback de desempenho, customização de tempo e modo sem distrações.",
  //   githubRepoURL: "https://github.com/HenriqueSenaDev/enem-timer",
  //   productionURL: "https://enem-timer.vercel.app/",
  //   tags: ["vestibular", "enem", "desempenho"],
  //   techs: ["typescript", "react", "tailwindcss", "vite"],
  //   images: {
  //     thumb:
  //       "https://raw.githubusercontent.com/HenriqueSenaDev/assets/refs/heads/main/enem-timer/home.png",
  //   },
  // },
];
