export const getThemeUtilsByPrefix = (
  themeObject: Record<string, Record<string, string>>,
  prefix: string
) => {
  const cryptoColors: Record<string, string> = {};
  for (const themeKey in themeObject) {
    if (
      typeof themeObject[themeKey] === 'object' &&
      themeObject[themeKey] !== null
    ) {
      for (const key in themeObject[themeKey]) {
        if (key.startsWith(prefix)) {
          const utilityName = key.substring(prefix.length).toLowerCase();
          cryptoColors[utilityName] = `var(${key})`;
        }
      }
    }
  }
  return cryptoColors;
};
