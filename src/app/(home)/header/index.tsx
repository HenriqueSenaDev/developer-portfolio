import { Button } from "@/components/button";
import { MenuIcon, RocketIcon } from "lucide-react";
import { LanguageSelector } from "./lang-selector";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full max-w-screen-xl mx-auto p-5 gap-3">
      <div className="flex items-center gap-2">
        <RocketIcon className="flex-shrink-0 size-5" strokeWidth={1.5} />

        <span className="text-sm min-[360px]:text-base">
          Luiz Henrique Sena
        </span>
      </div>

      <div className="flex items-center gap-2">
        <LanguageSelector />

        <Button variant="ghost" className="size-9 flex-shrink-0 p-0">
          <MenuIcon className="!size-6" strokeWidth={1.5} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
