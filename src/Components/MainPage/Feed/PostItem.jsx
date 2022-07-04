import React, { useEffect, useState } from 'react'
import postimg from "./postimg.jpg"

const PostItem = (props) => {

    const [date, setdate] = useState('')

    useEffect(() => {
        setdate(new Date(props.timestamp).toLocaleString("en-IN", { timeZone: 'Asia/Kolkata' }))
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container mt-3'>
            <div className="card">
                <div className="card-header d-flex" style={{ justifyContent: "space-between", backgroundColor: "white" }}>
                    <div style={{width:"fit-content",fontWeight:"bold"}}>
                    <i className="fa-solid fa-circle-user" style={{color:"orangered"}}></i> {props.name}
                    </div>
                    <div style={{width:"fit-content"}}>
                        {date}
                    </div>
                </div>
                <h5 className="card-title mx-3 my-3">{props.title}</h5>
                <div className="card-body d-flex">
                    <img src={postimg} height="15%" width="15%" alt="postimg" />
                    <div>
                        <p className="card-text mx-3">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem