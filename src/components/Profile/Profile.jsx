import React from 'react'
import s from './Profile.module.css'
import Posts from './Posts/Posts'
import User from './User/User'
import Banner from './Banner/Banner'

function Profile() {
    return (
        <div className={s.profile}>
            <Banner />
            <User />
            <Posts />
        </div>
    )
}

export default Profile