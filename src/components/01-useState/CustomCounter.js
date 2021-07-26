import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CustomCounter = () => {

    const {state, increment, decrement, reset} = useCounter(15);

    
    return <>
        <h1>Counter with custom Hook: {state}</h1>
        <hr/>

        <button onClick={ () => increment(5) } className="btn btn-primary">+1</button>
        <button onClick={ reset } className="btn btn-primary">reset</button>
        <button onClick={() => decrement(5) } className="btn btn-danger">-1</button>
    </>
}
