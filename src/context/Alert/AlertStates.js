import React, { useState } from 'react'
import AlertContext from './AlertContext'

const AlertStates = (props) => {

    const [show, setshow] = useState(false)
    const [msg, setmsg] = useState({ msg: "", type: "" })

    const showAlert = (msg, type) => {
        setmsg({ msg, type })
        setshow(true)
        setTimeout(()=>{setshow(false)}, 2000)
    }

    return (
        <AlertContext.Provider value={{ msg, show, showAlert }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertStates