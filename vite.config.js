import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/movix/', // This slash at the end is important!
  define: {
    'import.meta.env.VITE_APP_TMDB_TOKEN': JSON.stringify(process.env.VITE_API_KEY),
  },
  build: {
    outDir: 'dist',
    // Force Vite to handle all assets with the correct base path
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Ensure all asset paths include the base
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name].[hash][extname]`
          }
          return `assets/[name].[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
      }
    }
  }
})