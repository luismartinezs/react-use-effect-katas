import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { alias } from "./alias";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [react()],
})
