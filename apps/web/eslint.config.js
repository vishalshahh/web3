import baseConfig, { restrictEnvAccess } from "@repo/eslint-config/base.js";
import nextjsConfig from "@repo/eslint-config/nextjs";
import reactConfig from "@repo/eslint-config/react.js";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];