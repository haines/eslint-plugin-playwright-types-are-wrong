import playwrightPlugin from "eslint-plugin-playwright";
import { config as defineConfig } from "typescript-eslint";

export const playwrightConfig = defineConfig(
  playwrightPlugin.configs["flat/recommended"],
);
