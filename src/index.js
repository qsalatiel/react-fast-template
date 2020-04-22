import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

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
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/list">
          <ListModelPage />
        </Route>
        <Route path="/settings" exact>
          <ProfileSettingsPage />
        </Route>
        <Route path="/settings/company">
          <CompanySettingsPage />
        </Route>
        <Route path="/settings/team">
          <TeamSettingsPage />
        </Route>
        <Route path="/settings/billing">
          <BillingSettingsPage />
        </Route>
        <Route path="/settings/privacy">
          <PrivacySettingsPage />
        </Route>
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
