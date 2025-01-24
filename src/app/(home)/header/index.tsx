"use client";

import { RocketIcon } from "lucide-react";
import { LanguageSelector } from "./lang-selector";
import { smoothScrollToSection } from "@/utils/dom";
import { MobileMenu } from "./mobile-menu";
import { useTranslations } from "next-intl";

export const navOptions: string[] = [
  "about",
  "projects",
  "services",
  "contact",
];

export const Header = () => {
  const i18n = useTranslations("navigation");

  return (
    <header className="flex items-center justify-between w-full max-w-screen-xl mx-auto p-5 gap-3 lg:px-8">
      <div className="flex items-center gap-2 lg:gap-3">
        <RocketIcon
          className="flex-shrink-0 size-5 lg:size-6"
          strokeWidth={1.5}
        />

        <span className="text-sm min-[360px]:text-base lg:text-xl">
          Luiz Henrique Sena
        </span>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        <nav className="max-lg:hidden">
          <ul className="flex items-center gap-6">
            {navOptions.map((option) => (
              <li
                key={option}
                className="transition-all cursor-pointer hover:underline hover:opacity-80 lg:text-[17px]"
                onClick={() => smoothScrollToSection(option)}
              >
                {i18n(option)}
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSelector />

        <MobileMenu />
      </div>
    </header>
  );
};
