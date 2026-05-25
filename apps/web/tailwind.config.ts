import type { Config } from "tailwindcss";
import sharedConfig from "@jplc/config/tailwind";

const config: Config = {
  presets: [sharedConfig as Config],
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
};

export default config;
