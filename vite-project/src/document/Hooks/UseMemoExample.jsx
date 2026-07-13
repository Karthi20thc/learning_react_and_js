import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

const UseMemoExample = () => {

    const [count, setCount] = useState(10);

    // without usememo - 
    const expensiveCal = count * count;

    const memoizedCal = useMemo(() => {
        return count * count;
    }, [count])


    const handlecount = () => {
        setCount((prev) => {
            return prev + 1;
        })
    }
    console.log("component rendered!!!")
    return (
        <div>UseMemoExample
            {/* <p>{expensiveCal}</p> */}
            <p>{memoizedCal}</p>
            <button type="button" onClick={handlecount}>Add</button>
        </div>
    )
}

export default UseMemoExample