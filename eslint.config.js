import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    { ignores: ["dist"] },
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        settings: { react: { version: "18.3" } },
        plugins: {
            react,
            prettier, // Runs Prettier as an ESLint rule
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        parserOptions: {
            ecmaFeatures: {
                jsx: true, // Enables JSX parsing
            },
            ecmaVersion: 12, // Uses the latest version of ECMAScript
            sourceType: "module", // Uses ES modules
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,
            "react/jsx-no-target-blank": "off",
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "prettier/prettier": [
                "error",
                {
                    singleQuote: false, // Enforces single quotes
                    semi: true, // Enforces semicolons
                    trailingComma: "es5", // Allows trailing commas for ES5+ (objects, arrays)
                    tabWidth: 4, // Sets tab width to 2 spaces
                },
            ],
            "no-console": "warn", // Warns about console usage
            "no-unused-vars": "warn", // Warns about unused variables
        },
    },
];
