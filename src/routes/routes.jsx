import React from 'react'
import { Router, Route, IndexRoute, Redirect } from 'react-router'
import AppContainer from '../containers/AppContainer.jsx'
import Root from '../containers/Root.jsx'
import ErrorHandler from '../containers/error.jsx'
import Home from '../containers/home.jsx'
import CounterContainer from '../containers/counterContainer.jsx'

export default (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={CounterContainer} />
    <Route path='/home' component={Home}/>
    <Route path='/error' component={ErrorHandler}/>
    <Redirect from='*' to='/error' />
  </Route>
)
