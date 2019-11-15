import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useStores } from '../hooks/useStores'
import { useHistory } from 'react-router-dom'

export const Login: React.FunctionComponent = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [otp, setOtp] = useState('')
    const { sessionStore } = useStores()
    const history = useHistory()

    const submit: React.MouseEventHandler = async event => {
        event.preventDefault()

        try {
            await sessionStore.authenticate(username, password, otp)
            toast.done('Login successfully')
            history.replace('/')
        } catch (err) {
            toast.error(err.response.data.errors.detail)
        }
    }

    return (
        <section className="hero is-fullheight is-light">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <form className="box is-light">
                                <h5 className="title is-5">Login</h5>

                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control">
                                        <input
                                            id="username"
                                            className="input"
                                            type="text"
                                            placeholder="Username..."
                                            value={username}
                                            onChange={event => setUsername(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input
                                            id="password"
                                            className="input"
                                            type="password"
                                            placeholder="Password..."
                                            value={password}
                                            onChange={event => setPassword(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">OTP</label>
                                    <div className="control">
                                        <input
                                            id="otp"
                                            className="input"
                                            type="text"
                                            placeholder="OTP..."
                                            value={otp}
                                            onChange={event => setOtp(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="control">
                                    <button className="button is-link" onClick={submit}>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
