import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/site/",
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})
