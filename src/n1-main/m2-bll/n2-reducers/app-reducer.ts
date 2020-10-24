import { Dispatch } from "redux"
import {AuthAPI, LoginAPI} from "../../m3-dal/team-api";



const initialState = {
    isAuth: false
}
type ActionsType = ReturnType<typeof authAC>
type InitialStateType = typeof initialState


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-IS-AUTH':
            return {...state, isAuth: action.value}
        default:
            return state
    }
}

export const isAuthTC = () => (dispatch: Dispatch) => {
    AuthAPI.isAuth()
        .then((res)=>{
            console.log(res)
            dispatch(authAC(true))
        })
        .catch((res)=>{
            console.log(res)
            dispatch(authAC(false))
        })

}
export const unAuthTC = () => (dispatch: Dispatch) => {
    AuthAPI.unAuth()
        .then((res)=>{
            console.log(res)
            dispatch(authAC(false))
        })
        .catch((res)=>{
            console.log(res)
            dispatch(authAC(false))
        })

}
export const authAC = (value:boolean) => ({ type: 'SET-IS-AUTH', value } as const)