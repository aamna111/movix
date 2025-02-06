import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // assuming you're using React

export default defineConfig({
  base: '/movix/', // Replace 'movix' with your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // This ensures Vite generates the correct asset paths
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      }
    }
  }
})