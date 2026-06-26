import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['moto-icon.png'],
      manifest: {
        name: "MOTO'CLOCK Festival App",
        short_name: "MOTO'CLOCK",
        theme_color: "#ed6c30",
        icons: [
          {
            src: 'moto-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ]
});