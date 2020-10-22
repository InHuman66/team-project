import React from 'react';
import {useFormik} from "formik";
import Login from './login';
import { loginTC } from '../../../m2-bll/n2-reducers/login-reducer';
import {useDispatch} from "react-redux";

export type FormikValuesType ={
    email: string
    password: string
    rememberMe: boolean
}


const LoginContainer= () => {
    const dispatch = useDispatch()
    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate:(values)=>{
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters long';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC({rememberMe: values.rememberMe, login:values.email , password:values.password}))
        },
    });
    return (
        <Login buttonState={false} formik={formik}/>
    );
}

export default  LoginContainer;