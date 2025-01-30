import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure it's looking at the right root directory
  build: {
    outDir: 'dist'
  }
})
