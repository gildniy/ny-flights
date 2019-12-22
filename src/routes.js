import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/app/App.jsx'

export const Routes = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
    </Switch>
  </Router>
