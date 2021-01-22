module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    "react/jsx-filename-extension": "off",
  }
  env: {
    browser: true,
  },
};
