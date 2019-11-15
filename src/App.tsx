import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Login } from './views/Login'
import { Register } from './views/Register'
import { StoresContext } from './store'
import { sessionStore } from './store/session'

const App: React.FC = () => {
    const stores = {
        sessionStore,
    }

    return (
        <StoresContext.Provider value={stores}>
            <Router>
                <Navbar />

                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </StoresContext.Provider>
    )
}

export default App
