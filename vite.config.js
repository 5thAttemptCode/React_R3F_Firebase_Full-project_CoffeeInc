import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'


// Load the environment variables
dotenv.config()

export default defineConfig({
 plugins: [react()],
 define: {
    'process.env': process.env,
 },
 resolve: {
   alias: {
     '@': '/src',
   },
 },
 server: {
  port: 5173,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:5173",
}
})