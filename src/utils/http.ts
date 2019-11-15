import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://kvy-test.herokuapp.com/api/',
    timeout: 5000,
})

export const setAuthorization = (token: string) => (http.defaults.headers.common['Authorization'] = `Bearer ${token}`)
export const clearAuthorization = () => (http.defaults.headers.common['Authorization'] = undefined)
