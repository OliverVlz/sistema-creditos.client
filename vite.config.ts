import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@features': '/src/features',
      '@hooks': '/src/hooks',
      '@types': '/src/types',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@shell': '/src/shell',
      '@router': '/src/router',
    },
  },
  server: {
    port: 3000,
    host: true,
  },
})
