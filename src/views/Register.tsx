import React, { useState } from 'react'
import { useStores } from '../hooks/useStores'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

export const Register: React.FunctionComponent = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const { sessionStore } = useStores()
    const history = useHistory()

    const submit: React.MouseEventHandler = async event => {
        event.preventDefault()

        if (password !== rePassword) {
            toast.error('Please recheck password retype.')
            return
        }

        try {
            await sessionStore.register(username, password)
            toast.info('Register successfully')
            history.replace('/login')
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
                                <h5 className="title is-5">Register</h5>

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
                                    <label className="label">Re-type Password</label>
                                    <div className="control">
                                        <input
                                            id="re-password"
                                            className="input"
                                            type="password"
                                            placeholder="Password..."
                                            value={rePassword}
                                            onChange={event => setRePassword(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="control">
                                    <button className="button is-link" onClick={submit}>
                                        Register
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
