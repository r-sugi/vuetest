module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-private-methods'
  ],
  env: {
    test: {
      presets: [['env', { targets: { node: 'current' } }]]
    }
  }
}
