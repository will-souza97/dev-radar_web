module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
  rules: {
    camelcase: 'off',

    'global-require': 'off',

    'prettier/prettier': 'error',

    'import/prefer-default-export': 'off',

    'no-console': ['error', { allow: ['tron'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
