import React from 'react'
import { useContext } from 'react'

import { useState } from 'react'
import { useEffect } from 'react'
import AlertContext from '../../context/Alert/AlertContext'
import PostContext from '../../context/Post/PostContext'

const UserPost = (props) => {

    const [date, setdate] = useState('')



    useEffect(() => {

        setdate(new Date(props.timestamp).toLocaleString("en-In", { timeZone: "Asia/Kolkata" }))
    }, [])


    return (
        <div className={`card  bg-${props.mode === "dark" ? "black" : "light"} my-3 w-75`} style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', flexWrap: "wrap" }}>
            <div className="card-body d-flex" style={{ justifyContent: "space-between" }}>
                <h3 className="card-title w-50">{props.title}</h3>
                {date}
                <div>
                    <i className="fa-solid fa-trash-can fa-2x mx-4" style={{ color: "red", cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{props.postid(props.id)}}></i>
                    <i className="fa-solid fa-pen-to-square fa-2x" style={{ color: "blue", cursor: "pointer" }}></i>
                </div>
            </div>


        </div>
    )
}

export default UserPost