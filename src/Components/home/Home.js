import React, {Component} from 'react'
import Banner from '../header/Banner'
import ProductList from '../ProductList'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <ProductList />
            </div>
        )
    }
}
