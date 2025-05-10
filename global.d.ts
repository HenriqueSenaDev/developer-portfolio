import { Messages } from "@/i18n/types/messages";

declare module 'next-intl' {
  interface AppConfig {
    Messages: Messages;
  }
}
