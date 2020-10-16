import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from "redux-thunk"
import {loginReducer} from "../n2-reducers/login-reducer";
import {newPasswordReducer} from "../n2-reducers/new-password-reducer";
import {passwordRecoveryReducer} from "../n2-reducers/password-recovery-reducer";
import {profileReducer} from "../n2-reducers/profile-reducer";
import { registrationReducer } from "../n2-reducers/registration-reducer";
export type ReduxStateType = ReturnType<typeof reducersBatch>


export type reduxStoreType = typeof store
export  type reduxDispatchType = typeof  dispatch;

let  reducersBatch = combineReducers({
    login: loginReducer,
    newPassword: newPasswordReducer,
    passwordRecovery: passwordRecoveryReducer,
    profile: profileReducer,
    registration: registrationReducer,

});


export  const  store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));


let state = store.getState()

let dispatch = store.dispatch



