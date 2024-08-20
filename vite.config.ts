import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "PharmaSolve",
        short_name: "PharmaSolve",
        description: "PharmaSolve es una aplicación para la gestión de faltantes en farmacias",
        theme_color: "#45a9af",
        background_color: "#ffffff",
        display: "standalone",
        display_override: ["window-controls-overlay"],
        start_url: "/",
        icons: [
          {
            src: "/pwa-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
