import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./landing.css"


const Landing = (props) => {
  return (
    <div className='Landing'>
      <div className='container'>

        <div className='heading'>
          
          <h1>
            Inc. This Morning<br />
            <span style={{ color: props.mode === "dark" ? "white" : 'grey' }}>"</span>Blog<span style={{ color: props.mode === "dark" ? "white" : 'grey' }}>"</span>
          </h1>

          <p style={{ color: props.mode === "dark" ? "white" : 'grey' }}>
            Awesome place to make oneself<br />productive and entertained through daily updates
          </p>

        </div>

        <div className='image'>
          <div className='transparent'>
           
            <h2 className='mb-3'>The home for great readers and writers</h2>

            <Link to="/feed"><button className='btn mb-2 btn-dark' style={{ backgroundColor: "orangered" }}>Start Reading</button></Link>
            <Link to={localStorage.getItem("token") ? "/write" : "/login"}><button className="btn btn-secondary">Write A Post</button></Link>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Landing