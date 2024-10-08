import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

// We want each package to be responsible for its own content.
const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
