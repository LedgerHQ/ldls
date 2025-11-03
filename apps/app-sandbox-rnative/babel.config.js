/**
 * Babel configuration for React Native with NativeWind support
 */
module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      // NativeWind JSX runtime support
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
          importSource: 'nativewind',
        },
      ],
      // React Native Reanimated plugin (must be last)
      'react-native-reanimated/plugin',
    ],
  };
};

