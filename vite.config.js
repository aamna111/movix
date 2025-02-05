import { dirname, resolve } from 'node:path'
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import path from "path";
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: '/movix/', // Set the base path for deployment
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  }
});
