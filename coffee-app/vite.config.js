import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // This will allow external devices (like mobile) to access the app
    port: 5173,  // Optional: specify a custom port (default is 5173)
  },
})
