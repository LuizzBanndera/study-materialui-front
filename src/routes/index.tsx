import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Login from '../views/wellcome'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}