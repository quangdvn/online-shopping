import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import queryString from 'query-string'
// import PropTypes from 'prop-types'
const getQueryToken = props => {
    const query = queryString.parse(props.location.search)
    if (query.token) {
        window.localStorage.setItem('token', query.token)
        return true
    }
    return false
}

const GoogleCallback = ({component: Component, auth, ...rest}) => (
    <Route
        {...rest}
        render={props => getQueryToken(props) && <Redirect to="/login" />}
    />
)
export default GoogleCallback
