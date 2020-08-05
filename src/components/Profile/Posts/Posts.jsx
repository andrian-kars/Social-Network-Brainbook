import React from 'react'
import s from './Posts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'

const Posts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    // let postsElements = postsData.map((p, i) => <Post message={p.message} likesCount={p.likesCount} key={i} />)

    let newPostElement = React.createRef()

    let addNewPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <section className={s.posts}>
            <p className={s.heading}>My posts</p>
            <form className={s.form}>
                <textarea className={s.textarea} onChange={onPostChange} ref={newPostElement} value={props.newPostText} name="text" placeholder="Your news..." />
                <input className={s.input} onClick={addNewPost} type="button" value="Send" />
            </form>
            {postsElements}
        </section>
    )
}

export default Posts