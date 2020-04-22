import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuth === true ? <Component {...props} /> : <Redirect to="/sign-in" />)}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  isAuth: PropTypes.bool.isRequired,
}

PrivateRoute.defaultProps = {}

export default PrivateRoute
