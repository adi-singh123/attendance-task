import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { meta } from 'eslint-plugin-react-hooks'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
