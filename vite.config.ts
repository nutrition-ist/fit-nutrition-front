import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [plugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Alias for cleaner imports
    },
  },
  server: {
    proxy: {
      // Proxy API calls to your Django backend
      '^/api': {
        target: 'http://127.0.0.1:8000', // Django development server
        changeOrigin: true,
        secure: false,
      },
    },
    port: 5173, // Development server port
  },
});
