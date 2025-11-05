/**
 * Babel configuration for React Native
 */
module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['@react-native/babel-preset'],
    plugins: [
      // React Native Reanimated plugin (must be last)
      'react-native-reanimated/plugin',
      [
        'react-native-unistyles/plugin',
        {
          // pass root folder of your application
          // all files under this folder will be processed by the Babel plugin
          // if you need to include more folders, or customize discovery process
          // check available babel options
          root: 'src',
        },
      ],
      'babel-plugin-react-compiler',
    ],
  };
};
