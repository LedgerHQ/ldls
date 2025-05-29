import StyleDictionary, { TransformedToken } from 'style-dictionary';
import fs from 'fs';
import path from 'path';

const brands = ['Enterprise', 'Websites', 'LedgerLive'];
const themes = ['Light', 'Dark']; // Ensure 'Light' is processed to get :root, then 'Dark' for .dark
const tokensFolder = 'tokens';

// New custom name transform: Converts token path directly to --kebab-case-css-var
StyleDictionary.registerTransform({
  name: 'name/custom/direct-css-var',
  type: 'name',
  transform: (token: TransformedToken) => {
    // Joins path segments with '-', converts to lowercase, then prefixes with '--'
    return `--${token.path.join('-').toLowerCase()}`;
  },
});

// Revised custom format to build structure from flat tokens
StyleDictionary.registerFormat({
  name: 'javascript/custom-nested-object',
  format: function ({ dictionary, platform }) {
    const currentTheme = platform.options?.currentTheme?.toLowerCase();
    let mainKey = ':root'; // Default for light theme

    if (currentTheme === 'dark') {
      mainKey = '.dark';
    }
    const output = { [mainKey]: {} };

    dictionary.allTokens.forEach((token: TransformedToken) => {
      let valueOutput = token.value;

      console.log('DEBUG referenceOutput:', valueOutput);
      console.log('DEBUG referenceOutput:', token);

      if (token.original.value.startsWith('{')) {
        const aliasPathString = token.original.value.slice(1, -1);
        const aliasPathArray = aliasPathString
          .replace(/\.value$/, '')
          .split('.');
        const varName = `--${aliasPathArray.join('-').toLowerCase()}`;
        valueOutput = `var(${varName})`;
      } else {
        valueOutput = token.original.value;
      }

      output[mainKey][token.name] = valueOutput;
    });

    // Remove empty groups for cleaner output (though with this new structure, mainKey should always exist if there are tokens)
    if (Object.keys(output[mainKey]).length === 0) {
      delete output[mainKey]; // Should not happen if tokens exist
    }

    return `export const converted = ${JSON.stringify(output, null, 2)};`;
  },
});

function getStyleDictionaryConfig(brand: string, theme: string) {
  // theme is now 'Light' or 'Dark'
  const themeSpecificSources = [
    `${tokensFolder}/1.Primitives.Value.json`,
    `${tokensFolder}/2.Theme.${theme}.json`, // Dynamically uses Light or Dark
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
      // Typescript: {
      //   source: themeSpecificSources,
      //   transformGroup: "js",
      //   buildPath: `dist/lib/${brand.toLowerCase()}/`,
      //   files: [
      //     {
      //       destination: `tokens.${theme.toLowerCase()}.ts`,
      //       format: "javascript/es6",
      //       options: {
      //         showFileHeader: false,
      //       },
      //     },
      //     {
      //       destination: `tokens.${theme.toLowerCase()}.d.ts`,
      //       format: "typescript/es6-declarations",
      //     },
      //   ]
      // },
      JavaScriptThemeObject: {
        // JS Object is now also theme-specific
        source: themeSpecificSources, // Use theme-specific sources
        transforms: ['attribute/cti', 'name/custom/direct-css-var'],
        buildPath: `dist/lib/${brand.toLowerCase()}/`,
        files: [
          {
            destination: `theme.${theme.toLowerCase()}.js`, // Output theme.light.js or theme.dark.js
            format: 'javascript/custom-nested-object',
          },
        ],
      },
    },
  };
}

// Build loop adjustment:
// All platforms (CSS, TS, JavaScriptThemeObject) are now built per brand AND per theme.
brands.forEach(function (brand) {
  themes.forEach(function (theme) {
    // 'Light', then 'Dark'
    const currentConfig = getStyleDictionaryConfig(brand, theme);

    // CSS Build
    const sdCSS = new StyleDictionary({
      source: currentConfig.platforms.CSS.source,
      platforms: { CSS: currentConfig.platforms.CSS },
      log: { verbosity: 'verbose' },
    });
    sdCSS.buildPlatform('CSS');

    // // Typescript Build
    // const sdTS = new StyleDictionary({
    //   source: currentConfig.platforms.Typescript.source,
    //   platforms: { Typescript: currentConfig.platforms.Typescript },
    //   log: { verbosity: 'verbose' }
    // });
    // sdTS.buildPlatform('Typescript');

    // JavaScriptThemeObject Build (now inside theme loop)
    const sdJSObject = new StyleDictionary({
      source: currentConfig.platforms.JavaScriptThemeObject.source,
      platforms: {
        JavaScriptThemeObject: {
          ...currentConfig.platforms.JavaScriptThemeObject,
          options: {
            // Pass currentTheme to the formatter
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
