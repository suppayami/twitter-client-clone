import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Login } from './views/Login'
import { Register } from './views/Register'
import { StoresContext } from './store'
import { sessionStore } from './store/session'
import { Feed } from './views/Feed'
import { twitterStore } from './store/twitter'

const App: React.FC = () => {
    const stores = {
        sessionStore,
        twitterStore,
    }

    return (
        <StoresContext.Provider value={stores}>
            <Router>
                <Navbar />
                <div className="message container is-info" style={{ marginTop: '1em' }}>
                    <div className="message-body">
                        <p>
                            API URL:{' '}
                            <a href="https://kvy-test.herokuapp.com/api/">https://kvy-test.herokuapp.com/api/</a>
                        </p>
                        <p>
                            Users List (For User ID):{' '}
                            <a href="https://kvy-test.herokuapp.com/api/user">
                                https://kvy-test.herokuapp.com/api/user
                            </a>
                        </p>
                        <p>
                            OTP (Testing Purpose):{' '}
                            <a href="https://kvy-test.herokuapp.com/api/session/otp/:userId">
                                https://kvy-test.herokuapp.com/api/session/otp/:userId
                            </a>
                        </p>
                    </div>
                </div>

                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>

                    <Route path="/">
                        <Feed />
                    </Route>
                </Switch>
            </Router>
        </StoresContext.Provider>
    )
}

export default App
