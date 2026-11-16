import { defineConfig } from "vite";
import fs from "node:fs";

const input = fs.globSync(["index.html", "books/*.html"]);
console.log("input", input);

export default defineConfig({
  // Multi Page Application
  appType: "mpa",

  // /api proxy
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },

  input,
});
