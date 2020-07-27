import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="./user-photo.jpg" alt="user" />
            <p className={s.text}>{props.message}</p>
            <span className={s.like}></span>
        </div>
    )
}

export default Post