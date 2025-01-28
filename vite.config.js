import { dirname, resolve } from 'node:path'
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: '/movix/', // Set the base path for deployment
  server: {
    port: 3000, // Change dev server port
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  define: {
    'process.env': process.env, // Include environment variables
  },
});
