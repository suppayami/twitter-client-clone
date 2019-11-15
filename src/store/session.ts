import { observable, action } from 'mobx'
import { http, setAuthorization, clearAuthorization } from '../utils/http'

export const sessionStore = observable(
    {
        token: '',
        userId: null as number | null,
        username: null as string | null,

        get isAuthenticated() {
            return !!this.token
        },

        async fetchSession() {
            const data = (await http.get('/session/')).data.data
            this.userId = data.id
            this.username = data.username
        },

        async authenticate(username: string, password: string, otp = '') {
            const data = (await http.post('/session/', { user: { username, password, otp } })).data.data
            this.token = data.token
            setAuthorization(data.token)
            localStorage.setItem('_twitter_token', data.token)
            await this.fetchSession()
        },

        async register(username: string, password: string) {
            await http.post('/user/', { user: { username, password } })
        },

        async reauthenticate() {
            const token = localStorage.getItem('_twitter_token')
            if (!token) {
                return
            }
            setAuthorization(token)
            try {
                await this.fetchSession()
                this.token = token
            } catch {
                await this.logout()
            }
        },

        async logout() {
            this.token = ''
            this.username = null
            this.userId = null
            clearAuthorization()
        },
    },
    {
        fetchSession: action,
        authenticate: action,
        register: action,
        reauthenticate: action,
        logout: action,
    },
)
