import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log(path.resolve(__dirname, './src/assets'))
export default defineConfig({
  plugins: [react()],
})
