module.exports = {
  parser: '@typescript-eslint/parser', // 👈 tells ESLint to understand TypeScript
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: [
    "react", 
    "react-hooks",
    '@typescript-eslint',
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    'react-app',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    'no-unused-vars': 'off',
    // You can do more rule customizations here...
  },
};