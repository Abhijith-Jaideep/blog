import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostStates from '../../context/Post/PostStates'
import Feed from './Feed/Feed'
import Landing from './Landing/Landing'


const MainPage = () => {
    return (
            <Routes>
                <Route path="/" element={<Landing />} />

                <Route path="feed" element={
                    <PostStates>
                        <Feed />
                    </PostStates>
                } />
            </Routes>
    )
}

export default MainPage