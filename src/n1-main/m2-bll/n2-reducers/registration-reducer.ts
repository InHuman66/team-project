import {Dispatch} from "redux"
import {UserAPI} from "../../m3-dal/team-api";

type ActionType = SetUserDataAT

type AuthType = {
    email: string
    name: string
}

const initialState: AuthType = {
    email: "",
    name: "",
}
type ActionsType = any
type InitialStateType = typeof initialState


export const registrationReducer = (state: AuthType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            debugger
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name
            }
        }
        default:
            return state
    }
}

const SET_USER_DATA = "SET_USER_DATA"
export type SetUserDataAT = {
    type: typeof SET_USER_DATA
    payload: AuthType
}
export const SetUserDataAC = (email:string, name:string): SetUserDataAT => ({
    type: SET_USER_DATA,
    payload: {email, name}
})

export const RegistrationTC = (email: string, password: string) => (dispatch: Dispatch) => {
    return UserAPI.registration(email, password)
        .then(response => {
            dispatch(SetUserDataAC(response.addedUser.email, response.addedUser.name))
        })
}
