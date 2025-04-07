module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        '@nx/react/babel',
        {
          runtime: 'automatic',
          useBuiltIns: 'usage',
        },
      ],
    ],
    plugins: [
      ["nativewind/babel", { mode: "transformOnly" }]
    ],
    env: {
      test: {
        presets: [
          ['module:@react-native/babel-preset', { useTransformReactJSX: true }],
        ],
      },
    },
  };
};
