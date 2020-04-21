import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { SignUpPage, SignInPage, HomePage, NotFoundPage, SettingsPage } from 'pages'

import './styles/index.css'
import * as serviceWorker from './serviceWorker'

const App = () => (
  <Router>
    <Switch>
      <Route path="/sign-up">
        <SignUpPage />
      </Route>
      <Route path="/sign-in">
        <SignInPage />
      </Route>
      <Route path="/settings">
        <SettingsPage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
