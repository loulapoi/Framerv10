import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Phase 1: Framer code-export reconstruction.
// The exported section files are plain (pre-transpiled) .js using react/jsx-runtime,
// so esbuild bundles them directly. No type-checking step is run on the bundled export.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
});
