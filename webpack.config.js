var webpack = require('webpack')
var path = require('path')
var autoprefixer = require('autoprefixer')

const devFlagPlugin = new webpack.DefinePlugin({
  DEV: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})

const config = {
  devtool: 'eval',
  cache: true,
  entry: [
    'webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/only-dev-server',
    './src/App.jsx'
  ],
  output: {
    path: __dirname + '/static/',
    publicPath: 'http://localhost:8888/static/',
    filename: 'client.js'
  },
  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules')
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin
  ],
  module: {
    loaders: [{
      test:  /\.jsx$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'node_modules', 'redux-devtools', 'src')
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    },
    {
      test: /\.woff($|\?)/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.ttf($|\?)/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
    },
    {
      test: /\.eot($|\?)/,
      loader: 'file-loader'
    },
    {
      test: /\.png$/,
      loader: 'file-loader?limit=10000&minetype=image/png'
    },
    {
      test: /\.jpg$/,
      loader: 'file-loader?limit=10000&minetype=image/jpg'
    },
    {
      test: /\.gif$/,
      loader: 'file-loader'
    },
    {
      test: /\.svg($|\?)/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }]
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  resolve: {
    alias: {
      'redux-devtools/lib': path.join(__dirname, 'node_modules', 'redux-devtools', 'src'),
      'redux-devtools': path.join(__dirname, 'node_modules', 'redux-devtools', 'src'),
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js', '.jsx', '.json']
  }
}

module.exports = config
