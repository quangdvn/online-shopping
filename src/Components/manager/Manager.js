import React, {Component} from 'react'
import TableContainer from './TableContainer'
const products = [
    {
        id: 1,
        product_name: 'Air Jordan 1 Retro High OG',
        price: '94',
        address: 'ハノイ 国家大学',
        buyer_name: 'Do Manh Hung',
        status: 'processing'
    },
    {
        id: 2,
        product_name: 'Nike x CLOT Air Max Haven',
        price: '54',
        address: 'ハノイ 国家大学',
        buyer_name: 'Dang Vu Nhat Quang',
        status: 'done'
    },
    {
        id: 3,
        product_name: 'Nike Air Max 95 Woven',
        price: '34',
        address: 'ハノイ 国家大学',
        buyer_name: 'Nguyen Anh Khoa',
        status: 'processing'
    },
    {
        id: 4,
        product_name: 'Nike Air Max 95',
        price: '12',
        address: 'ハノイ 国家大学',
        buyer_name: 'Vu Van Duc',
        status: 'done'
    },
    {
        id: 5,
        product_name: 'Nike React Presto Rabid Panda',
        price: '39',
        address: 'ハノイ 国家大学',
        buyer_name: 'Nguyen Thi Lan',
        status: 'processing'
    }
]
class Manager extends Component {
    render() {
        return (
            <div className="Manager">
                <TableContainer products={products} />
            </div>
        )
    }
}

export default Manager
