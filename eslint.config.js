//  @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { includeIgnoreFile } from '@eslint/compat';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import { fileURLToPath } from 'node:url';
import globals from 'globals';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default tseslint.config(includeIgnoreFile(gitignorePath), {
  extends: [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    jsxA11y.flatConfigs.strict,
  ],
  languageOptions: {
    ecmaVersion: 2023,
    globals: globals.browser,
  },
});