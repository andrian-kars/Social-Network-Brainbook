import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'

const Posts = () => {
    return (
        <section className={s.posts}>
            <p className={s.heading}>My posts</p>
            <form className={s.form}>
                <textarea className={s.textarea} name="text" placeholder="Your news..."></textarea>
                <input className={s.input} type="submit" value="Send" />
            </form>
            <Post message="I'm doing great today!" />
            <Post message="React is such a cool thing!" />
            <Post message="It's my first React program!" />
        </section>
    )
}

export default Posts