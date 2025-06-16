import StyleDictionary, { TransformedToken } from 'style-dictionary';
import fs from 'fs';
import path from 'path';

const brands = ['enterprise', 'websites', 'ledger-live'];
const breakpoints = ['sm', 'md', 'lg', 'xl'];
const themes = ['light', 'dark'];
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

  if (newName.endsWith('%')) {
    newName = newName.substring(0, newName.length - 1);
  }

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
      const tokenOriginalValue = token.original.$value;

      let tokenFinalValue: string;
      if (
        typeof tokenOriginalValue === 'string' &&
        tokenOriginalValue.startsWith('{') &&
        tokenOriginalValue.endsWith('}')
      ) {
        const aliasPathString = tokenOriginalValue.slice(1, -1);
        let varName = `--${aliasPathString
          .split('.')
          .join('-')
          .replace(defaultSuffix, '')
          .toLowerCase()}`;

        if (varName.endsWith('%')) {
          varName = varName.substring(0, varName.length - 1);
        }

        tokenFinalValue = `var(${varName})`;
      } else {
        tokenFinalValue = tokenOriginalValue;
      }

      output[mainKey][finalTokenName] = tokenFinalValue;
    });

    if (Object.keys(output[mainKey]).length === 0) {
      delete output[mainKey];
    }

    return `export const tokens = ${JSON.stringify(output, null, 2)};`;
  },
});

function getSDThemeConfig(brand: string, theme: string, breakpoint: string) {
  const themeSpecificSources = [
    `${tokensFolder}/1.primitives.value.json`,
    `${tokensFolder}/2.theme.${theme}.json`,
    `${tokensFolder}/3.brand.${brand}.json`,
    `${tokensFolder}/4.breakpoint.${breakpoint}.json`,
  ];

  return {
    source: themeSpecificSources,
    platforms: {
      CSS: {
        buildPath: `dist/lib/${brand.toLowerCase()}/`,
        transformGroup: 'css',
        files: [
          {
            destination: `variables.${theme.toLowerCase()}.css`,
            format: 'css/variables',
            options: {
              outputReferences: true,
            },
            filter: (token) => {
              return !token.filePath.includes('1.primitives.value.json');
            },
          },
        ],
        actions: ['remove-default-suffix'],
      },
      JavaScriptThemeObject: {
        transforms: ['attribute/cti', 'name/custom/direct-css-var'],
        buildPath: `dist/lib/${brand.toLowerCase()}/`,
        files: [
          {
            destination: `theme.${theme.toLowerCase()}.js`,
            format: 'javascript/custom-nested-object',
            filter: (token) => {
              return !token.filePath.includes('1.primitives.value.json');
            },
          },
        ],
        actions: ['remove-default-suffix'],
        options: {
          currentTheme: theme,
        },
      },
    },
    log: { verbosity: 'verbose' as const },
  };
}

// function getSDTypographyConfig(brand: string, breakpoint: string) {
//   const styles = `${tokensFolder}/styles.json`;
//   const sources = [styles, `${tokensFolder}/4.breakpoint.${breakpoint}.json`];

//   return {
//     source: sources,
//     platforms: {
//       BreakpointTypography: {
//         transforms: ['attribute/cti', 'name/custom/direct-css-var'],
//         buildPath: `dist/lib/${brand.toLowerCase()}/typography/`,
//         files: [
//           {
//             destination: `${breakpoint}.js`,
//             format: 'javascript/typography-classes',
//           },
//         ],
//       },
//     },
//     log: { verbosity: 'verbose' as const },
//   };
// }

function getSDPrimitivesConfig() {
  const sources = [`${tokensFolder}/1.primitives.value.json`];

  return {
    source: sources,
    platforms: {
      CSS: {
        buildPath: `dist/lib/`,
        transformGroup: 'css',
        files: [
          {
            destination: `variables.primitives.css`,
            format: 'css/variables',
            options: {
              outputReferences: true,
            },
          },
        ],
        actions: ['remove-default-suffix'],
      },
      JavaScriptThemeObject: {
        transforms: ['attribute/cti', 'name/custom/direct-css-var'],
        buildPath: `dist/lib/`,
        files: [
          {
            destination: `primitives.js`,
            format: 'javascript/custom-nested-object',
          },
        ],
        actions: ['remove-default-suffix'],
      },
    },
    log: { verbosity: 'verbose' as const },
  };
}

const buildPrimitives = () => {
  const sd = new StyleDictionary(getSDPrimitivesConfig());
  sd.buildAllPlatforms();
};

// const buildTypography = () => {
//   brands.forEach((brand) => {
//     breakpoints.forEach((breakpoint) => {
//       const sd = new StyleDictionary(getSDTypographyConfig(brand, breakpoint));
//       sd.buildAllPlatforms();
//     });
//   });
// };

buildPrimitives();
// buildTypography();

breakpoints.forEach(function (breakpoint) {
  brands.forEach(function (brand) {
    themes.forEach(function (theme) {
      const currentConfig = getSDThemeConfig(brand, theme, breakpoint);

      const sd = new StyleDictionary(currentConfig);

      sd.buildAllPlatforms();
    });
  });

  StyleDictionary.registerAction({
    name: 'remove-default-suffix',
    do: function (_dictionary, config) {
      if (!config.buildPath || !config.files || config.files.length === 0)
        return;
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

  // StyleDictionary.registerFormat({
  //   name: 'javascript/typography-classes',
  //   format: function ({ dictionary, platform }) {
  //     const breakpoint = platform.options?.breakpoint?.toLowerCase();
  //     const mediaQueries = {
  //       sm: '(min-width: 640px)',
  //       md: '(min-width: 768px)',
  //       lg: '(min-width: 1024px)',
  //       xl: '(min-width: 1280px)',
  //     };

  //     const output = {
  //       [`@media ${mediaQueries[breakpoint]}`]: {},
  //     };

  //     dictionary.allTokens.forEach((token) => {
  //       const tokenOriginalValue = token.original.$value;

  //       const tokenFinalValue = tokenOriginalValue;

  //       console.log(token);

  //       const type = token.path[1]; // e.g., 'display', 'heading', 'body'
  //       const property = token.path[2]; // e.g., 'size', 'weight', 'line-height'

  //       if (type && property) {
  //         const className = `.${type}-${token.path[3] || '1'}`;
  //         output[`@media ${mediaQueries[breakpoint]}`][className] =
  //           output[`@media ${mediaQueries[breakpoint]}`][className] || {};
  //         output[`@media ${mediaQueries[breakpoint]}`][className][
  //           `font-${property}`
  //         ] = tokenFinalValue;
  //       }
  //     });

  //     return `export const typographyClasses = ${JSON.stringify(
  //       output,
  //       null,
  //       2
  //     )};`;
  //   },
});
