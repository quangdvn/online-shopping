import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './scss/app.scss'
import App from './App'
import {ProductProvider} from './ProductContext'
import * as serviceWorker from './serviceWorker'
import {Router} from 'react-router-dom'
import history from './utils/history'

import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <ProductProvider>
                <App />
            </ProductProvider>
        </Provider>
    </Router>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
