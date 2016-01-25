import express from 'express'
import { join } from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config'

import routes from './src/routes/routes.jsx'

import { SESSION_PASS } from './config/config'

const app = express()

// app.engine('.jsx', ReactEngine.server.create({
//   routes: routes,
//   routesFilePath: join(__dirname, 'src', 'routes', 'routes.jsx'),
//   performanceCollector: stats => {
//     console.log(stats);
//   }
// }))

// view engine setup
// app.set('views', join(__dirname, 'src', 'containers'))
// app.set('view engine', 'jsx')
// app.set('view', ReactEngine.expressView)

// uncomment after placing your favicon in /public
app.use(favicon(join(__dirname, '/public/favicon.ico')))
// app.use(logger('dev'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(session({
//   secret: SESSION_PASS,
//   resave: false,
//   saveUninitialized: false
// }))
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(join(__dirname, 'public')))
app.use(express.static(join(__dirname, 'bundle')))

app.use((req, res, next) => {
  res.sendFile(__dirname + '/index.html')
})

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found')
//   err.status = 404
//   next(err)
// })

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500)
//     res.render('error', {
//       message: err.message,
//       error: err
//     })
//   })
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500)
//   res.render('error', {
//     message: err.message,
//     error: {}
//   })
// })

export default app
