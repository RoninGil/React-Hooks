import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import './style.css'

export const FormWithCustomHook = () => {

    const [formState, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formState;

    useEffect(() => {
        console.log("name changed!")
    }, [name]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }
    return( 
    <form
    onSubmit={handleSubmit}>
        <h1>FormWithCustomHook</h1>
        <hr/>
        <div className="form-group">
            <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name..."
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
            />
            <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email..."
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
            />
            <input
            type="password"
            name="password"
            className="form-control"
            placeholder="*******"
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
            />
        </div>
        <button 
        type="submit"
        className="btn btn-primary">
            Submit
        </button>

    </form>
    )
}
