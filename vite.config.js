import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This configures Vite to listen on all local IPs
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Forward all request starting with /api to dev server
        changeOrigin: true,
        secure: false,
      },
  },
  }
});