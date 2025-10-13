/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: ['../components/**/*.stories.?(ts|tsx)'],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
};
