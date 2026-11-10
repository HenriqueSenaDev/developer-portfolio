import { useTranslations } from "next-intl";

const stacksList: string[] = [
  "TypeScript, ReactJS, TailwindCSS, NextJS.",
  "TypeScript, NodeJS, Express, NestJS.",
  "Java, Spring Framework.",
];

export const About = () => {
  const i18n = useTranslations("about");

  const backgroundList: string[] = [
    i18n("background.bulletPoints.first"),
    i18n("background.bulletPoints.second"),
    i18n("background.bulletPoints.third"),
    i18n("background.bulletPoints.fourth"),
  ];

  return (
    <section
      id="about"
      className="flex flex-col gap-6 items-center pb-8 px-5 pt-[42px] mx-auto max-w-xl lg:max-w-screen-xl lg:py-16 lg:gap-10 lg:px-8"
    >
      <div className="w-full flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex flex-col gap-y-3 lg:flex-1">
          <h2 className="font-medium text-2xl lg:text-[30px]">
            {i18n("aboutMe.title")}
          </h2>

          <p className="font-light lg:text-lg lg:leading-6">
            {i18n("aboutMe.paragraphs.first.text1")}

            <strong className="text-primary font-semibold">
              {i18n("aboutMe.paragraphs.first.strong")}
            </strong>

            {i18n("aboutMe.paragraphs.first.text2")}
          </p>

          <p className="font-light lg:text-lg lg:leading-6">
            <strong className="text-primary font-semibold">
              {i18n("aboutMe.paragraphs.second.strong1")}
            </strong>

            {i18n("aboutMe.paragraphs.second.text1")}

            <strong className="text-primary font-semibold">
              {i18n("aboutMe.paragraphs.second.strong2")}
            </strong>

            {i18n("aboutMe.paragraphs.second.text2")}
          </p>

          <p className="font-light lg:text-lg lg:leading-6">
            {i18n("aboutMe.paragraphs.third.text1")}

            <strong className="text-primary font-semibold">
              {i18n("aboutMe.paragraphs.third.strong1")}
            </strong>

            {i18n("aboutMe.paragraphs.third.text2")}

            <strong className="text-primary font-semibold">
              {i18n("aboutMe.paragraphs.third.strong2")}
            </strong>

            {i18n("aboutMe.paragraphs.third.text3")}
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:flex-1">
          <h2 className="font-medium text-2xl lg:text-[30px]">
            {i18n("background.title")}
          </h2>

          <ul className="list-disc flex flex-col gap-y-2 pl-5">
            {backgroundList.map((item, index) => (
              <li key={index}>
                <p className="font-light lg:text-lg lg:leading-6">{item}</p>
              </li>
            ))}
          </ul>

          <h2 className="font-medium text-2xl lg:text-[30px] mt-2">
            {i18n("stacks.title")}
          </h2>

          <ul className="list-disc flex flex-col gap-y-2 pl-5">
            {stacksList.map((item, index) => (
              <li key={index}>
                <p className="font-light lg:text-lg lg:leading-6">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
