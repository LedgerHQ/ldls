import StyleDictionary from 'style-dictionary';
import type { TransformedToken } from 'style-dictionary';
import prettier from 'prettier';
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

const filterPrimitives = (token: TransformedToken) =>
  !token.filePath.includes('1.primitives.value.json');

StyleDictionary.registerFormat({
  name: 'javascript/custom-nested-object',
  format: function ({ dictionary, platform }) {
    const currentTheme = platform.options?.currentTheme?.toLowerCase();
    const currentBreakpoint = platform.options?.currentBreakpoint;
    let mainKey = ':root';

    if (currentTheme === 'dark') {
      mainKey = '.dark';
    } else if (currentBreakpoint && currentBreakpoint !== 'sm') {
      mainKey = `@media (min-width: theme("screens.${currentBreakpoint}"))`;
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

    // TODO: use CSSRuleObject type from Tailwind after exporting all values as strings from Figma
    const tokensType = currentTheme
      ? 'Record<string, Record<string, string>>'
      : 'Record<string, Record<string, string | number>>';

    return `/**
 * Do not edit directly, this file was auto-generated.
 */

export const tokens: ${tokensType} = ${JSON.stringify(output, null, 2)};`;
  },
});

function getSDTypographyConfigForBreakpoint(breakpoint: string) {
  const sources = [
    `${tokensFolder}/1.primitives.value.json`,
    `${tokensFolder}/4.breakpoint.${breakpoint}.json`,
  ];

  return {
    source: sources,
    platforms: {
      CSS: {
        buildPath: `src/themes/`,
        transformGroup: 'css',
        files: [
          {
            destination: `typography.${breakpoint}.css`,
            format: 'css/variables',
            filter: filterPrimitives,
            options: {
              outputReferences: true,
            },
          },
        ],
        options: {
          currentBreakpoint: breakpoint,
        },
        actions: ['remove-default-suffix', 'prettier'],
      },
      JavaScriptThemeObject: {
        buildPath: `src/themes/`,
        transformGroup: 'js',
        transforms: ['attribute/cti', 'name/custom/direct-css-var'],
        files: [
          {
            destination: `typography.${breakpoint}.ts`,
            format: 'javascript/custom-nested-object',
            filter: filterPrimitives,
          },
        ],
        options: {
          currentBreakpoint: breakpoint,
        },
        actions: ['remove-default-suffix', 'prettier'],
      },
    },
  };
}

function getSDThemeConfig(brand: string, theme: string) {
  const themeSpecificSources = [
    `${tokensFolder}/1.primitives.value.json`,
    `${tokensFolder}/2.theme.${theme}.json`,
    `${tokensFolder}/3.brand.${brand}.json`,
  ];

  return {
    source: themeSpecificSources,
    platforms: {
      CSS: {
        buildPath: `src/themes/${brand.toLowerCase()}/`,
        transformGroup: 'css',
        files: [
          {
            destination: `variables.${theme.toLowerCase()}.css`,
            format: 'css/variables',
            options: {
              outputReferences: true,
            },
            filter: filterPrimitives,
          },
        ],
        actions: ['remove-default-suffix', 'prettier'],
      },
      JavaScriptThemeObject: {
        transforms: ['attribute/cti', 'name/custom/direct-css-var'],
        buildPath: `src/themes/${brand.toLowerCase()}/`,
        files: [
          {
            destination: `theme.${theme.toLowerCase()}.ts`,
            format: 'javascript/custom-nested-object',
            filter: filterPrimitives,
          },
        ],
        actions: ['remove-default-suffix', 'prettier'],
        options: {
          currentTheme: theme,
        },
      },
    },
    log: { verbosity: 'verbose' as const },
  };
}

function getSDPrimitivesConfig() {
  const sources = [`${tokensFolder}/1.primitives.value.json`];

  return {
    source: sources,
    platforms: {
      CSS: {
        buildPath: `src/themes/`,
        transformGroup: 'css',
        files: [
          {
            destination: 'primitives.css',
            format: 'css/variables',
            options: {
              outputReferences: true,
            },
          },
        ],
        actions: ['remove-default-suffix', 'prettier'],
      },
      JavaScriptThemeObject: {
        transforms: ['attribute/cti', 'name/custom/direct-css-var'],
        buildPath: `src/themes/`,
        files: [
          {
            destination: 'primitives.ts',
            format: 'javascript/custom-nested-object',
          },
        ],
        actions: ['remove-default-suffix', 'prettier'],
      },
    },
    log: { verbosity: 'verbose' as const },
  };
}

const buildPrimitives = () => {
  const sd = new StyleDictionary(getSDPrimitivesConfig());
  sd.buildAllPlatforms();
};

buildPrimitives();

brands.forEach(function (brand) {
  themes.forEach(function (theme) {
    const currentConfig = getSDThemeConfig(brand, theme);

    const sd = new StyleDictionary(currentConfig);

    sd.buildAllPlatforms();
  });

  breakpoints.forEach(function (bp) {
    const sdTypography = new StyleDictionary(
      getSDTypographyConfigForBreakpoint(bp),
    );
    sdTypography.buildAllPlatforms();
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
  StyleDictionary.registerAction({
    name: 'prettier',
    do: async (_dictionary, config) => {
      if (!config.buildPath || !config.files || config.files.length === 0)
        return;
      const { buildPath } = config;
      console.log(`\nRunning Prettier action on files in: ${buildPath}`);
      const prettierConfig = await prettier.resolveConfig(process.cwd());

      config.files.forEach(async (file) => {
        if (
          file.destination?.endsWith('.ts') ||
          file.destination?.endsWith('.css')
        ) {
          const filePath = path.join(buildPath, file.destination);
          if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            const formatted = await prettier.format(content, {
              ...prettierConfig,
              parser: file.destination.endsWith('.ts') ? 'typescript' : 'css',
            });
            fs.writeFileSync(filePath, formatted);
            console.log(` ✓ Formatted ${filePath}`);
          }
        }
      });
    },
    undo: () => {
      // No undo operation is necessary for this action.
    },
  });
});
