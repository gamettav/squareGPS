import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
   server: { port: 3000 },
   plugins: [
      vue({
         template: {
            compilerOptions: {
               isCustomElement: (tag) => ["v-content"].includes(tag),
            },
         },
      }),
   ],
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "./"),
         "@src": path.resolve(__dirname, "./src"),
         "@public": path.resolve(__dirname, "./public"),
         "@components": path.resolve(__dirname, "./src/components"),
         "@api": path.resolve(__dirname, "./src/api"),
      },
   },
});
