import React, {Component} from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

class TableContainer extends Component {
    render() {
        return (
            <div className="TableContainer table-responsive ">
                <table className="table table-striped table-light">
                    <TableHeader />
                    <TableBody {...this.props} />
                </table>
            </div>
        )
    }
}

export default TableContainer
