import Image from "next/image";
import heroImgSrc from "@/assets/images/hero-personal.png";
import { DMSansFontFamily } from "@/assets/fonts";
import { useTranslations } from "next-intl";
import { HeroTextLoop } from "./components/text-loop";
import { HeroCtaArea } from "./components/cta";

export const Hero = () => {
  const i18n = useTranslations("hero");

  return (
    <section
      id="hero"
      className="flex flex-col px-5 mt-[22px] lg:flex-row lg:gap-5 lg:max-w-screen-xl lg:mx-auto lg:px-8"
    >
      <div className="w-full flex flex-col gap-7 mx-auto max-w-xl lg:mx-0 lg:max-w-2xl lg:mt-10 lg:gap-8">
        <div className="flex flex-col gap-3 lg:gap-5">
          <div
            className={`${DMSansFontFamily.className} font-bold leading-tight`}
          >
            <h1 className="text-xl min-[360px]:text-2xl min-[385px]:text-[26px] md:text-4xl lg:text-5xl">
              {i18n("h1")}{" "}
              <HeroTextLoop
                interval={3000}
                options={[
                  i18n("h1Completions.second"),
                  i18n("h1Completions.first"),
                  i18n("h1Completions.third"),
                ]}
              />
            </h1>

            <h3 className="text-base min-[360px]:text-lg min-[385px]:text-xl md:text-2xl lg:text-4xl">
              {i18n("h2")}{" "}
              <HeroTextLoop
                interval={3000}
                options={[
                  i18n("h2Completions.second"),
                  i18n("h2Completions.first"),
                  i18n("h2Completions.third"),
                ]}
              />
            </h3>
          </div>

          <p className="min-[370px]:text-[15px] font-light md:text-base lg:text-xl">
            {i18n("paragraph")}
          </p>
        </div>

        <HeroCtaArea />
      </div>

      <Image
        priority
        className="w-full max-w-[232px] translate-y-[2px] h-auto mx-auto mt-8 md:max-w-[250px] lg:max-w-[300px] lg:mt-0"
        alt={i18n("developerImgAlt")}
        src={heroImgSrc}
      />
    </section>
  );
};
