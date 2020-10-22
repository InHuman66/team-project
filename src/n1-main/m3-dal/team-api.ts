import axios from 'axios'

const settings = {
    withCredentials: true
}
const instance = axios.create({
    baseURL: 'http://localhost:7542/',
    ...settings
})

export const LoginAPI ={
    login(data: { email: string, password: string, rememberMe: boolean}){
            return instance.post('/auth/login', data)
    },
}