import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;
    useEffect(() => {
        // console.log("hey!")
    }, []);

    useEffect(() => {
        // console.log("formstate cambió")
    }, [formState]);

    useEffect(() => {
        // console.log("email cambió")
    }, [email]);

    const handleInputChange = ({target}) =>{
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }

    return <>
        <h1>useEffect</h1>
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
        </div>

        {name && <Message />}
    </>
}
