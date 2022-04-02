module.exports = {
  extends: [require.resolve('@jhqn/vue/dist/stylelint')],
  rules: {
    'scss/at-import-partial-extension': 'always',
    'scss/at-import-partial-extension-whitelist': ['scss'],
  },
}
