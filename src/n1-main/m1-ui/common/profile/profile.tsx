import React from 'react';
import classes from "./profile.module.css";
import {Redirect} from "react-router-dom";
import Login from "../login/login";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2-bll/n1-state/redux-state";

const Profile= () => {
    const isLogged= useSelector<AppRootStateType>(state => state.appReducer.isAuth)


    if (!isLogged){
        return <Redirect to={'/login'}/>
    }
    return (
        <div>
            <div className={classes.smt}>

            </div>
            <div>
                <h1 className={classes.ProfileTitle}>Profile</h1>
            </div>
        </div>
        )
    ;
}

export default Profile;