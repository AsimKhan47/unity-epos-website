import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ✅ correct import

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // ✅ correct for local + production root
});
