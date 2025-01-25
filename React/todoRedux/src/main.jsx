import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import shubham from './Utils/Store.js'


createRoot(document.getElementById('root')).render(
    <Provider store={shubham}>

        <BrowserRouter>
            <App />
        </BrowserRouter>

    </Provider>
)
