import { NavLink } from "react-router-dom"
import React from 'react';
import classes from "./logOut.module.css";
import {useDispatch, useSelector} from "react-redux";
import {authAC, unAuthTC} from "../../../../m2-bll/n2-reducers/app-reducer";


export const LogOut = () => {
    const dispatch = useDispatch()
    const onClickLogOut=()=>{
        dispatch(unAuthTC())
    }

    return (
        <div className={classes.log_Container}>
            <button onClick={()=>{onClickLogOut()}}>LogOut</button>
        </div>
    )
}