import type { Config } from 'jest';

const transformIncludePatterns = [
  '@react-native/polyfills',
  'react-native-css-interop',
  'react-native-svg',
  '(jest-)?react-native',
  '@react-native(-community)?',
];

export default {
  displayName: '@ledgerhq/ldls-ui-rnative',
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    `node_modules/(?!(.pnpm|${transformIncludePatterns.join('|')})/)`,
  ],
  moduleNameMapper: {
    '@ledgerhq/ldls-utils-shared':
      '<rootDir>/../../libs/utils-shared/src/index.ts',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: 'test-output/jest/coverage',
} as Config;
