import type { Plugin } from 'vite';

const UNDEFINED_EXPORTS_REGEXP = /Object\.defineProperty\(exports,/;

/**
 * Temporary fix for NativeWind's `cssInterop` CommonJS exports in ESM context.
 *
 * NativeWind's `cssInterop` (from react-native-css-interop) contains bare CommonJS code
 * that references `exports` without it being defined in the ESM bundle, causing:
 * `ReferenceError: exports is not defined` at runtime.
 *
 * This plugin injects `const exports = {}` at the start of affected chunks.
 * Can be removed once react-native-css-interop ships proper ESM builds or when upgrading to v5.
 */
export const commonjsExportsShim = (): Plugin => ({
  name: 'commonjs-exports-shim',
  renderChunk(code) {
    if (UNDEFINED_EXPORTS_REGEXP.test(code)) {
      return {
        code: `const exports = {};\n${code}`,
        map: null,
      };
    }
    return undefined;
  },
});
