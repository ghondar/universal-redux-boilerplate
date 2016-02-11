import React from 'react'
import { match } from 'react-router'

import renderLayout from '../../render-layout'
import render from '../../render'
import preSettings from '../../settings'

import configureStore from '../../../src/store/configureStore'
import createRoutes from '../../../src/routes/routes.jsx'

const store = configureStore()
const routes = createRoutes(React)

export default (req, res) => {
  if(process.env.NODE_ENV === 'development') {
    webpackIsomorphicTools.refresh()
  }

  const settings = Object.assign({}, preSettings, { assets: webpackIsomorphicTools.assets() })
  const initialState = {}

  match({ routes,
    location: req.url
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const rootMarkup = render(React)(renderProps, store, initialState)
      res.status(200).send(renderLayout({
        settings,
        rootMarkup,
        initialState
      }))
    } else {
      res.status(404).send('Not found')
    }
  })
}
