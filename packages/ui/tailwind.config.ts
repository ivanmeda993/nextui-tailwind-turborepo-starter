import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
    }),
  ],
};

export default config;
