import React from 'react';
import {RegistrationReduxForm} from "./RegistrationForm";

type MDTP = {
    RegistrationTC: (email:string, password:string) => void
}
type MSTP = {}
type PropsType = MSTP & MDTP

export const Registration = (props: PropsType) => {

    const onSubmit = (formData: any) => {
        props.RegistrationTC(formData.email, formData.password)
    }

    return (
        <div>
            <h1>registration</h1>
            <RegistrationReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

