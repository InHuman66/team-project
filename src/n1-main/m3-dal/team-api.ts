import axios from 'axios'


const settings = {
    withCredentials: true,
}
const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    ...settings
})

export const LoginAPI ={
    login(data: { email: string, password: string, rememberMe: boolean}){
            return instance.post('/auth/login', data)
    },
}
export const AuthAPI ={
    isAuth(){
        return instance.post('/auth/me',{})
    },
    unAuth(){
        return instance.delete('/auth/me',{})
    },
}