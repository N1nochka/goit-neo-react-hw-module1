import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/goit-neo-react-hw-module1/", 
  build: {
    sourcemap: true,
  },
});