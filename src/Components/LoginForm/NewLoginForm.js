import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loginAction} from '../../redux/actions/authActions'
import LoginWithGoogleButton from './LoginWithGoogleButton'

class NewLoginForm extends Component {
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

    _getAuthURL = () => {
        return process.env.NODE_ENV === 'development'
            ? 'http://localhost:5000/google'
            : //: '/api/auth/google/'
              'https://authlivs.herokuapp.com/google'
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
            <div className="NewLoginForm">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">
                                        Sign In
                                    </h5>
                                    <form
                                        className="form-signin form-group"
                                        onSubmit={e => e.preventDefault()}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="username"
                                                value={email}
                                                onChange={
                                                    this._handleInputChange
                                                }
                                                className="form-control"
                                                placeholder="Enter username"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                value={password}
                                                onChange={
                                                    this._handleInputChange
                                                }
                                                className="form-control"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase">
                                            Sign in
                                        </button>
                                        <hr className="my-4" />
                                        <a
                                            href={this._getAuthURL()}
                                            className="btn btn-lg btn-google btn-block text-uppercase">
                                          
                                                <i className="fab fa-google mr-2" />
                                                Sign in with Google                        
                                        </a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
)(NewLoginForm)
