import { useState } from "react";

export const useCounter = (initialState = 1) => {
    const [state, setState] = useState(initialState);

    const increment = () =>{
        setState(state+1);
    }

    const reset = () =>{
        setState(initialState)
    }

    const decrement = () =>{
        setState(state-1);
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}
