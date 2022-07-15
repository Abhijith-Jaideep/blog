import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import AlertContext from '../../../context/Alert/AlertContext'
import postimg from "./postimg.jpg"

const PostItem = (props) => {

    const [date, setdate] = useState('')

    const context = useContext(AlertContext)
    const { mode } = context

    useEffect(() => {
        setdate(new Date(props.timestamp).toLocaleString("en-IN", { timeZone: 'Asia/Kolkata' }))
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container my-3 d-flex' style={{ justifyContent: "center" }}>
            <div className={`card w-75 bg-${mode} text-${mode === "dark" ? "white" : "dark"}`} style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}>
                <div className="card-header d-flex" style={{ justifyContent: "space-between", backgroundColor: mode === "dark" ? "black" : "darkorange" }}>

                    <div style={{ width: "fit-content", fontWeight: "bold" }}>
                        <i className="fa-solid fa-circle-user"></i> {props.name}
                    </div>

                    <div style={{ width: "fit-content" }}>
                        <b>{date}</b>
                    </div>

                </div>

                <div style={{ display: 'flex', justifyContent: "center",height: "400px" }}>
                    <img src={postimg} width="100%" alt="postimg" />
                </div>
                <div className="card-body">
                    <h3>{props.title}</h3>
                    <div>
                        <p className="card-text">{props.description}</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate molestias veritatis saepe ratione. Nobis illo laborum doloremque eum necessitatibus at temporibus aspernatur molestiae culpa. Consequatur id ab quo at deleniti!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni velit soluta odit mollitia aspernatur blanditiis nostrum iste, cupiditate sunt labore ullam rem temporibus fugit eaque tempore illo. Id, voluptatibus delectus!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam qui accusantium fugit libero velit aspernatur id nobis voluptate repudiandae! Ducimus alias nulla impedit eligendi delectus itaque sequi placeat ea obcaecati.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo veniam quasi, doloribus delectus ab sequi rem voluptatibus quidem! Reiciendis, mollitia ducimus velit fuga quaerat quisquam vero magni debitis a ipsam?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem