import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

import { PrivateRoute } from 'components/organisms'
import {
  SignUpPage,
  SignInPage,
  HomePage,
  NotFoundPage,
  ListModelPage,
  ProfileSettingsPage,
  CompanySettingsPage,
  TeamSettingsPage,
  BillingSettingsPage,
  PrivacySettingsPage,
  // eslint-disable-next-line import/no-unresolved
} from 'pages'

import ptbr from './locales/pt-BR.json'
import en from './locales/en.json'

import './styles/index.css'
import * as serviceWorker from './serviceWorker'

const locales = {
  pt: ptbr,
  en,
}

const language = navigator.language.split(/[-_]/)[0]

const App = () => (
  <IntlProvider locale="pt-BR" messages={locales[language]}>
    <Router>
      <Switch>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/sign-in">
          <SignInPage />
        </Route>
        <PrivateRoute path="/" exact>
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/list">
          <ListModelPage />
        </PrivateRoute>
        <PrivateRoute path="/settings" exact>
          <ProfileSettingsPage />
        </PrivateRoute>
        <PrivateRoute path="/settings/company">
          <CompanySettingsPage />
        </PrivateRoute>
        <PrivateRoute path="/settings/team">
          <TeamSettingsPage />
        </PrivateRoute>
        <PrivateRoute path="/settings/billing">
          <BillingSettingsPage />
        </PrivateRoute>
        <PrivateRoute path="/settings/privacy">
          <PrivacySettingsPage />
        </PrivateRoute>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  </IntlProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
