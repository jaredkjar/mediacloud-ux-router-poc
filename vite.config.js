import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";
import externalize from "vite-plugin-externalize-dependencies";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(react({ jsxRuntime: "classic" })),
    vitePluginSingleSpa({}),
    externalize({
      externals: [
        "styled-components",
        "@fox/mediacloud-ux-styleguide-poc",
      ],
    }),
  ],
});
