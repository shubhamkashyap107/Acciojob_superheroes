import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Store from './utils/Store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(

  <Provider store={Store}>

  <BrowserRouter >
    <App />
  </BrowserRouter>

  </Provider>
)
