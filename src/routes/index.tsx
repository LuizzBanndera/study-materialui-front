import React from 'react'
import { Login, Home } from '../views'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

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
          path="/home"
          component={Home}
        />

      </Switch>
    </Router>
  )
}