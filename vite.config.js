import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the built site work from a GitHub Pages sub-path (username.github.io/repo-name/)
export default defineConfig({
  plugins: [react()],
  base: "./",
});
