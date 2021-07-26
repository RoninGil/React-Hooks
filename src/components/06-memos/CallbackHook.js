import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

import '../02-useEffect/style.css'


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () =>{
    //     setCounter(counter+1)
    // }

    const increment = useCallback( (value) => {
            setCounter(c => c+value);
        },[setCounter])

    return (
        <div>
            <h1>useCallbackHook: {counter} </h1>
            <hr/>

            <ShowIncrement increment={increment} />
        </div>
    )
}
