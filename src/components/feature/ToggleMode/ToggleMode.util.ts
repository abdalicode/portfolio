export const isThemeValid = (theme?: string) =>
  theme && ["dark", "light", "system"].includes(theme);
