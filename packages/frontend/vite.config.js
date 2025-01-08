import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react', 
            'react-dom', 
            'axios', 
            'react-hook-form', 
            'react-icons', 
            'react-responsive', 
            'react-router', 
            'react-router-dom'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})