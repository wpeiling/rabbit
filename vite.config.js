import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
  // css预处理器
  preprocessorOptions: {
    scss: {
      charset: false,
      additionalData: '@import "./src/assets/style/global.less";',
    },
  },
},
})
