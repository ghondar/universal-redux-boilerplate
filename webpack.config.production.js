var path = require('path')
var webpack = require('webpack')
var CleanPlugin = require('clean-webpack-plugin')
var relativeAssetsPath = './build'

var assetsPath = path.join(__dirname, relativeAssetsPath)

module.exports = {
  entry   : [ './src/app.jsx' ],
  output  : {
    path      : assetsPath,
    filename  : 'client.js',
    publicPath: '/static/'
  },
  module  : {
    loaders: [ {
      test   :  /\.jsx$/,
      loaders: [ 'react-hot', 'babel' ],
      exclude: /node_modules/
    }, {
      test   : /\.js$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test  : /\.json$/,
      loader: 'json-loader'
    }, {
      test  : /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    },
    {
      test  : /\.woff($|\?)/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
      test  : /\.ttf($|\?)/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    },
    {
      test  : /\.eot($|\?)/,
      loader: 'file-loader'
    },
    {
      test  : /\.png$/,
      loader: 'file-loader?limit=10000&minetype=image/png'
    },
    {
      test  : /\.jpg$/,
      loader: 'file-loader?limit=10000&minetype=image/jpg'
    },
    {
      test  : /\.gif$/,
      loader: 'file-loader'
    },
    {
      test  : /\.svg($|\?)/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    } ]
  },
  progress: true,
  resolve : {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions        : [ '', '.json', '.js', 'jsx' ]
  },
  plugins : [
    new CleanPlugin([ relativeAssetsPath ]),
    new webpack.DefinePlugin({
      __CLIENT__     : true,
      __SERVER__     : false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__   : false,
      __DEV__        : false
    }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // set global vars
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
        }
    })
  ]
}
