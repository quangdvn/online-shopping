import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BuyerNameColumn extends Component {
    render() {
        const {item} = this.props
        const {buyer_name} = item
        return (
            <td className="BuyerNameColumn">
                <span>{buyer_name} </span>
            </td>
        )
    }
}

BuyerNameColumn.propTypes = {
    item: PropTypes.object.isRequired
}

export default BuyerNameColumn
