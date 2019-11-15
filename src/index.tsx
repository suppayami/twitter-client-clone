import React from 'react'
import ReactDOM from 'react-dom'
import { toast } from 'react-toastify'

import './index.scss'
import 'react-toastify/dist/ReactToastify.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

toast.configure({
    position: toast.POSITION.BOTTOM_RIGHT,
    hideProgressBar: true,
})

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
