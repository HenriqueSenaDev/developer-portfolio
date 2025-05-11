export const locales = ["pt-BR", "en"] as const;

export type Locales = (typeof locales)[number];
