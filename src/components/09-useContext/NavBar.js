import React from 'react';
import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink exact activeClassName="active" className="navbar-brand" to="/">Home</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact className="nav-link" href="#" tabIndex="-1" to="/">Home</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
