const path = require('path');
const { withNxMetro } = require('@nx/react-native');
const { mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const cssEntry = path.resolve(__dirname, 'global.css');

const { getDefaultConfig } = require('expo/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const defaultConfig = getDefaultConfig(__dirname);
const processConfig = async () => {
  // const nxMetroConfig = await withNxMetro(mergeConfig(defaultConfig, {}), {
  //   // Change this to true to see debugging info.
  //   // Useful if you have issues resolving modules
  //   debug: false,
  //   // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
  //   extensions: [],
  //   // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
  //   watchFolders: [],
  // });

  const withSBConfig = withStorybook(defaultConfig, {
    enabled: true,
    configPath: path.resolve(__dirname, './.storybook'),
    useJs: true,
  });

  return withNativeWind(withSBConfig, {
    input: cssEntry,
  });
};

module.exports = processConfig();
