import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostStates from '../../context/Post/PostStates'
import Feed from './Feed/Feed'
import Landing from './Landing/Landing'


const MainPage = (props) => {
    return (
        <div className={`main-page h-100 bg-${props.mode === "light" ? "white" : "secondary"}`} >

            <Routes>

                <Route path="/" element={<Landing mode={props.mode}/>} />

                <Route path="feed" element={
                    <PostStates>
                        <Feed />
                    </PostStates>
                } />

            </Routes>
        </div>
    )
}

export default MainPage