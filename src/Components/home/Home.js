import React, {Component} from 'react'
import Banner from '../header/Banner'
import ProductList from '../ProductList'
import OurTeam from '../ourteam/OurTeam'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <ProductList />
                <OurTeam/>
            </div>
        )
    }
}
