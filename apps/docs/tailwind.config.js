/** @type {import('tailwindcss').Config} */
import base from "../../tooling/tailwind/tailwind.config.js";

const config = {
  presets: [base],
  content: [
    "./app/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    "../../tooling/tailwind/shared-styles.css",],
};

export default config;
