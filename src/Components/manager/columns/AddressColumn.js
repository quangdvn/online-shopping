import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddressColumn extends Component {
    render() {
        const {item} = this.props
        const {address} = item
        return (
            <td className="AddressColumn">
                <span>{address} </span>
            </td>
        )
    }
}

AddressColumn.propTypes = {
    item: PropTypes.object.isRequired
}

export default AddressColumn
