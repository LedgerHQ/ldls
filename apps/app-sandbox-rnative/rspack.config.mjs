import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';
import { NativeWindPlugin } from '@callstack/repack-plugin-nativewind';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default Repack.defineRspackConfig({
  context: __dirname,
  entry: './src/main.tsx',
  resolve: {
    ...Repack.getResolveOptions({
      enablePackageExports: true,
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.css'],
    }),
  },

  module: {
    rules: [
      {
        test: /\.[cm]?[jt]sx?$/,
        type: 'javascript/auto',
        use: {
          loader: '@callstack/repack/babel-swc-loader',
          parallel: true,
          options: {},
        },
      },
      {
        test: /\.css$/,
        use: ['postcss-loader'],
        type: 'css',
      },
      ...Repack.getAssetTransformRules(),
    ],
  },
  plugins: [new NativeWindPlugin(), new Repack.RepackPlugin()],
});
