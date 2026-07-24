import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // frontend runs here
    proxy: {
      // when frontend calls /api → forward to backend
      "/api": {
        target: "http://localhost:5000", // backend URL
        changeOrigin: true,              // avoid CORS issues
        secure: false,                   // if using HTTPS locally
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
