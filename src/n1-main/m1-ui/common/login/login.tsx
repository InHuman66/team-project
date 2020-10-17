import React from 'react';
import classes from "./login.module.css";
import {NavLink} from "react-router-dom";

const Login= () => {

    return (
        <div className={classes.beckGround}>
            <div className={classes.logIn_menu}>
                <h1>Sign-In</h1>
                <div className={classes.menu_wrapper}>
                    <div className={classes.input_wrapper}>
                        <input placeholder={'your email'}/>
                    </div>
                    <div className={classes.input_wrapper}>
                        <input placeholder={'your password'}/>
                    </div>
                    <NavLink className={classes.Link} to={'/password-recovery'} activeClassName={classes.activeNavlink}>Forgot password ?</NavLink>
                    <div className={classes.checkBox_wrapper}>
                        <input type={'checkbox'}/>
                        <p>Remember Me</p>
                    </div>
                    <button className={classes.button_signIn}>Sign In</button>
                    <NavLink className={classes.Link} to={'/registration'} activeClassName={classes.activeNavlink}>Registration</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Login;