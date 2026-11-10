import { ConstructionIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export const Projects = () => {
  const i18n = useTranslations("projects");

  return (
    <section
      id="projects"
      className="bg-white/[0.05] px-5 pt-8 pb-12 lg:px-8 lg:pt-10 lg:pb-16"
    >
      <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:max-w-screen-xl">
        <h2 className="text-[44px] font-semibold lg:text-5xl">
          {i18n("title")}
        </h2>
        <div className="mt-8 flex w-full max-w-xl flex-col items-center gap-4 rounded-xl border border-dashed border-white/20 px-6 py-10 lg:mt-10 lg:py-12">
          <ConstructionIcon
            aria-hidden="true"
            className="size-8 text-tertiary"
            strokeWidth={1.5}
          />
          <p className="text-lg font-medium lg:text-xl">
            {i18n("underConstruction")}
          </p>
        </div>
      </div>
    </section>
  );
};
