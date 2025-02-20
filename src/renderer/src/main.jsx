import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.css'

import './assets/styles/main.css'
import './assets/styles/main.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import ThemeProvider from './components/ThemeProvider'
import AOS from 'aos'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </HashRouter>
    </React.StrictMode>
)
