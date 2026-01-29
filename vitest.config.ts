/// <reference types="vitest" />

import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    exclude: ["**/node_modules/**", "**/dist/**", "**/tests/**"],
    passWithNoTests: true,
    server: {
      deps: {
        inline: ["@oneds/react", "@oneds/styles"],
      },
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "cobertura"],
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: [
        "node_modules/",
        "dist/",
        "src/tests/",
        "src/main.tsx",
        "**/*.config.js",
        "**/*.config.ts",
      ],
    },
  },
})
