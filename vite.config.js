import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: '/goit-neo-react-hw-module1/',  
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
