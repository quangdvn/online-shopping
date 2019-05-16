import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class StatusColumn extends Component {
    render() {
        const {item} = this.props
        const {status} = item
        return (
            <td className={classNames('StatusColumn', status)}>
                <span className="badge badge-secondary">{status || ''}</span>
            </td>
        )
    }
}

StatusColumn.propTypes = {
    item: PropTypes.object.isRequired
}

export default StatusColumn
