import React from 'react'
import {connect} from 'react-redux'
import {loginAction} from '../../redux/actions/authActions'
import LoginWithGoogleButton from './LoginWithGoogleButton'

class LoginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }
    componentDidUpdate(prevProps) {
        const isAuthenticated = this.props.auth.isAuthenticated
        if (
            prevProps.auth.isAuthenticated !== isAuthenticated &&
            isAuthenticated
        ) {
            this.props.history.push('/')
        }
    }

    _handleInputChange = e => {
        return this.setState({
            [e.target.name]: e.target.value
        })
    }

    _handleClick = async e => {
        e.preventDefault()
        const {username, password} = this.state
        this.props.loginAction({username, password}, this.props.history)
    }

    render() {
        const {email, password} = this.state
        return (
            <div className="LoginForm">
                <LoginWithGoogleButton />
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            value={email}
                            onChange={this._handleInputChange}
                            className="form-control"
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this._handleInputChange}
                            className="form-control"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={this._handleClick}>
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth
})

export default connect(
    mapStateToProps,
    {loginAction}
)(LoginForm)
