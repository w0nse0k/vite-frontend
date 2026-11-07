import { defineConfig } from "vite";
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
