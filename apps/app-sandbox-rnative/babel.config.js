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
    ],
  };
};
