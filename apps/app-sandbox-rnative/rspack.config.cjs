const path = require('path');
const Repack = require('@callstack/repack');
const { NativeWindPlugin } = require('@callstack/repack-plugin-nativewind');
const { ReanimatedPlugin } = require('@callstack/repack-plugin-reanimated');

/**
 * Re.Pack (Rspack) configuration for React Native with NativeWind support
 */
module.exports = (env) => {
  const {
    mode = 'development',
    context = __dirname,
    entry = './src/main.tsx',
    platform = process.env.PLATFORM || 'ios',
    minimize = mode === 'production',
    devServer = undefined,
    bundleFilename = undefined,
    sourceMapFilename = undefined,
    assetsPath = undefined,
    reactNativePath = require.resolve('react-native'),
  } = env;

  const isProd = mode === 'production';
  const cssEntry = path.resolve(__dirname, 'global.css');

  return {
    mode,
    devtool: false,
    context,
    entry: [
      // Import global CSS for NativeWind
      cssEntry,
      // Main entry point
      entry,
    ],
    resolve: {
      extensions: [
        `.${platform}.tsx`,
        `.${platform}.ts`,
        `.${platform}.jsx`,
        `.${platform}.js`,
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.json',
        '.cjs',
        '.mjs',
      ],
      alias: {
        'react-native': reactNativePath,
      },
      symlinks: true,
    },
    output: {
      clean: true,
      hashFunction: 'xxhash64',
      path: path.join(__dirname, 'build', platform),
      filename: 'index.bundle',
      chunkFilename: '[name].chunk.bundle',
      uniqueName: 'app-sandbox-rnative',
    },
    optimization: {
      minimize,
      chunkIds: 'named',
    },
    module: {
      rules: [
        // React Native and its dependencies (use Babel for Flow support)
        {
          test: /\.[jt]sx?$/,
          include: [
            /node_modules[\\/]react-native[\\/]/,
            /node_modules[\\/]@react-native[\\/]/,
            /node_modules[\\/]@react-native-community[\\/]/,
            /node_modules[\\/]@callstack[\\/]repack[\\/]/,
            /node_modules[\\/]react-native-css-interop[\\/]/,
          ],
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['module:@react-native/babel-preset'],
            },
          },
        },
        // Application code (use SWC)
        {
          test: /\.[cm]?[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'builtin:swc-loader',
            options: {
              env: {
                targets: { 'react-native': '0.77' },
              },
              jsc: {
                externalHelpers: true,
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                  decorators: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: !isProd,
                    refresh: !isProd,
                  },
                },
              },
            },
          },
        },
        // Monorepo packages in node_modules (use SWC)
        {
          test: /\.[cm]?[jt]sx?$/,
          include: [/node_modules[\\/]@ledgerhq[\\/]/],
          use: {
            loader: 'builtin:swc-loader',
            options: {
              env: {
                targets: { 'react-native': '0.77' },
              },
              jsc: {
                externalHelpers: true,
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                  decorators: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: !isProd,
                    refresh: !isProd,
                  },
                },
              },
            },
          },
        },
        // SVG support
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                native: true,
              },
            },
          ],
        },
        // Assets (images, fonts, etc.)
        {
          test: Repack.getAssetExtensionsRegExp(
            Repack.ASSET_EXTENSIONS.filter((ext) => ext !== 'svg'),
          ),
          use: {
            loader: '@callstack/repack/assets-loader',
            options: {
              platform,
              devServerEnabled: Boolean(devServer),
              scalableAssetExtensions: Repack.SCALABLE_ASSETS,
            },
          },
        },
      ],
    },
    plugins: [
      new Repack.RepackPlugin({
        context,
        mode,
        platform,
        devServer,
        output: {
          bundleFilename,
          sourceMapFilename,
          assetsPath,
        },
      }),
      new NativeWindPlugin({
        input: cssEntry,
      }),
      new ReanimatedPlugin(),
    ],
  };
};
