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

// uncomment after placing your favicon in /public
app.use(favicon(join(__dirname, '/public/favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  secret: SESSION_PASS,
  resave: false,
  saveUninitialized: false
}))

const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(join(__dirname, 'public')))
app.use(express.static(join(__dirname, 'bundle')))

app.use((req, res, next) => {
  res.sendFile(__dirname + '/index.html')
})

export default app
