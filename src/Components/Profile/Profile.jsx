import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostContext from '../../context/Post/PostContext'
import UserPost from './UserPost'
const Profile = () => {

  const navigate = useNavigate()
  const context = useContext(PostContext)
  const {userpost,fetchUserPosts} = context

  useEffect(()=>{
    fetchUserPosts()
    //eslint-disable-next-line
  },[])

  return (
    <div>
      <button style={{ backgroundColor: "orangered" }} className='btn btn-primary mx-3 mb-5 mt-3' onClick={() => { navigate(-1) }}><i className="fa-solid fa-left-long"></i> Go Back</button>
      <div className='container-fluid'>
        <div className='container'>
          <h2>Profile Settings</h2>
          <div>
            
          </div>
          <div>

          </div>
        </div>
      </div>

      <div className='userpost container'>
          <h2><u>Posts</u></h2>
          {userpost.map((element)=>{
            return <UserPost key={element._id} title={element.title}/>
          })}
      </div>

    </div>
  )
}

export default Profile