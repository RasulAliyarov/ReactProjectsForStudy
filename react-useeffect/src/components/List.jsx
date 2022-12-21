import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function List() {

    let [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then((value) => {
            setData(value.data)
        })
    }, [setData])

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: "id",
        },
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
                multiple: 1,
            },
            key: "name",
        },
        {
            title: 'UnitsInStock',
            dataIndex: 'unitsInStock',
            sorter: {
                compare: (a, b) => a.unitsInStock - b.unitsInStock,
                multiple: 2,
            },
            key: "unitsInStock",
        },
        {
            title: 'UnitPrice',
            dataIndex: 'unitPrice',
            sorter: {
                compare: (a, b) => a.unitPrice - b.unitPrice,
                multiple: 1,
            },
            key: "unitPrice",
        },
    ];
    // const data = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         chinese: 98,
    //         math: 60,
    //         english: 70,
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         chinese: 98,
    //         math: 66,
    //         english: 89,
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         chinese: 98,
    //         math: 90,
    //         english: 70,
    //     },
    //     {
    //         key: '4',
    //         name: 'Jim Red',
    //         chinese: 88,
    //         math: 99,
    //         english: 89,
    //     },
    // ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <Table columns={columns} dataSource={data} onChange={onChange} />
    )
}


export default List