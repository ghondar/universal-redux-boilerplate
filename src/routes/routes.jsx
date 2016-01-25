import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import AppContainer from '../containers/AppContainer.jsx'
import CounterContainer from '../containers/counterContainer.jsx'
import Home from '../containers/home.jsx'
import ErrorHandler from '../containers/error.jsx'

export default (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={CounterContainer} />
    <Route path='/home' component={Home}/>
    <Route path='/error' component={ErrorHandler}/>
    <Redirect from='*' to='/error' />
  </Route>
)
