import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const clickCounter = () => {
       let value = count +1;
        setCount(value)
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
