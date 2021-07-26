import React, { useState } from 'react'
import './counter.css'


export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20
    })

    const {counter1, counter2} = state;
    const handleCounter = () =>{
        setState({
            ...state, //accede a todos los valores de la variable state
            counter1: counter1+1,
        })
        
        // setCounter(counter2+1)
    }

    return <>
        <h1>Counter1: {counter1} </h1>
        <h1>Counter2: {counter2}</h1>
        <hr/>
    
        <button 
        className="btn btn-primary"
        onClick={handleCounter}
        >+1</button>
    </>
}
