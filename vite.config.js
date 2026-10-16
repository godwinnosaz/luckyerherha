import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    allowedHosts: ['luckyerherha.onrender.com', '.onrender.com'],
    open: false
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    allowedHosts: ['luckyerherha.onrender.com', '.onrender.com'],
  }
});
