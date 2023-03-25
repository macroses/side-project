import { resolve } from 'path';
import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/side-project/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        faq: resolve(__dirname, 'faq.html'),
        message: resolve(__dirname, 'message.html'),
        info: resolve(__dirname, 'info.html'),
        loader: resolve(__dirname, 'loader.html'),
        loaderSuccess: resolve(__dirname, 'loader-success.html'),
        loaderError: resolve(__dirname, 'loader-error.html'),
        formFirst: resolve(__dirname, 'form-1.html'),
        formSecond: resolve(__dirname, 'form-2.html'),
        formThird: resolve(__dirname, 'form-3.html'),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ],
    },
  },
});
