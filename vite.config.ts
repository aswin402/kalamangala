import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode: _mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
  base: process.env.VITE_DEPLOY_TARGET === "ghpages" ? "/kalamangala/" : "/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))

