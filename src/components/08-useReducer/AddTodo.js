import React from 'react'
import { useForm } from '../../hooks/useForm'

export const AddTodo = ({handleAddTodo}) => {
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim()!==''){
            console.log("SUBMIT")
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done:false
        }
        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Add TODO</h4>
                <hr/>
                <form
                onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Todo..."
                        name="description"
                        autoComplete="off"
                        className="w-100"
                        value={description}
                        onChange={handleInputChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-1 w-100"
                        >
                            Add TODO
                    </button>
                </form>
        </>
    )
}
