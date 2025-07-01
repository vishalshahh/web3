import type { Config } from "tailwindcss";
import base from "../../tooling/tailwind/tailwind.config";

const config: Config = {
	presets: [base],
	content: ["./src/**/*.{ts,tsx}"],
};

export default config;
