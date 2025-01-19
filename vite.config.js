import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/movix/', // Set the base path for deployment
  server: {
    port: 3000, // Change dev server port
  },
  build: {
    outDir: 'dist', // Specify output directory for production builds
  },
  define: {
    'process.env': process.env, // Include environment variables
  },
});
