module.exports = {
  parser: 'babel-eslint', // Use babel-eslint parser for JavaScript files
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Your ESLint rules go here
  },
};
