import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // S'assure que le dossier de sortie est bien dist
    sourcemap: false, // Plus léger pour le déploiement
  }
});