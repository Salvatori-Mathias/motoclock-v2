import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Commente cette ligne :
// import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // Commente tout ce bloc :
    /*
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['moto-icon.png'],
      manifest: {
        name: "MOTO'CLOCK Festival App",
        short_name: "MOTO'CLOCK",
        theme_color: "#ed6c30",
        icons: [
          {
            src: '/moto-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
    */
  ],
  build: {
    minify: 'terser',
  }
});