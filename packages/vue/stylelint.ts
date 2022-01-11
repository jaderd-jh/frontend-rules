module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-html/html',
    'stylelint-config-html/vue',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-high-performance-animation',
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-low-performance-animation-properties': [
      true,
      { ignoreProperties: ['color', 'background-color', 'background-image', 'background', 'box-shadow'] },
    ],
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
      },
    ],
    'no-descending-specificity': [
      true,
      {
        severity: 'warning',
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep'],
      },
    ],
    'value-no-vendor-prefix': false,
    'property-no-vendor-prefix': false,
    // .foo .foo--bar .foo__bar
    'selector-class-pattern': '^([a-z][a-z0-9]*)((_|__|-|--)[a-z0-9]+)*$',
    'scss/at-import-partial-extension': 'always',
    'scss/at-import-partial-extension-whitelist': ['scss'],
  },
}
