import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Crusader/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
