import { PlusJakartaSansFontFamily } from "@/assets/fonts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { LOCALE_COOKIE_KEY } from "@/config/cookies";
import { GlobeIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Cookies from "js-cookie";
import { locales } from "@/i18n/locale";

export const LanguageSelector = () => {
  const locale = useLocale();

  const handleLangSelection = (lang: string) => {
    Cookies.set(LOCALE_COOKIE_KEY, lang);
    window.location.reload();
  };

  return (
    <Select value={locale} onValueChange={handleLangSelection}>
      <SelectTrigger
        className={`${PlusJakartaSansFontFamily.className} h-9 px-3 py-2 rounded-2xl bg-secondary border-none font-medium text-[11px] lg:text-[13px]`}
      >
        <div className="flex items-center gap-[6px]">
          <SelectValue />

          <GlobeIcon size={13} strokeWidth={1.5} />
        </div>
      </SelectTrigger>

      <SelectContent>
        {locales.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
