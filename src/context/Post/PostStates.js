import React, { useState } from 'react'
import PostContext from './PostContext'


const PostStates = (props) => {

    const [posts, setposts] = useState([])

    const fetchAllPosts = async () => {
        const response = await fetch("http://localhost:5000/api/posts/allPosts", {
            method: "GET"
        })
        const json = await response.json()
        setposts(json)

    }

    const createPost = async (title,description)=>{

        const  data = {title:title,description:description}
         await fetch("http://localhost:5000/api/posts/createPost",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "auth-token":localStorage.getItem("token")
            },
            body:JSON.stringify(data)
        })
    }


    return (
        <PostContext.Provider value={{ posts, fetchAllPosts ,createPost}}>
            {props.children}
        </PostContext.Provider>
    )

}

export default PostStates