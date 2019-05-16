import React, {Component} from 'react'
import PropTypes from 'prop-types'

class IdColumn extends Component {
    render() {
        const {item} = this.props
        const {id} = item
        return <td className="IdColumn">
          <span>{id} </span>
           </td>
    }
}

IdColumn.propTypes = {
  item: PropTypes.object.isRequired
}

export default IdColumn
