import React, { useState } from 'react'
import { useEffect } from 'react'
import Post from './Post'

import "./postdetail.css"

const PostDetail = () => {

    const [post, setpost] = useState({})
    const [rerender, setrerender] = useState(0)

    const fetchonepost = async () => {
        const id = localStorage.getItem('postid')
        const response = await fetch(`http://localhost:5000/api/posts/fetchonepost/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        setpost(await response.json())
        setTimeout(() => {
            if (rerender === 0)
                setrerender(1)
        }, 100)
    }

    useEffect(() => {
        fetchonepost()
        // eslint-disable-next-line
    }, [rerender])


    return (
        <div className="postdetail">
            <Post title={post.title} name={post.name} timestamp={post.timestamp} description={post.description}/>
        </div>
    )
}

export default PostDetail