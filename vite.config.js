import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // Map the src directory to the root
            assets: "/src/assets",
            components: "/src/components",
            hooks: "/src/hooks",
            lib: "/src/lib",
            pages: "/src/pages",
            routes: "/src/routes",
            store: "/src/store",
            utils: "/src/utils",
        },
    },
});
