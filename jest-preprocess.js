const babelOptions = {
  presets: ['@babel/react', '@babel/env'],
  plugins: ['@babel/plugin-proposal-class-properties'],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
