import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Login from '../views/wellcome'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to="/login" />
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}