import { LayersIcon, ShieldCheckIcon, WaypointsIcon } from "lucide-react";
import { ReactNode } from "react";

type ServiceCardContent = {
  title: string;
  description: string;
  Icon: () => ReactNode;
};

const serviceCardsContent: ServiceCardContent[] = [
  {
    title: "Gerência de Conteúdo",
    description:
      "Soluções em CMS para facilitar a criação, edição e gestão de conteúdos online, seja para blogs, sites institucionais ou lojas virtuais.",
    Icon: () => <LayersIcon className="size-6 lg:size-7" />,
  },
  {
    title: "Integração de Software",
    description:
      "Integração entre diferentes sistemas proporcionando comunicação eficiente, automação de processos e interoperabilidade.",
    Icon: () => <WaypointsIcon className="size-6 lg:size-7" />,
  },
  {
    title: "Segurança",
    description:
      "Foco na proteção de dados, prevenção de vulnerabilidades e fortalecimento das estratégias de integridade.",
    Icon: () => <ShieldCheckIcon className="size-6 lg:size-7" />,
  },
];

export const Services = () => {
  return (
    <section
      id="section"
      className="bg-primary flex flex-col items-center pt-8 pb-12 gap-8 lg:pt-14 lg:pb-28 lg:gap-14"
    >
      <h2 className="text-[44px] font-semibold lg:text-5xl">Serviços</h2>

      <div className="w-full px-5 grid grid-cols-1 gap-6 max-w-xl lg:px-8 lg:max-w-screen-xl lg:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:gap-10 xl:gap-20">
        {serviceCardsContent.map(({ title, description, Icon }, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-background px-5 pt-4 pb-7 rounded-md lg:gap-[10px]"
          >
            <div className="flex items-center gap-2">
              <Icon />

              <h3 className="font-medium text-base lg:text-lg">{title}</h3>
            </div>

            <p className="text-[15px] font-light lg:text-[17px]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
