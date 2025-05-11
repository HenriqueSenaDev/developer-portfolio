import { Locales } from "@/i18n/locale";
import { Messages } from "@/i18n/types/messages";

declare module "next-intl" {
  interface AppConfig {
    Locale: Locales;
    Messages: Messages;
  }
}
