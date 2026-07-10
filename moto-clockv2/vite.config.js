import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // Import du plugin

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      // Inclut tes images statiques dans le cache
      includeAssets: ['logo.webp', 'plan.webp', 'moto-icon.png'],
      manifest: {
        name: "MOTO'CLOCK Festival",
        short_name: "MOTO'CLOCK",
        description: "Application officielle du festival MOTO'CLOCK",
        theme_color: '#ffffff',
        icons: [
          {
            src: 'moto-icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'moto-icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});