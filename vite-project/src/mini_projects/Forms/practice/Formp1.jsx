// 25 JULY 2026
import React, { useState } from 'react'

const initial = {
  name: "",
  company: ""
}

const Formp1 = () => {

  const [list, setList] = useState({ ...initial })

  const handleChange = (e) => {
    // console.log(e)
    // console.log(e.target.value)
    // console.log(e.target.id)

    const { id, value } = e.target;

    setList((prev) => {
      return {
        ...prev,
        [id]: value
      }
    })
  }


  const handleSubmit = () => {
    console.log(list)
  }
  return (
    <section>
      {/* 1 */}

      <div>
        <label htmlFor="name">Name</label>
        <input id='name' type='text' onChange={handleChange} value={list.name} />
      </div>

      {/* 1 */}

      <div>
        <label htmlFor="name">company</label>
        <input id='company' type='text' onChange={handleChange} value={list.company} />
      </div>

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => {
        setList({ ...initial })
      }}>Clear</button>

    </section>
  )
}

export default Formp1