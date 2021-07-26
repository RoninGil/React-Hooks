import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginPage = () => {
    const {user, setUser} = useContext(UserContext);
    console.log(user)
    return (
        <div>
            <h1>LoginPage</h1>
            <hr/>
            <button 
                className="btn btn-primary"
                onClick={() => setUser({
                    id: 498454,
                    name:'Carlos',
                    status:'Alivsafe!'
                })}
                >
                Login
            </button>
        </div>
    )
}
