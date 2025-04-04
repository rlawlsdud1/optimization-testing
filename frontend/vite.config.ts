import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import visualizer from "./node_modules/rollup-plugin-visualizer/dist/plugin/index.d";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
