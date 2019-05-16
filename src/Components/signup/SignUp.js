import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loginAction, signUpAction} from '../../redux/actions/authActions'

class SignUp extends Component {
    state = {
        username: '',
        password: '',
        email: ''
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
        const {username, password, email} = this.state
        this.props.signUpAction({username, password, email}, this.props.history)
    }

    render() {
        const {email, password, username} = this.state
        const {errors}  = this.props
        return (
            <div className="SignUp">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                  {errors && <p className="text-danger"> {errors.message} </p>}
                                    <h5 className="card-title text-center">
                                        Sign Up
                                    </h5>
                                    <form
                                        className="form-signin form-group"
                                        onSubmit={e => e.preventDefault()}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="username"
                                                value={username}
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
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={
                                                    this._handleInputChange
                                                }
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <button
                                            onClick={this._handleClick}
                                            className="btn btn-lg btn-primary btn-block text-uppercase">
                                            Sign Up
                                        </button>

                                        <hr className="my-4" />
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
    {loginAction, signUpAction}
)(SignUp)
