import { join } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function resolve(dir: string): string {
  return join(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@': resolve('src/'),
      '@scss': resolve('src/assets/scss'),
      '@public': resolve('public/'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@scss/variables.scss';
        `,
      },
    },
  },
  build: {
    sourcemap: true,
  },
})
