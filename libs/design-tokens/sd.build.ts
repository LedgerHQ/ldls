import StyleDictionary from 'style-dictionary';
import { formats, transformGroups } from 'style-dictionary/enums';

const { cssVariables } = formats;
const { css } = transformGroups;

const brands = ['Enterprise', 'Websites', 'LedgerLive'];
const themes = ['Dark', 'Light'];
const tokensFolder = 'tokens';

function getStyleDictionaryConfig(brand, theme) {
  return {
    source: [
      `${tokensFolder}/1.Primitives.Value.json`,
      `${tokensFolder}/2.Theme.${theme}.json`,
      `${tokensFolder}/3.Brand.${brand}.json`,
    ],
    platforms: {
      CSS: {
        buildPath: `build/css/${brand.toLowerCase()}/`,
        transformGroup: css,
        files: [
          {
            destination: `variables.${theme.toLowerCase()}.css`,
            format: cssVariables,
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  };
}

brands.map(function (brand) {
  themes.map(function (theme) {
    const sd = new StyleDictionary(getStyleDictionaryConfig(brand, theme));
    sd.buildAllPlatforms();
  });
});
