import React, { useState } from 'react'
import '../02-useEffect/style.css'
import { useCounter }from '../../hooks/useCounter'
import { Small } from './Small'


export const Memorize = () => {

    const {state, increment}=useCounter(10)
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Counter: <Small value={state}/></h1>
            <hr/>

            <button
            className="btn btn-primary mr-3"
            onClick={increment}
            >Increment</button>

            <button
            className="btn btn-outline-primary ml-3"
            onClick={() => {
                setShow(!show)
            }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
