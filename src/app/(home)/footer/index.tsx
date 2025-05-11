import { useTranslations } from "next-intl";

export const Footer = () => {
  const i18n = useTranslations("footer");

  return (
    <footer className="mt-1 px-5 text-center lg:mt-0">
      <span className="text-[13px] lg:text-sm">
        © {new Date().getFullYear()} HenriqueSenaDev. {i18n("title")}
      </span>
    </footer>
  );
};
