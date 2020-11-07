import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://cards-nya-back.herokuapp.com/1.0/'
})

export const UserAPI = {
    registration(email: string, password: string) {
        return instance.post(`auth/register`, {email: email, password: password})
            .then(response => {
                return response.data
            })
    },
    autMe() {
        return instance.post(`auth/me`, {token: "6f699d80-1494-11eb-a1c7-1b9e31f07fa0"})
            .then(response => {
                return response.data
            })
    },
    getUsers(){
        return instance.get(`social/users`)
    }
}

export const LoginAPI = {
    login(data: { login: string, password: string, rememberMe: boolean }) {

    },

}