import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (timer < 10) {
            setTimeout(() => {
                setTimer(timer + 1);
                // console.log(timer);
            }, [1000]);
        }
    }, [timer]);
    return (
        <div>Time - {timer}</div>
    )
}

export default Timer