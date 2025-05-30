import StyleDictionary, { TransformedToken } from 'style-dictionary';
import fs from 'fs';
import path from 'path';

const brands = ['Enterprise', 'Websites', 'LedgerLive'];
const themes = ['Light', 'Dark'];
const tokensFolder = 'tokens';
const defaultSuffix = '-default';

StyleDictionary.registerTransform({
  name: 'name/custom/direct-css-var',
  type: 'name',
  transform: (token: TransformedToken) => {
    return `--${token.path.join('-').toLowerCase()}`;
  },
});

function sanitizeTokenName(tokenName: string): string {
  let newName = tokenName;

  if (newName.toLowerCase().endsWith(defaultSuffix)) {
    newName = newName.substring(0, newName.length - defaultSuffix.length);
  }
  return newName;
}

StyleDictionary.registerFormat({
  name: 'javascript/custom-nested-object',
  format: function ({ dictionary, platform }) {
    const currentTheme = platform.options?.currentTheme?.toLowerCase();
    let mainKey = ':root';

    if (currentTheme === 'dark') {
      mainKey = '.dark';
    }
    const output = { [mainKey]: {} };

    dictionary.allTokens.forEach((token: TransformedToken) => {
      const tokenName = sanitizeTokenName(token.name);
      const finalTokenName = tokenName.replace(' ', '-');
      const tokenOriginalValue = token.original.value;
      let tokenFinalValue: string;

      if (tokenOriginalValue.startsWith('{')) {
        const aliasPathString = tokenOriginalValue.slice(1, -1);
        const varName = `--${aliasPathString
          .split('.')
          .join('-')
          .replace(defaultSuffix, '')
          .toLowerCase()}`;
        tokenFinalValue = `var(${varName})`;
      } else {
        tokenFinalValue = tokenOriginalValue;
      }

      output[mainKey][finalTokenName] = tokenFinalValue;
    });

    if (Object.keys(output[mainKey]).length === 0) {
      delete output[mainKey];
    }

    return `export const themeTokens = ${JSON.stringify(output, null, 2)};`;
  },
});

function getStyleDictionaryConfig(brand: string, theme: string) {
  const themeSpecificSources = [
    `${tokensFolder}/1.Primitives.Value.json`,
    `${tokensFolder}/2.Theme.${theme}.json`,
    `${tokensFolder}/3.Brand.${brand}.json`,
  ];

  return {
    platforms: {
      CSS: {
        source: themeSpecificSources,
        buildPath: `dist/lib/${brand.toLowerCase()}/`,
        transformGroup: 'css',
        files: [
          {
            destination: `variables.${theme.toLowerCase()}.css`,
            format: 'css/variables',
            options: {
              outputReferences: true,
            },
          },
        ],
        actions: ['remove-default-suffix'],
      },
      JavaScriptThemeObject: {
        source: themeSpecificSources,
        transforms: ['attribute/cti', 'name/custom/direct-css-var'],
        buildPath: `dist/lib/${brand.toLowerCase()}/`,
        files: [
          {
            destination: `theme.${theme.toLowerCase()}.js`,
            format: 'javascript/custom-nested-object',
          },
        ],
        actions: ['remove-default-suffix'],
      },
    },
  };
}

brands.forEach(function (brand) {
  themes.forEach(function (theme) {
    const currentConfig = getStyleDictionaryConfig(brand, theme);

    const sdCSS = new StyleDictionary({
      source: currentConfig.platforms.CSS.source,
      platforms: { CSS: currentConfig.platforms.CSS },
      log: { verbosity: 'verbose' },
    });
    sdCSS.buildPlatform('CSS');

    const sdJSObject = new StyleDictionary({
      source: currentConfig.platforms.JavaScriptThemeObject.source,
      platforms: {
        JavaScriptThemeObject: {
          ...currentConfig.platforms.JavaScriptThemeObject,
          options: {
            currentTheme: theme,
          },
        },
      },
      log: { verbosity: 'verbose' },
    });
    sdJSObject.buildPlatform('JavaScriptThemeObject');
  });
});

StyleDictionary.registerAction({
  name: 'remove-default-suffix',
  do: function (_dictionary, config) {
    if (!config.buildPath || !config.files || config.files.length === 0) return;
    const buildPath = config.buildPath;
    const destination = config.files[0].destination;
    if (!destination) return;
    const filePath = path.join(buildPath, destination);
    if (fs.existsSync(filePath)) {
      let cssContent = fs.readFileSync(filePath, 'utf8');
      cssContent = cssContent.replace(/(--[\w-]+)-default(\s*:)/g, '$1$2');
      fs.writeFileSync(filePath, cssContent);
    }
  },
  undo: function () {
    // No undo operation is necessary for this action.
  },
});
