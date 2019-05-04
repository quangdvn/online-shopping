import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/store'
import {Router} from 'react-router-dom'
import history from './utils/history'
import {ProductProvider} from './ProductContext'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Router history={history}>
            <Provider store={store}>
                <ProductProvider>
                    <App />
                </ProductProvider>
            </Provider>
        </Router>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})
