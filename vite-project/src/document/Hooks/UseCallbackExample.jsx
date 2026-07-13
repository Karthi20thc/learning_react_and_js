import React from 'react'

const ChildComponent = () => {
    return <div>child component</div>
}

const UseCallbackExample = () => {

    return (
        <div>UseCallbackExample

            <ChildComponent />

        </div>
    )
}

export default UseCallbackExample