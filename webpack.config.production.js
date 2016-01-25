var path = require('path');

module.exports = {
  entry: ['./src/app.jsx'],
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'client.js',
    publicPath: '/'
  },
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
  }
}
