import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import {connect} from 'react-redux'
import {logoutAction} from '../redux/actions/authActions'
import {BlueButton} from './StyledComponents/Button'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    state = {
        isOpen: false
    }

    _handleLogout = () => {
        this.props.logoutAction(this.props.history)
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        const {user, loading, isAuthenticated} = this.props.auth
        const {username} = user
        return (
            <div className="Navbar">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Sitib</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {!loading &&
                                (isAuthenticated ? (
                                    <>
                                        <NavItem className="username">
                                            Hello {username} !
                                        </NavItem>
                                        <NavItem>
                                            <BlueButton onClick={this._handleLogout}>Logout</BlueButton>
                                        </NavItem>
                                        <NavItem>
                                            <Link
                                                to="/cart">
                                                <BlueButton>
                                                    <span className="mr-2">
                                                        <i className="fas fa-shopping-cart" />
                                                    </span>
                                                    My Cart
                                                </BlueButton>
                                            </Link>
                                        </NavItem>
                                    </>
                                ) : (
                                    <NavItem>
                                        <NavLink href="/login">Login </NavLink>
                                    </NavItem>
                                ))}
                        </Nav>
                    </Collapse>
                </Navbar>
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
)(NavBar)
