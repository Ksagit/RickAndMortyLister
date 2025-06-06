module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
