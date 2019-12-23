module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    test: {
      presets: [['env', { targets: { node: 'current' } }]]
    }
  }
}
