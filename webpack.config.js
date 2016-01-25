import webpack from 'webpack'
import { join } from 'path'
import autoprefixer from 'autoprefixer'

const port = process.env.HOT_LOAD_PORT || 8888;

const devFlagPlugin = new webpack.DefinePlugin({
  DEV: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})

const config = {
  cache: true,
  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/dev-server',
    './src/app.jsx'
  ],
  output: {
    path: join(__dirname, '/build/'),
    filename: 'client.js',
    publicPath: 'http://localhost:' + port + '/build/'
  },
  resolveLoader: {
    fallback: join(__dirname, 'node_modules')
  },
  plugins: [
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
      include: join(__dirname, 'node_modules', 'redux-devtools', 'src')
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
      'redux-devtools/lib': join(__dirname, 'node_modules', 'redux-devtools', 'src'),
      'redux-devtools': join(__dirname, 'node_modules', 'redux-devtools', 'src'),
      react: join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js', '.jsx', '.json']
  }
}

export default config
