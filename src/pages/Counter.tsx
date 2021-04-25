import React, { useState, useEffect } from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    "button": {
        backgroundColor: "#bad"
    }
})

const Counter = () => {
    const [count, setCount] = useState(0 as number)
    const classes = useStyles();
    const [toggle, settoggle] = useState(true as boolean)
    
    const clickCounter = (e: any) => {
        e.preventDefault();
        console.log("eeeeeeee", e)
        // let value = cp
        setCount(count+1)
    }

    useEffect(() => {
        console.log("hello effect");
        
        return () => {
            console.log("ok");
        }
    }, [count, toggle])

    
    const toggleView = () => {
        settoggle(!toggle)
    }
    return (
        <div>
            <div>
                {toggle && (
                    <p> I am clicked <span>{count}</span></p>
                )}
             
            </div>
            <button className={classes.button} onClick={clickCounter}> Click Me!</button>
            <button style={{}} onClick={toggleView}>Toggle</button>
        </div>
    )
}

export default Counter
