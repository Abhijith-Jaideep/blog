import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from '../../context/Alert/AlertContext'
import PostContext from '../../context/Post/PostContext'
import UserPost from './UserPost'
const Profile = () => {

  const navigate = useNavigate()
  const context = useContext(PostContext)
  const { userpost, fetchUserPosts, deletePost } = context
  const alertcontext = useContext(AlertContext)
  const { mode, showAlert } = alertcontext

  const [pid, setpid] = useState('')

  useEffect(() => {
    fetchUserPosts()
    //eslint-disable-next-line
  }, [userpost])

  const postid = (id) => {
    setpid(id)
  }

  const handleClick = () => {
    deletePost(pid);
    showAlert("Post Deleted Successfully", "warning");
  }

  return (
    <div className={`bg-${mode} text-${mode === "light" ? "dark" : "light"}`} style={{ height: '100%' }}>
      <button style={{ backgroundColor: "darkorange" }} className='btn btn-primary mx-3 mb-5 mt-3' onClick={() => { navigate(-1) }}><i className="fa-solid fa-left-long"></i> Go Back</button>
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
        {userpost.map((element) => {
          return <UserPost key={element._id} postid={postid} mode={mode} id={element._id} title={element.title} timestamp={element.timestamp} />
        })}
      </div>






      <div class="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">DELETE POST?</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you Sure you want to delete?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-danger" onClick={handleClick} data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Profile