module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
    'stylelint-no-unsupported-browser-features',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-declaration-block-no-ignored-properties',
  ],
}
