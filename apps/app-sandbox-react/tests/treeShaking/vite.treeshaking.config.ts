/// <reference types='vitest' />
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  root: resolve(__dirname),
  plugins: [react()],
  css: {
    postcss: resolve(__dirname, '../../postcss.config.js'),
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    minify: true,
    rollupOptions: {
      output: {
        // Output a single bundle file for easier verification
        manualChunks: undefined,
        inlineDynamicImports: true,
      },
    },
  },
}));
