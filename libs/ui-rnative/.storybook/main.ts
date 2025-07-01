import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-react-native-web"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      // 'react-native': 'react-native-web',

      // Comprehensive React Native to React Native Web aliasing
      "react-native$": "react-native-web",
      "react-native/": "react-native-web/",

      // React Native SVG web aliasing - force use of web build
      "react-native-svg$":
        "react-native-svg/lib/commonjs/ReactNativeSVG.web.js",
      "react-native-svg/lib/module":
        "react-native-svg/lib/commonjs/ReactNativeSVG.web.js",
    };

    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ".js",
      ".ts",
      ".tsx",
      ".json",
    ];

    return mergeConfig(config, {
      plugins: [nxViteTsPaths()],
      css: {
        postcss: {
          plugins: [
            (await import("tailwindcss")).default,
            (await import("autoprefixer")).default,
          ],
        },
      },
      optimizeDeps: {
        include: ["react-native-web"],
        exclude: ["react-native"],
      },
      build: {
        commonjsOptions: {
          transformMixedEsModules: true,
          exclude: ["react-native"],
        },
      },
      define: {
        __DEV__: JSON.stringify(true),
        global: "globalThis",
      },
      esbuild: {
        // Exclude react-native from esbuild processing
        exclude: ["react-native"],
      },
    });
  },
  docs: {
    autodocs: true,
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
