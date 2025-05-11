import { useTranslations } from "next-intl";
import { LayersIcon, ShieldCheckIcon, WaypointsIcon } from "lucide-react";
import { ReactNode } from "react";

export type SkillCardContent = {
  title: string;
  description: string;
  Icon: () => ReactNode;
};

export const Skills = () => {
  const i18n = useTranslations("skills");

  const cardsContent: SkillCardContent[] = [
    {
      title: i18n("cards.first.title"),
      description: i18n("cards.first.description"),
      Icon: () => <WaypointsIcon className="size-6 lg:size-7" />,
    },
    {
      title: i18n("cards.second.title"),
      description: i18n("cards.second.description"),
      Icon: () => <LayersIcon className="size-6 lg:size-7" />,
    },
    {
      title: i18n("cards.third.title"),
      description: i18n("cards.third.description"),
      Icon: () => <ShieldCheckIcon className="size-6 lg:size-7" />,
    },
  ];

  return (
    <section
      id="skills"
      className="bg-primary flex flex-col items-center pt-8 pb-12 gap-8 lg:pt-10 lg:pb-16 lg:gap-10"
    >
      <h2 className="text-[44px] font-semibold lg:text-5xl">{i18n("title")}</h2>

      <div className="w-full px-5 grid grid-cols-1 gap-6 max-w-xl lg:px-8 lg:max-w-screen-xl lg:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:gap-8">
        {cardsContent.map(({ title, description, Icon }, index) => (
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
