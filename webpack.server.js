import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.config'

new WebpackDevServer(webpack(config), {
    publicPath        : config.output.publicPath,
    hot               : true,
    devServer         : true,
    stats             : {
      colors: true
    },
    historyApiFallback: true
  })
  .listen(8888, 'localhost', err => {
    if (err) {
      console.log(err)
    }

    console.log('Listening at localhost:' + 8888)
  })
