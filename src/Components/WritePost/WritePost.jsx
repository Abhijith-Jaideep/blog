import React ,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import PostContext from '../../context/Post/PostContext'
import AlertContext from "../../context/Alert/AlertContext"

const WritePost = () => {

  const navigate = useNavigate()

  const context = useContext(PostContext)
  const alertcontext = useContext(AlertContext)


  const {createPost} = context
  const{showAlert} = alertcontext

  const [data, setdata] = useState({title:"",description:""})

  const onChange = (e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }

  const submit = (e)=>{
    e.preventDefault()
    createPost(data.title,data.description)
    showAlert("Posted!","primary")
    navigate("/")
  }

  return (
    <div>
      <button style={{ backgroundColor: "orangered" }} className='btn btn-primary mx-3 mb-5 mt-3' onClick={() => { navigate(-1) }}><i className="fa-solid fa-left-long"></i> Go Back</button>
      <form className='container mt-5' onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" onChange = {onChange} name="title" id="description" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea name="description" className="form-control" onChange = {onChange} id="description" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" className="btn btn-primary w-50 p-3 " style={{ borderRadius: "16px", fontWeight: "bold", backgroundColor: "orangered" }}>Publish</button>
          </div>
      </form>
    </div>
  )
}

export default WritePost