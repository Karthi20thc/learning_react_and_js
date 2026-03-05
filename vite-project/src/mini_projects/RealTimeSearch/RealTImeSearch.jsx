import React from 'react'
import { countries } from './data'
import { useState } from 'react'

const RealTImeSearch = () => {
    const [data, setData] = useState(countries)

    const handleInputChange = (e) => {
        console.log(e.target.value)
        const userValue = e.target.value

        if (!userValue) return setData(countries)

        const searchFilter = data.filter((e) => {
            if (e.includes(userValue)) {
                return e
            }

        })

        setData(searchFilter)
    }
    return (
        <div>
            <input type="text" onChange={handleInputChange} />
            {data.map((e) => {
                return <div>{e}</div>
            })}
        </div>
    )
}

export default RealTImeSearch