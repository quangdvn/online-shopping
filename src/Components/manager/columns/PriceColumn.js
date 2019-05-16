import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PriceColumn extends Component {
    render() {
        const {item} = this.props
        const {price} = item
        return (
            <td className="PriceColumn">
                <span>{price} </span>
            </td>
        )
    }
}

PriceColumn.propTypes = {
    item: PropTypes.object.isRequired
}

export default PriceColumn
