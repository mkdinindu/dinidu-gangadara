import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages project sites must use a relative base so the app loads from
  // <username>.github.io/<repo> instead of the domain root.
  base: './',
  plugins: [vue()],
})
