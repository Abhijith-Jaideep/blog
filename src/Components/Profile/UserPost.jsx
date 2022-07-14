import React from 'react'

const UserPost = (props) => {
    return (
        <div className="card mb-2 w-75">
            <div className="card-body d-flex" style={{ justifyContent: "space-between" }}>
                <h3 className="card-title">{props.title}</h3>
                <div>
                    <a href="#" className="card-link"><i class="fa-solid fa-trash-can fa-2x"></i></a>
                    <a href="#" className="card-link"><i class="fa-solid fa-pen-to-square fa-2x"></i></a>
                </div>


            </div>
        </div>
    )
}

export default UserPost