module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current',
      },
      useBuiltIns: 'entry',
    }],
    "@babel/react"
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ]
};
