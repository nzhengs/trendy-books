import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
  test: {
    setupFiles: ['./src/setupTests.ts'],
    globals: true,
    environment: 'jsdom',
    coverage: {
      enabled: true,
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      skipFull: true,
      thresholds: { 100: true },
      exclude: [
        'src/main.tsx',
        'src/reportWebVitals.ts',
        '**/routeTree.gen.ts',
        '**/graphql-env.d.ts',
        'src/routes/**',
      ],
    },
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': resolve(__dirname, './src'),
    },
  },
});
