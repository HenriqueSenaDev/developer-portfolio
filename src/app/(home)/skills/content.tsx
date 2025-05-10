import { LayersIcon, ShieldCheckIcon, WaypointsIcon } from "lucide-react";
import { ReactNode } from "react";

export type SkillCardContent = {
  title: string;
  description: string;
  Icon: () => ReactNode;
};

export const skillCardsContent: SkillCardContent[] = [
  {
    title: "Integração de Software",
    description:
      "Integração entre diferentes sistemas proporcionando comunicação eficiente, automação de processos e interoperabilidade.",
    Icon: () => <WaypointsIcon className="size-6 lg:size-7" />,
  },
  {
    title: "Arquitetura de Software",
    description:
      "Definição de padrões, tecnologias e componentes para garantir soluções robustas, eficientes e alinhadas aos objetivos do negócio.",
    Icon: () => <LayersIcon className="size-6 lg:size-7" />,
  },
  {
    title: "Segurança",
    description:
      "Foco na proteção de dados, prevenção de vulnerabilidades e fortalecimento das estratégias de integridade.",
    Icon: () => <ShieldCheckIcon className="size-6 lg:size-7" />,
  },
];
