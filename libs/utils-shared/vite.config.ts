import { defineConfig } from 'vite';
import { join } from 'path';
import dts from 'vite-plugin-dts';
import type { LibraryFormats } from 'vite';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/utils-shared',
  plugins: [
    dts({
      entryRoot: 'src',
      tsconfigPath: join(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  build: {
    lib: {
      entry: join(__dirname, 'src/index.ts'),
      name: 'utils-shared',
      fileName: 'index',
      formats: ['es' as LibraryFormats],
    },
    rollupOptions: {
      external: ['clsx', 'tailwind-merge'],
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
