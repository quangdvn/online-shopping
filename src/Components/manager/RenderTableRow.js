import React, {Component} from 'react'
import PropTypes from 'prop-types'
import IdColumn from './columns/IdColumn'
import ProductNameColumn from './columns/ProductNameColumn'
import BuyerNameColumn from './columns/BuyerNameColumn'
import StatusColumn from './columns/StatusColumn'
import PriceColumn from './columns/PriceColumn'
import AddressColumn from './columns/AddressColumn'

class RenderTableRow extends Component {
    render() {
        const {item} = this.props

        return (
            <tr className="RenderTableRow">
                <IdColumn item={item} />
                <ProductNameColumn item={item} />
                <AddressColumn item={item} />
                <BuyerNameColumn item={item} />
                <StatusColumn item={item} />
                <PriceColumn item={item} />
            </tr>
        )
    }
}

RenderTableRow.propTypes = {
    item: PropTypes.object.isRequired
}

export default RenderTableRow
