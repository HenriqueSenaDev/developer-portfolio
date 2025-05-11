"use server";

import { LOCALE_COOKIE_KEY } from "@/config/cookies";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { Locales } from "./locale";

// Server action to provide i18n metadata for server-components.
export default getRequestConfig(async () => {
  const reqCookies = await cookies();
  const localeCookie = reqCookies.get(LOCALE_COOKIE_KEY);

  const locale = (localeCookie ? localeCookie.value : "pt-BR") as Locales;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
