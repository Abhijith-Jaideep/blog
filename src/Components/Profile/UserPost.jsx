import React from 'react'

const UserPost = (props) => {
    return (
        <div className="card mb-2 w-50">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <a href="#" className="card-link">GOTO POST</a>
            </div>
        </div>
    )
}

export default UserPost