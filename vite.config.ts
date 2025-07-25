import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "@assets": new URL("./src/assets", import.meta.url).pathname,
    },
  },
  server: {
    allowedHosts: [".gdgaccra.org", ".traefik.me"],
  },
});
