import { DMSansFontFamily } from "@/assets/fonts";
import { useTranslations } from "next-intl";
import { HeroTextLoop } from "./components/text-loop";
import { HeroCtaArea } from "./components/cta";

export const Hero = () => {
  const i18n = useTranslations("hero");

  return (
    <section
      id="hero"
      className="flex flex-col px-5 mt-[22px] mb-10 lg:mb-16 lg:items-center lg:flex-row lg:gap-12 lg:max-w-screen-xl lg:mx-auto lg:px-8"
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

      <div
        aria-hidden="true"
        className="relative mx-auto mt-10 flex h-56 w-full max-w-sm items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:h-64 lg:mt-0 lg:h-72 lg:flex-1"
      >
        <div className="absolute h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative flex h-36 w-36 rotate-12 items-center justify-center rounded-3xl border border-tertiary/30 bg-background/80 shadow-[0_0_60px_rgba(0,132,214,0.15)] md:h-44 md:w-44">
          <span className="-rotate-12 font-mono text-5xl font-light tracking-tight text-tertiary md:text-6xl">
            &lt;/&gt;
          </span>
        </div>
        <span className="absolute left-8 top-8 h-2 w-2 rounded-full bg-tertiary/60" />
        <span className="absolute bottom-10 right-10 h-1.5 w-1.5 rounded-full bg-primary" />
      </div>
    </section>
  );
};
