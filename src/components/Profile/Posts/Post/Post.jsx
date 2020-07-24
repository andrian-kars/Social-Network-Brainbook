import React from 'react'
import s from './Post.module.css'

function Post(props) {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="./user-photo.jpg" />
            <p className={s.text}>{props.text}</p>
            <span className={s.like}></span>
        </div>
    )
}

export default Post