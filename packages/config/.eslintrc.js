/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { node: true, es2021: true },
  ignorePatterns: ['dist', '*.d.ts'],
};
