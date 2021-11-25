module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-high-performance-animation',
    'stylelint-no-unsupported-browser-features',
  ],
  customSyntax: 'postcss-scss',
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-low-performance-animation-properties': true,
    'no-descending-specificity': [
      true,
      {
        severity: 'warning',
      },
    ],
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'value-no-vendor-prefix': [
      true,
      {
        /**
         * -webkit-box: 常用于多行文本省略
         */
        ignore: ['-webkit-box'],
      },
    ],
    // kebab-case(组件库常用 or snake_case(方便使用css modules)
    'selector-class-pattern': '^([a-z][a-z0-9]*)((_|__|-|--)[a-z0-9]+)*$',
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
