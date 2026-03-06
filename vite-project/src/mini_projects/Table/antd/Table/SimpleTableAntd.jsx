import React from 'react'
import { Table } from 'antd';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import styles from './styles.module.css'

const SimpleTableAntd = () => {

    const [apiResult, setApiResult] = useState([])

    // your object key must match with key in columns variable below
    // const dataSource = [
    //     {
    //         key: '1',
    //         name: 'Mike',
    //         age: 32,
    //         address: '10 Downing Street',
    //     },
    //     {
    //         key: '2',
    //         name: 'John',
    //         age: 42,
    //         address: '10 Downing Street',
    //     },
    // ];



    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text,
                // record,
                // index
            ) => {
                return (<div>{text}</div>)
            }

        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text,
                // record,
                // index
            ) => {
                return (<div>{text}</div>)
            }
        },
        {
            title: 'Status',
            dataIndex: 'completed',
            key: 'completed',
            //  className={text ? styles.green : styles.red}
            render: (text,
                // record,
                // index
            ) => {
                return (<div className={`${text === true ? styles.green : styles.red}`} >{String(text)}</div>)
            }

        },
    ];

    useEffect(() => {

        const getJson = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            if (response.data) {
                setApiResult(response.data)
            }

        }

        try {
            getJson()
        }
        catch (err) {
            console.log(err)
        }


    }, [])


    return (
        <Table dataSource={apiResult} columns={columns} />
    )
}

export default SimpleTableAntd



