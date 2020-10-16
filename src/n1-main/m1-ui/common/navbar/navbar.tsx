import { NavLink } from "react-router-dom"
import React from 'react';



export const Navbar = () => {
    return (
        <div>
            <NavLink to={'/login'}>Log In</NavLink>
            <NavLink to={'/new-password'}>NewPassword</NavLink>
            <NavLink to={'/password-recovery'}>PasswordRecovery</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/registration'}>Registration</NavLink>
        </div>

    )
}