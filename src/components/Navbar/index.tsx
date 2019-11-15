import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarAuth } from './Auth'

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav className="navbar is-info" role="navigation" aria-label="main nagivation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item title is-3">
                    Twitter
                </Link>
            </div>
            <div className="navbar-menu">
                <NavbarAuth />
            </div>
        </nav>
    )
}
