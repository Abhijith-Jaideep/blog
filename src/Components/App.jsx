import React, { useContext } from 'react'
import Footer from './Footer/Footer'
import NavBar from './Navbar/NavBar'
import "./app.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import MainPage from './MainPage/MainPage'
import UserStates from '../context/User/UserStates'
import Alert from './Alert/Alert'
import AlertContext from '../context/Alert/AlertContext'
import WritePost from './WritePost/WritePost'
import Profile from './Profile/Profile'
import PostStates from '../context/Post/PostStates'



const App = () => {

  const context = useContext(AlertContext)
  const { msg, show } = context

  return (


    <UserStates>
      
      {show && <Alert msg={msg} />}
      <Router>

        <Routes>
          <Route path="/*" element={
            <div className="app">

              <NavBar />


              <div>
                <div className='main-page'>
                  <MainPage />
                </div>

                <div className="footer">
                  <Footer />
                </div>

              </div>
            </div>
          } />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<PostStates><WritePost /></PostStates>} />
          <Route path="/profile" element={<PostStates><Profile/></PostStates>}/>
        </Routes>

      </Router >
    </UserStates>
  )
}

export default App