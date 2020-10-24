import { NavLink } from "react-router-dom"
import React from 'react';
import classes from "./navbar.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/n1-state/redux-state";
import { LogOut } from "./logOut/logOut";


export const Navbar = () => {
    const isLogged= useSelector<AppRootStateType>(state => state.appReducer.isAuth)

    return (
        <div className={classes.headerBackground}>
            <div className={classes.blockLinks}>
                {isLogged ? <LogOut/>: <NavLink className={classes.Link} to={'/login'} activeClassName={classes.activeNavlink} >Log In</NavLink> }
                <NavLink className={classes.Link} to={'/new-password'} activeClassName={classes.activeNavlink}>NewPassword</NavLink>
                <NavLink className={classes.Link} to={'/password-recovery'} activeClassName={classes.activeNavlink}>PasswordRecovery</NavLink>
                <NavLink className={classes.Link} to={'/profile'} activeClassName={classes.activeNavlink}>Profile</NavLink>
                <NavLink className={classes.Link} to={'/registration'} activeClassName={classes.activeNavlink}>Registration</NavLink>
            </div>
        </div>

    )
}