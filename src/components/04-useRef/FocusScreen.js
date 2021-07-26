import React, { useRef } from 'react'

import '../02-useEffect/style.css'

export const FocusScreen = () => {

    const ref = useRef();
    console.log(ref)
    const handleClick = () =>{
        ref.current.select();
    }

    return (
        <div>
            <h1>Focus screen</h1>
            <hr/>

            <input
                ref = {ref}
                className="form-control"
                placeholder="Nombre"
            />

            <button 
            onClick={handleClick}
            className="btn btn-outline-primary mt-5">Focus</button>
        </div>
    )
}
