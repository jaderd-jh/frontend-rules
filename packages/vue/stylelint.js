const config = require('../../stylelint.base')
module.exports = {
  ...config,
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
