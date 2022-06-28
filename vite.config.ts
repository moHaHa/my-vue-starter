import { resolve } from "path"
import { defineConfig } from 'vite'
import { presetAttributify, presetWind } from 'unocss'
import unoCSS from 'unocss/vite'
import presetWebFonts from '@unocss/preset-web-fonts'
import vue from '@vitejs/plugin-vue'
import vueComponents from 'unplugin-vue-components/vite'
import viteChecker from 'vite-plugin-checker'



// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    emptyOutDir: true,
    minify: 'esbuild'
  },
  plugins: [
    vue(),
    vueComponents({
      dts: true
    }),
    unoCSS({
      theme: {
        fontFamily: {
          'raleway': ['Raleway', 'ui-sans-serif', 'system-ui'],
        },
      },
      presets: [
        presetAttributify(),
        presetWind({
          
        }),
        presetWebFonts({
          provider: 'google',
          fonts: {
            raleway: 'Raleway',
          }
        })
      ]
    }),
    viteChecker({ vueTsc: true }),
  ]
})
