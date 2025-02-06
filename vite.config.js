import { dirname, resolve } from 'node:path'
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import path from "path";
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: '/movix/', // Set the base path for deployment
  build: {
    // Ensure assets are built to the correct directory
    outDir: 'dist',
    // Generate source maps for better debugging
    sourcemap: true,
    // Configure asset handling
    assetsDir: 'assets',
  }

});
