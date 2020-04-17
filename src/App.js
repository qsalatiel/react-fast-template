import React from 'react'
import { Button } from 'antd'
import { Formik } from 'formik'
import './App.css'
import { Form, Input, InputNumber, Checkbox } from 'formik-antd'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function About() {
  return <h2>About</h2>
}

const FormPage = () => (
  <>
    <Button>asdasdas</Button>
    <Formik
      initialValues={{ firstName: '', age: 20, newsletter: false }}
      render={() => (
        <Form>
          <Input name="firstName" placeholder="First Name" />
          <InputNumber name="age" min={0} />
          <Checkbox name="newsletter">Newsletter</Checkbox>
        </Form>
      )}
    />
  </>
)

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">form</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/form">
          <FormPage />
        </Route>
        <Route path="/" exact>
          <About />
        </Route>
      </Switch>
    </div>
  </Router>
)

export default App
