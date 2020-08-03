import React from 'react'
import s from './Profile.module.css'
import Posts from './Posts/Posts'
import User from './User/User'
import Banner from './Banner/Banner'

const Profile = (props) => {


    return (
        <div className={s.profile}>
            <Banner />
            <User />
            <Posts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default Profile