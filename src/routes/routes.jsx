import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Layout from '../components/Layout.jsx'
import Root from '../containers/Root.jsx'
import ErrorHandler from '../containers/error.jsx'
import Home from '../containers/home.jsx'
import CounterContainer from '../containers/counterContainer.jsx'

var routes = module.exports = (
  <Router>
    <Route path='/' component={Layout}>
      <IndexRoute component={CounterContainer} />
      <Route path='/home' component={Home}/>
      <Route path='/error' component={ErrorHandler}/>
    </Route>
  </Router>
)
