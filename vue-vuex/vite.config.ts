import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src")
    },
    extensions:['.ts','.vue','.js']
  },
  server:{
    proxy:{
      "/api":{
        target:"http://localhost:4000",
        changeOrigin:true,
        rewrite:path => path.replace(/^\/api/, '')
      }
    }
  }
})
