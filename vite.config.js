import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/englishbook/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        books: resolve(__dirname, 'books.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        custom: resolve(__dirname, 'custom.html'),
        contact: resolve(__dirname, 'contact.html'),
        alice: resolve(__dirname, '爱丽丝漫游奇遇记 (alice\'s adventures in wonderland)_001_中英_离线语音电脑/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});