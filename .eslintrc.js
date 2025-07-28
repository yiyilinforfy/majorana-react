module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "react-hooks"],
  rules: {
    // 在这里可以自定义规则
    "react/prop-types": "off", // 如果你不使用 prop-types，可以关闭
    "react/react-in-jsx-scope": "off", // React 17+ 不需要 import React
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
