import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Cart from './Components/MyCartComponents/Cart'
import Default from './Components/Default'
import Details from './Components/Details'
import ModalPopUp from './Components/ModalPopUp'
import GoogleCallback from './Components/LoginForm/GoogleCallback'
import {getUser} from './redux/actions/authActions'
import store from './redux/store'
import Footer from './Components/footer/Footer'
import Navbar from './Components/header/Navbar'
import Home from './Components/home/Home'
import NewLoginForm from './Components/LoginForm/NewLoginForm'
import PrivateRoute from './private-route/PrivateRoute'
import SignUp from './Components/signup/SignUp'

class App extends Component {
    componentDidMount() {
        store.dispatch(getUser())
    }
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={NewLoginForm} />
                    <Route exact path="/signup" component={SignUp} />

                    <Route
                        exact
                        path="/details/:slug.:id"
                        component={Details}
                    />
                    {/* <Route exact path="/cart" component={Cart} /> */}
                    <PrivateRoute exact path="/cart" component={Cart} />
                    <GoogleCallback
                        path="/auth/google/callback/success"
                        component={GoogleCallback}
                    />
                    <Route component={Default} />
                </Switch>
                <Footer />
                <ModalPopUp />
            </>
        )
    }
}

export default App
