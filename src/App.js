import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Cart from './Components/MyCartComponents/Cart'
import Default from './Components/Default'
import Details from './Components/Details'
import ModalPopUp from './Components/ModalPopUp'
import LoginForm from './Components/LoginForm/LoginForm'
import GoogleCallback from './Components/LoginForm/GoogleCallback'
import {getUser} from './redux/actions/authActions'
import store from './redux/store'

class App extends Component {
    componentDidMount() {
        store.dispatch(getUser())
    }
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/login" component={LoginForm} />
                    <GoogleCallback
                        path="/auth/google/callback/success"
                        component={GoogleCallback}
                    />
                    <Route path="/details/:slug.:id" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
                <ModalPopUp />
            </>
        )
    }
}

export default App
