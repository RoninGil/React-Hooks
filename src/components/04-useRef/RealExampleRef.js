import React, { useState } from 'react'
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks'

import '../02-useEffect/style.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show)
    }
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>
            {show && <MultipleCustomHooks />}

            <button 
            onClick={handleShow}
            className="btn btn-primary">Show/Hide</button>
        </div>
    )
}
