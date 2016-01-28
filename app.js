import express from 'express'
import { join } from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import session from 'express-session'

import settings from './server/settings'
import mainRoute from './server/routes/main'
import config from './webpack.config'

import routes from './src/routes/routes.jsx'

import { SESSION_PASS } from './config/config'

const app = express()

const buildDir = '/build'
const staticDir = join(settings.APP_HOME, buildDir)

// uncomment after placing your favicon in /public
app.use(favicon(join(__dirname, '/public/favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  secret           : SESSION_PASS,
  resave           : false,
  saveUninitialized: false
}))
app.use(express.static(join(__dirname, 'public')))

app.use('/static', express.static(staticDir))
app.use('/', mainRoute)

export default app
