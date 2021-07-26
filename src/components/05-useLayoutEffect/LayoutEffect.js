import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './layout.css'

export const LayoutEffect = () => {

    const [boxSize, setBoxSize] = useState({});

    const {increment, state} = useCounter()
    const handleClick = (e) => {
        e.preventDefault();
        increment();
        console.log(state)
    }
    const {loading, data, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const {author, quote} = !!data && data[0]; //si hay data, entonces obtenlo de data[0]
    console.log(loading, error, author)
    const pTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
        console.log(boxSize);
    }, [quote]);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>
            <blockquote className="blockquote text-end">
                <p
                ref={pTag} 
                className="mb-3">{quote}</p>
            </blockquote>
            <h3>{JSON.stringify(boxSize, null, 3)}</h3>
            <button 
            onClick={handleClick}
            className="btn btn-primary">Next Quote</button>
        </div>
    )
}
