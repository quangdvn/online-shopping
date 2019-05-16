import React, {Component} from 'react'

const _tableColumns = ['Id', 'Product Name', 'Address', 'Buyer Name', 'Status', 'Price']

class TableHeader extends Component {
    render() {
        return (
            <thead className="TableHeader">
                <tr>
                    {_tableColumns.map(column => {
                        return (
                            <th scope="col" key={column}>
                                {column}
                            </th>
                        )
                    })}
                </tr>
            </thead>
        )
    }
}

export default TableHeader
