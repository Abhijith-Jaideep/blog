import React from 'react'
import ReactDOM from "react-dom/client"
import App from './Components/App'
import AlertStates from './context/Alert/AlertStates'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AlertStates><App /></AlertStates>)