import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Added hmr: { path: '/ws' } to be able to set socket connection in the nginx config file

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    hmr: {
      path: '/ws'
    }
  }
})
