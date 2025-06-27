export const getThemeUtilsByPrefix = (
  themeObject: Record<
    string,
    Record<string, string | number | Record<string, string | number>>
  >,
  prefix: string,
  customPrefix = ''
) => {
  const themeUtils: Record<string, string> = {};
  for (const themeKey in themeObject) {
    if (
      typeof themeObject[themeKey] === 'object' &&
      themeObject[themeKey] !== null
    ) {
      for (const key in themeObject[themeKey]) {
        if (key.startsWith(prefix)) {
          const utilityName = key.substring(prefix.length).toLowerCase();
          const prefixedUtilityName = customPrefix
            ? `${customPrefix}${utilityName}`
            : utilityName;
          themeUtils[prefixedUtilityName] = `var(${key})`;
        }
      }
    }
  }
  return themeUtils;
};
