module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    /**
     * https://eslint.vuejs.org/user-guide/#faq
     * https://github.com/vuejs/eslint-plugin-vue/commit/44ff0e02cd0fd08b8cd7dee0127dbb5590446323#diff-538534b7c3f8223e82fa7d350af47f9d66c9ec7355dc567a22b54e5829e09703
     */
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint-config-airbnb-base',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:compat/recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        /**
         * Use prettier to process `<template>` blocks or not
         *
         * If set to `false`, you may need to enable those vue rules that are disabled by `eslint-config-prettier`,
         * because you need them to lint `<template>` blocks
         *
         * @default true
         */
        template: true,

        /**
         * Use prettier to process `<script>` blocks or not
         *
         * If set to `false`, you may need to enable those rules that are disabled by `eslint-config-prettier`,
         * because you need them to lint `<script>` blocks
         *
         * @default true
         */
        script: true,

        /**
         * Use prettier to process `<style>` blocks or not
         *
         * @default true
         */
        style: true,

        // Settings for how to process custom blocks
        customBlocks: {
          // Treat the `<docs>` block as a `.markdown` file
          docs: { lang: 'markdown' },

          // Treat the `<config>` block as a `.json` file
          config: { lang: 'json' },

          // Treat the `<module>` block as a `.js` file
          module: { lang: 'js' },

          // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
          comments: false,

          // Other custom blocks that are not listed here will be ignored
        },
      },

      // Use prettierrc for prettier options or not (default: `true`)
      usePrettierrc: true,

      // Set the options for `prettier.getFileInfo`.
      // @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
      fileInfoOptions: {
        // Path to ignore file (default: `'.prettierignore'`)
        // Notice that the ignore file is only used for this plugin
        ignorePath: '.prettierignore',

        // Process the files in `node_modules` or not (default: `false`)
        withNodeModules: false,
      },
    },
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'import',
    'unicorn',
    'vue',
    'ecmascript-compat',
    '@typescript-eslint',
    'prettier',
  ],
  // https://eslint.vuejs.org/rules/
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-duplicates': 2,
    'import/first': 0,
    'import/order': 2,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    // 闭合标签配置
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/no-html': 0,
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/attributes-order': ['error', { alphabetical: true }],
    'vue/order-in-components': ['error'],
    'vue/next-tick-style': ['error', 'promise'],
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: true,
        disallowVue3BuiltInComponents: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      { usePrettierrc: true },
    ],
    // https://github.com/vuejs/vue-cli/issues/3954
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'no-bitwise': ['error', { allow: ['~', '>>', '<<', '&', '|'] }],
    'ecmascript-compat/compat': 'warn',
  },
  // https://github.com/typescript-eslint/typescript-eslint/issues/2528#issuecomment-689369395
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
}
