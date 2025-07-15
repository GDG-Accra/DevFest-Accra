import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {},
  },
  server: {
    allowedHosts: [
      "gdg-accra-devfest-website-xwgzaw-b29891-168-231-85-156.traefik.me",
    ],
  },
});
