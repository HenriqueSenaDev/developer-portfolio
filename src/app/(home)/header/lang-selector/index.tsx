import { PlusJakartaSansFontFamily } from "@/assets/fonts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { GlobeIcon } from "lucide-react";

export const LanguageSelector = () => {
  return (
    <Select value="pt-BR">
      <SelectTrigger
        className={`h-9 px-3 py-2 rounded-2xl bg-secondary border-none font-medium text-[11px] ${PlusJakartaSansFontFamily.className}`}
      >
        <div className="flex items-center gap-[6px]">
          <SelectValue />
          <GlobeIcon size={13} strokeWidth={1.5} />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt-BR">pt-BR</SelectItem>
        <SelectItem disabled value="en-US">
          en-Us
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
