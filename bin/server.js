require('babel-register')
var path = require('path')

var rootDir = path.resolve(__dirname, '..')

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicTools = require('webpack-isomorphic-tools')
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack-isomorphic-tools'))
  .development(process.env.NODE_ENV === 'development')
  .server(rootDir, function() {
    require('./www')
  })
