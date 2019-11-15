import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../hooks/useStores'

export const NavbarAuth: React.FunctionComponent = observer(() => {
    const { sessionStore } = useStores()
    const logout = () => {
        sessionStore.logout()
    }

    useEffect(() => {
        sessionStore.reauthenticate()
    }, [sessionStore])

    if (sessionStore.isAuthenticated) {
        return (
            <div className="navbar-end">
                <div className="navbar-item">@{sessionStore.username}</div>
                <div className="navbar-item" onClick={logout}>
                    Logout
                </div>
            </div>
        )
    }

    return (
        <div className="navbar-end">
            <Link to="/register" className="navbar-item">
                Register
            </Link>
            <Link to="/login" className="navbar-item">
                Login
            </Link>
        </div>
    )
})
