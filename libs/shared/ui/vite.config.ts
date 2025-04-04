/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/ui',

  plugins: [
    react(),
    nxViteTsPaths(),
  ],

  // Configuration for building your library.
  build: {
    outDir: '../../../dist/libs/shared/ui',
    lib: {
      entry: 'src/index.ts',
      name: 'ui',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
});
