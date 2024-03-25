import { fileURLToPath, URL } from 'node:url'
import envCompatible from 'vite-plugin-env-compatible';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    envCompatible({
      // Define o prefixo das variáveis de ambiente
      prefix: 'VITE_',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173, // O número da porta que você está usando
  }
})