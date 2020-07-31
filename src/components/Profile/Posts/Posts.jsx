import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'

const Posts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    // let postsElements = postsData.map((p, i) => <Post message={p.message} likesCount={p.likesCount} key={i} />)

    return (
        <section className={s.posts}>
            <p className={s.heading}>My posts</p>
            <form className={s.form}>
                <textarea className={s.textarea} name="text" placeholder="Your news..."></textarea>
                <input className={s.input} type="submit" value="Send" />
            </form>
            {postsElements}
        </section>
    )
}

export default Posts