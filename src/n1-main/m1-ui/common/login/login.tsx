import React from 'react';
import classes from "./login.module.css";
import {NavLink} from "react-router-dom";
import {FormikProps,useFormik} from "formik";
import { FormikValuesType } from './loginContainer';


type propsType ={
    buttonState: boolean
    formik: FormikProps<FormikValuesType>
}

const Login:React.FC<propsType>= (props) => {
    return (
        <div className={classes.beckGround}>
            <div className={classes.logIn_menu}>
                <h1>Sign-In</h1>
                <form onSubmit={props.formik.handleSubmit}>
                    <div className={classes.menu_wrapper}>
                        <div className={classes.input_wrapper}>
                            <input {...props.formik.getFieldProps('email')} placeholder={'your email'}/>
                            {props.formik.errors.email ? <div className={classes.error}><p>{props.formik.errors.email}</p></div> : null}
                        </div>
                        <div className={classes.input_wrapper}>
                            <input {...props.formik.getFieldProps('password')} placeholder={'your password'}/>
                            {props.formik.errors.password ? <div className={classes.error}><p>{props.formik.errors.password}</p></div> : null}
                        </div>
                        <NavLink className={classes.Link} to={'/password-recovery'} activeClassName={classes.activeNavlink}>Forgot password ?</NavLink>
                        <div className={classes.checkBox_wrapper}>
                            <input name={'rememberMe'} onChange={props.formik.handleChange} checked={props.formik.values.rememberMe} type={'checkbox'}/>
                            <p>Remember Me</p>
                        </div>
                        <button  disabled={props.buttonState} type={'submit'}  className={classes.button_signIn}>Sign In</button>
                        <NavLink  className={classes.Link} to={'/registration'} activeClassName={classes.activeNavlink}>Registration</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;