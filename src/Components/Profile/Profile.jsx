import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertContext from '../../context/Alert/AlertContext'
import PostContext from '../../context/Post/PostContext'
import UserContext from '../../context/User/UserContext'
import UserPost from './UserPost'
import UserData from './UserData'
const Profile = () => {

  const navigate = useNavigate()
  const context = useContext(PostContext)
  const userContext = useContext(UserContext)
  const { fetchuserdata, userdata } = userContext
  const { userpost, fetchUserPosts, deletePost, updatePost } = context
  const alertcontext = useContext(AlertContext)
  const { mode, showAlert } = alertcontext

  const [pid, setpid] = useState({ id: '', title: '', description: '' })
  const [data, setdata] = useState({ title: '', description: '' })
  const [rerender, setrerender] = useState(0)



  useEffect(() => {
    fetchuserdata()
    fetchUserPosts()
    console.log("rerender")
    //eslint-disable-next-line
  }, [rerender])



  const postid = (id, title, description) => {
    setpid({ id, title, description })
    setdata({ title, description })
  }

  const handleClickDelete = () => {
    deletePost(pid.id);
    setTimeout(() => {
      if (rerender === 1)
        setrerender(0)
      else setrerender(1)
    }, 100)
    showAlert("Post Deleted Successfully", "warning");
  }


  const onChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const handleClickUpdate = () => {
    updatePost(data.title, data.description, pid.id)
    setTimeout(() => {
      if (rerender === 1)
        setrerender(0)
      else setrerender(1)
    }, 100)
    showAlert("Post Updated", "warning")
  }

  return (
    <div className={`bg-${mode} text-${mode === "light" ? "dark" : "light"}`} style={{ height: '100%' }}>
      <button style={{ backgroundColor: "darkturquoise" }} className='btn btn-primary mx-3 mb-5 mt-3' onClick={() => { navigate(-1) }}><i className="fa-solid fa-left-long"></i> Go Back</button>
      <div className='container-fluid'>
        <div className='container'>
          <h2>Profile Settings</h2>
          <div >
            <UserData userdata={userdata} mode={mode} />
          </div>
          <div>

          </div>
        </div>
      </div>







      <div className='userpost container'>
        <h2>My Posts</h2>

        {userpost.length === 0 && <h2 className='my-5'>You Have No Posts</h2>}


        {userpost.map((element) => {
          return <UserPost key={element._id} postid={postid} mode={mode} id={element._id} title={element.title} description={element.description} timestamp={element.timestamp} />
        })}

      </div>






      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">DELETE POST?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-danger" onClick={handleClickDelete} data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade " id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update POST</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input onChange={onChange} type="text" className="form-control" name="title" id="title" aria-describedby="title" value={data.title} />

                <label htmlFor="description">Description</label>
                <textarea onChange={onChange} className="form-control" name="description" id="description" aria-describedby="description" value={data.description} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-success" onClick={handleClickUpdate} data-bs-dismiss="modal">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile