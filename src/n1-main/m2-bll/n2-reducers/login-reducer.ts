import { Dispatch } from "redux"
import { LoginAPI } from "../../m3-dal/team-api"
import { authAC } from "./app-reducer"

const initialState = {
    loginData:{
      login: '',
      password: '',
      rememberMe: false,
    },
    isLoading: false,
    messagesError: false,

}
type ActionsType =  ReturnType<typeof setLoginDataAC>
                    | ReturnType<typeof setLoadingAC>
                    | ReturnType<typeof setMessageErrorAC>

type InitialStateType = typeof initialState


export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-LOGIN-DATA':
            return {...state,loginData: {login: action.data.login, password: action.data.password, rememberMe: action.data.rememberMe}}
        case 'SET-LOADING':
            return {...state, isLoading: action.value}
        case 'SET-MESSAGE-ERROR':
            return {...state, messagesError: action.value}
        default:
            return state
    }
}

export const setLoginDataAC = (data: {login:string, password:string, rememberMe:boolean}) => ({ type: 'SET-LOGIN-DATA', data } as const);
export const setLoadingAC = (value: boolean) => ({ type: 'SET-LOADING', value } as const);
export const setMessageErrorAC = (value: boolean) => ({ type: 'SET-MESSAGE-ERROR', value } as const);

export const loginTC = (data: {login:string, password:string, rememberMe:boolean}) => (dispatch: Dispatch) => {
        dispatch(setLoginDataAC(data))
        dispatch(setLoadingAC(true))
        LoginAPI.login({email: data.login, password: data.password, rememberMe:data.rememberMe})
            .then((res)=>{
                dispatch(authAC(true))
                dispatch(setLoadingAC(false))
            })
            .catch((res)=>{
                dispatch(setMessageErrorAC(true))
                dispatch(authAC(false))
                dispatch(setLoadingAC(false))
            })
}