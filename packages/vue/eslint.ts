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
    '@vue/prettier',
  ],
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
    // 允许短路表达式
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 1,
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
      'PascalCase',
      {
        registeredComponentsOnly: false,
        /**
         * 允许使用 kebab-case 命名方式 的组件库 vant | element-plus
         */
        ignores: ["/^van-/", "/^el-/"],
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
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
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
