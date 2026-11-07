import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  // Multi Page Application
  appType: "mpa",

  // /api proxy
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
