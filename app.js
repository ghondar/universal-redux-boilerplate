import express from 'express'
import { join } from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'
import ReactEngine from 'react-engine'

import routes from './src/routes/routes.jsx'

import { SESSION_PASS } from './config/config'

const app = express()

app.engine('.jsx', ReactEngine.server.create({
  routes: routes,
  routesFilePath: join(__dirname, 'src', 'routes', 'routes.jsx'),
  performanceCollector: stats => {
    console.log(stats);
  }
}))

// view engine setup
app.set('views', join(__dirname, 'src', 'containers'))
app.set('view engine', 'jsx')
app.set('view', ReactEngine.expressView)

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
app.use(express.static(join(__dirname, 'public')))
app.use(express.static(join(__dirname, 'bundle')))

app.get('*', (req, res, next) => {
  res.render(req.url, { titulo: 'Contador' })
})

app.use(function(err, req, res, next) {
  console.error(err);

  // http://expressjs.com/en/guide/error-handling.html
  if (res.headersSent) {
    return next(err);
  }

  if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
    return res.redirect(302, err.redirectLocation);
  } else if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
    return res.status(404).send('Route Not Found!');
  } else {
    // for ReactEngine.reactRouterServerErrors.MATCH_INTERNAL_ERROR or
    // any other error we just send the error message back
    return res.status(500).send(err.message);
  }
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
