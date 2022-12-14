process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

const webpack = require('webpack')
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Tether: 'tether',
  Popper: ['popper.js', 'default']
}))

module.exports = environment.toWebpackConfig()
