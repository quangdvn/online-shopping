import React, {Component} from 'react'
import PropTypes from 'prop-types'
import RenderTableRow from './RenderTableRow'

class TableBody extends Component {
    render() {
        const {products, loading} = this.props
        return (
            <tbody className="TableBody">
                {!loading &&
                    products.map((item, index) => {
                        return (
                            <RenderTableRow
                                item={item}
                                key={item._id}
                                index={index}
                            />
                        )
                    })}
            </tbody>
        )
    }
}

TableBody.propTypes = {
    products: PropTypes.array.isRequired
}

export default TableBody
