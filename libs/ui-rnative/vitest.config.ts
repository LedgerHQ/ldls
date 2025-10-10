import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import reactNative from 'vitest-react-native';

export default defineConfig({
  plugins: [reactNative(), react()],
});
