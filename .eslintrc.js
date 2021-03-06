module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
      project: './tsconfig.json',
    },
    rules: {
      'import/prefer-default-export': 'off',
      'react/prop-types': 'off',
    },
  };
  