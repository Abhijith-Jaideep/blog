import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from '../../context/Alert/AlertContext'
import UserContext from '../../context/User/UserContext'
import picture from './signup.jpg'
import "./signup.css"

const Signup = () => {

  const navigate = useNavigate()

  const context = useContext(UserContext)
  const alertcontext = useContext(AlertContext)
  const { signup } = context
  const { showAlert, mode } = alertcontext

  const [info, setinfo] = useState({ username: "", password: "" })

  const onChange = (e) => {
    setinfo({ ...info, [e.target.name]: e.target.value })
  }


  const submit = (e) => {
    e.preventDefault()
    signup(info.username, info.password)
    showAlert("User signup registration successfull", "primary")
    navigate(-1)
  }

  return (
    <div className="signup h-100">

      <div className={`bg-${mode} text-${mode === "light" ? "dark" : "light"} h-100`} >
        <button className='btn mx-3 mb-5 mt-3' onClick={() => { navigate(-1) }}><i className="fa-solid fa-left-long"></i> Go Back</button>


        <div className='signupcard container d-flex p-0' style={{ backgroundColor: mode === "light" ? "white" : "#303443" }}>

          <div className='pic w-50'>
            <img src={picture} alt="signup side pic" width="100%" height="100%" />
          </div>

          <div className="signupform p-3 ">

            <form onSubmit={submit} autoComplete="off">

              <h1 align="center">Join Us...</h1>
              <div className="mb-3 mt-5 w-100">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" minLength={3} required className="form-control" id="username" onChange={onChange} name="username" aria-describedby="username" />
              </div>

              <div className="mb-5 w-100">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" minLength={8} required className="form-control" name="password" onChange={onChange} id="password" />
              </div>

              <button type="submit" className="signupbtn w-50 p-2 ">signup</button>

            </form>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Signup