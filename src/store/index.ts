import React from 'react'
import { sessionStore } from './session'
import { twitterStore } from './twitter'

export const StoresContext = React.createContext({
    sessionStore,
    twitterStore,
})
