import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'

function Posts() {
    return (
        <section className={s.posts}>
            <p className={s.heading}>My posts</p>
            <form className={s.form}>
                <textarea className={s.textarea} name="text" placeholder="Your news..."></textarea>
                <input className={s.input} type="submit" value="Send" />
            </form>
            <Post text="I'm doing great today!" />
            <Post text="React is such a cool thing!" />
            <Post text="It's my first React program!" />
        </section>
    )
}

export default Posts