import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import userContext from './component/utils/contextApi.js'

createRoot(document.getElementById('root')).render(
    <App />
)
