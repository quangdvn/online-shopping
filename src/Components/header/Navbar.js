import React, {Component} from 'react'
import logo from './img/logo.png'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutAction} from '../../redux/actions/authActions'

class Navbar extends Component {
    _handleLogout = () => {
        this.props.logoutAction(this.props.history)
    }
    render() {
        const {auth} = this.props
        const {user, loading, isAuthenticated} = auth
        const {username} = user
        return (
            <div className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container box_1620">
                            <Link to="/" className="navbar-brand logo_h">
                                <img src={logo} alt="" />
                            </Link>
                            {/* <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button> */}

                            <div
                                className="collapse navbar-collapse offset"
                            >
                                <ul className="nav navbar-nav menu_nav justify-content-end">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">
                                            Products
                                        </Link>
                                    </li>
                                    {!loading &&
                                        (isAuthenticated ? (
                                            <>
                                                <li className="nav-item">
                                                    <Link
                                                        to="/cart"
                                                        className="nav-link">
                                                        Cart
                                                    </Link>
                                                </li>
                                                <li className="nav-item submenu dropdown">
                                                    <span
                                                        className="nav-link dropdown-toggle"
                                                        data-toggle="dropdown"
                                                        role="button"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">
                                                        {username}
                                                    </span>
                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <span
                                                                onClick={this._handleLogout}
                                                                className="nav-link">
                                                                Logout
                                                            </span>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link
                                                                to="/"
                                                                className="nav-link">
                                                                Profile
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </>
                                        ) : (
                                            <li className="nav-item">
                                                <Link
                                                    to="/login"
                                                    className="nav-link">
                                                    Login
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps,
    {logoutAction}
)(Navbar)
