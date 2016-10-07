import React from 'react'
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const Layout = require('./Layout')
const MttNavigation = require('./MttNavigation')
const Discover = require('./Discover')
const Parks = require('./Parks')
import Profile from './Profile'
const Journal = require('./Journal')
const Details = require('./Details')
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <Route path='/discover' component={Discover} />
          <Route path='/parks' component={Parks}>
            <Route path='/details/:id' component={Details} />
          </Route>
          <Route path='/journal' component={Journal} />
          <Route path='/profile' component={Profile} />
        </Route>
      </Router>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('appContainer'))
