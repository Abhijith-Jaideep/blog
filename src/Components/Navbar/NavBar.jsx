import React, { useContext, useEffect, useState } from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
import AlertContext from '../../context/Alert/AlertContext'

const NavBar = () => {

    const [token, settoken] = useState("")
    const context = useContext(AlertContext)
    const { showAlert,changeMode,mode } = context

    useEffect(() => {

        settoken(localStorage.getItem("token"))
    }, [])


    const deletetoken = () => {
        settoken("")
        localStorage.removeItem("token")
        showAlert("Logged out Successfully", "success")
    }

    return (
        <nav className={`navbar navbar-${mode} bg-${mode}`}>

            <div className="form-check form-switch">
                <input className="form-check-input" onClick={changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"  defaultChecked={mode==="dark"?true:false}/>
                <span style={{color:mode==="dark"?"white":"black"}}>Dark </span>
                <i style={{color:mode==="dark"?"white":"black"}} className="fa-solid fa-moon"></i>
            </div>

            <div className='nav-links'>

                <Link className="navbar-brand" to="/"><i className="fa-solid fa-house-chimney"></i> Home</Link>

                {!token && <>
                    <Link className="navbar-brand" to="/signup"><i className="fa-solid fa-user-plus"></i> Signup</Link>
                    <Link className="navbar-brand" to="/login"><i className="fa-solid fa-user-pen"></i> Login</Link>
                </>}

                {token && <>
                    <Link className="navbar-brand" to="/write"><i className="fa-solid fa-feather"></i> Write</Link>
                    <Link className="navbar-brand" to="/feed"><i className="fa-solid fa-book-open"></i> View Feed</Link>
                    <Link className="navbar-brand" to="/profile"><i className="fa-solid fa-address-card"></i> View Profile</Link>

                    <Link className="navbar-brand" onClick={deletetoken} to="/"><i className="fa-solid fa-user-pen"></i> Logout</Link>
                </>
                }
            </div>

        </nav>
    )
}

export default NavBar