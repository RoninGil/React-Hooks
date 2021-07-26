import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import '../02-useEffect/style.css'

export const MultipleCustomHooks = () => {

    const {increment, state} = useCounter()
    const handleClick = (e) => {
        e.preventDefault();
        increment();
        console.log(state)
    }
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const {author, quote} = !!data && data[0]; //si hay data, entonces obtenlo de data[0]
    return (
        <div>
            <h1>Multiple Custom Hooks</h1>
            <hr/>


            {
                loading ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                : //else
                (
                    <>
                        <blockquote className="blockquote text-end">
                            <p className="mb-3">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                        <button 
                        onClick={handleClick}
                        className="btn btn-primary">Next Quote</button>
                    </>
                )
            }
            
            
            
        </div>
    )
}
