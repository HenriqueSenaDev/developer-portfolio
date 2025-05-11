"use client";

import { Button } from "@/components/button";
import { smoothScrollToSection } from "@/utils/dom";
import { MessageSquareIcon, PickaxeIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export const HeroCtaArea = () => {
  const i18n = useTranslations("hero");

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2 md:gap-5">
      <Button
        className="h-9 px-3 gap-[6px] text-[13px] transition-all hover:opacity-70 md:px-4 md:text-sm lg:h-11 lg:gap-3 lg:px-5 lg:text-base lg:rounded-lg"
        onClick={() => smoothScrollToSection("projects")}
      >
        <PickaxeIcon className="lg:!size-5" />
        {i18n("projectsCta")}
      </Button>

      <Button
        variant="secondary"
        className="h-9 px-3 gap-[6px] text-[13px] transition-all md:px-4 md:text-sm lg:h-11 lg:gap-3 lg:px-5 lg:text-base lg:rounded-lg"
        onClick={() => smoothScrollToSection("contact")}
      >
        <MessageSquareIcon />
        {i18n("contactCta")}
      </Button>
    </div>
  );
};
