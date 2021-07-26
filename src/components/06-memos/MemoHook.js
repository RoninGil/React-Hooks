import React, { useMemo, useState } from 'react'
import '../02-useEffect/style.css'
import { useCounter }from '../../hooks/useCounter'
import { heavyProcess } from '../../helpers/heavyProcess'

export const MemoHook = () => {

    const {state, increment}=useCounter(1000);
    const [show, setShow] = useState(true);

    

    const memorizedProcess = useMemo(() => heavyProcess(state), [state]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{state}</small></h3>
            <hr/>

            <p>
                {memorizedProcess}
            </p>
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
