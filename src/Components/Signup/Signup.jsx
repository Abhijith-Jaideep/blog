import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from '../../context/Alert/AlertContext'
import UserContext from '../../context/User/UserContext'

const Signup = () => {

  const navigate = useNavigate()

  const context = useContext(UserContext)
  const alertcontext = useContext(AlertContext)
  const { signup } = context
  const {showAlert} = alertcontext

  const [info, setinfo] = useState({ username: "", password: "" })

  const onChange = (e) => {
    setinfo({ ...info, [e.target.name]: e.target.value })
  }


  const submit = (e) => {
    e.preventDefault()
    signup(info.username, info.password)
    showAlert("User signup registration successfull","primary")
    navigate(-1)
  }

  return (
    <>
      <button style={{backgroundColor:"orangered"}} className='btn btn-primary mx-3 mb-5 mt-3' onClick={() => { navigate(-1) }}><i className="fa-solid fa-left-long"></i> Go Back</button>
      <div className="container">
        <form onSubmit={submit} autoComplete="off">
          <h1 align="center">Sign up with a user name</h1>
          <p align="center">Enter a username and a password to create an account</p>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" minLength={3} required className="form-control" id="username" onChange={onChange} name="username" aria-describedby="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" minLength={8} required className="form-control" name="password" onChange={onChange} id="password" />
          </div>

          <div style={{display:"flex",justifyContent:"center"}}>
            <button type="submit" className="btn btn-primary w-50 p-3 " style={{borderRadius:"16px",fontWeight:"bold",backgroundColor:"orangered"}}>Signup</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup