import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.config'

const port = process.env.HOT_LOAD_PORT || 8888

new WebpackDevServer(webpack(config), {
    contentBase: 'http://localhost:' + port,
    publicPath: config.output.publicPath,
    hot: true,
    devServer: true,
    stats: {
      colors: true
    },
    historyApiFallback: true
  })
  .listen(port, 'localhost', err => {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:' + port);
  });
