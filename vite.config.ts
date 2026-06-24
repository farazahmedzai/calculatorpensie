import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          const modulePath = id.replace(/\\/g, "/");
          if (modulePath.includes("node_modules")) {
            if (modulePath.includes("/react/") || modulePath.includes("/react-dom/") || modulePath.includes("/wouter/")) {
              return "vendor-react";
            }
            if (modulePath.includes("/recharts/")) {
              return "vendor-recharts";
            }
            if (modulePath.includes("/framer-motion/")) {
              return "vendor-motion";
            }
            if (modulePath.includes("/lucide-react/")) {
              return "vendor-lucide";
            }
            if (modulePath.includes("@radix-ui")) {
              return "vendor-radix";
            }
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
