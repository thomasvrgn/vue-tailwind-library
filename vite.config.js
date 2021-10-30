import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { name } from './package.json';
import path from 'path';

import postcss from 'rollup-plugin-postcss';
import vueRollup from 'rollup-plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: name,
      fileName: (format) => `${name}.${format}.js`,
    },
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
        plugins: [
          vueRollup({
            preprocessStyles: true,
            css: true,
          }),
          postcss({
            inject: true,
            plugins: [
              require('tailwindcss')('./tailwind.config.js'),
              require('autoprefixer'),
              require('postcss-import'),
            ]
          }),
        ]
      },
    }
  }
})
