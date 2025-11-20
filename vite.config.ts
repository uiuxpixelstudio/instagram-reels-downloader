import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/instagram-reels-downloader/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})

