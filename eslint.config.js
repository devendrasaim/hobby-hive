import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
<<<<<<< HEAD
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
=======
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
>>>>>>> 341cf735da52260ed6e4908981d32b93d46e8c29
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
<<<<<<< HEAD
      parserOptions: {
         project: ["./tsconfig.app.json", "./tsconfig.node.json"],
         tsconfigRootDir: import.meta.dirname,
      },
=======
>>>>>>> 341cf735da52260ed6e4908981d32b93d46e8c29
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
<<<<<<< HEAD
);
=======
);
>>>>>>> 341cf735da52260ed6e4908981d32b93d46e8c29
