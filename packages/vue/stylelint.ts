module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
    'stylelint-no-unsupported-browser-features',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'function-calc-no-invalid': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep'],
      },
    ],
  },
}
