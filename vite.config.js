import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/SIH-PROJECT/", // Set to your repository name with a leading slash
  plugins: [react()],
});
