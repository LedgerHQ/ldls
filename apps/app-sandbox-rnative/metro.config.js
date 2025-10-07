const { withNxMetro } = require('@nx/react-native');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const processConfig = async () => {
  const defaultConfig = getDefaultConfig(__dirname);
  const { assetExts, sourceExts } = defaultConfig.resolver;
  const monorepoRoot = path.resolve(__dirname, '../..');
  const cssEntry = path.resolve(__dirname, 'global.css');

  /**
   * Metro configuration
   * https://reactnative.dev/docs/metro
   *
   * @type {import('metro-config').MetroConfig}
   */
  const customConfig = {
    cacheVersion: 'app-sandbox-rnative',
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg', 'css'],
    },
    watchFolders: [
      monorepoRoot,
      path.join(monorepoRoot, 'node_modules'),
      path.join(monorepoRoot, 'libs/ui-rnative'),
    ],
  };

  const nxMetroConfig = await withNxMetro(
    mergeConfig(defaultConfig, customConfig),
    {
      // Change this to true to see debugging info.
      // Useful if you have issues resolving modules
      debug: false,
      // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
      extensions: [],
      // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
      watchFolders: [],
    },
  );
  return withNativeWind(nxMetroConfig, {
    input: cssEntry,
  });
};

module.exports = processConfig();
