const fabric = require('@jhqn/react')
module.exports = {
  ...fabric.prettier,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
}
