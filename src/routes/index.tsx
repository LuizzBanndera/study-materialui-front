import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Login from '../views/wellcome'
import Register from '../views/register'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to="/login" />

        <Route
          path="/login"
          component={Login}
        />
        <Route
          path="/register"
          component={Register}
        />

      </Switch>
    </Router>
  )
}