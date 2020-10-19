import { Dispatch } from "redux"
import { LoginAPI } from "../../m3-dal/team-api"

const initialState = {
    loginData:{
      login: '',
      password: '',
      rememberMe: false,
    },
}
type ActionsType =  ReturnType<typeof setLoginDataAC>
type InitialStateType = typeof initialState


export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-LOGIN-DATA':
            return {...state,loginData: {login: action.data.login, password: action.data.password, rememberMe: action.data.rememberMe}}
        default:
            return state
    }
}

export const setLoginDataAC = (data: {login:string, password:string, rememberMe:boolean}) => ({ type: 'SET-LOGIN-DATA', data } as const);
export const loginTC = (data: {login:string, password:string, rememberMe:boolean}) => (dispatch: Dispatch) => {
        dispatch(setLoginDataAC(data))
        LoginAPI.login({email: data.login, password: data.password, rememberMe:data.rememberMe})
            .then((res)=>{
                console.log(res)
            })
            .catch((res)=>{
                console.log('error' , res)
            })
}