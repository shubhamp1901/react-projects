import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // wrapper component which will check for problems in our app (deprecation, lifecycle methods etc)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
