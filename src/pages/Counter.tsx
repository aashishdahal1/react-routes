import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const clickCounter = () => {
        setCount(count+1)
    }
    return (
        <div>
            <div>
             <p> I am clicked <span>{count}</span></p>
            </div>
            <button onClick={clickCounter}> Click Me!</button>
        </div>
    )
}

export default Counter
