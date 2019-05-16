import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ProductNameColumn extends Component {
    render() {
        const {item} = this.props
        const {product_name} = item
        return (
            <td className="ProductNameColumn">
                <span>{product_name} </span>
            </td>
        )
    }
}

ProductNameColumn.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductNameColumn
