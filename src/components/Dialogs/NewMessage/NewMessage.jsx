import React from 'react'
import s from './NewMessage.module.css'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../../redux/state'

const NewMessage = (props) => {
    let newMessageElement = React.createRef()

    let addNewMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={s.whrapper}>
            <form className={s.new_message}>
                <textarea className={s.textarea} onChange={onMessageChange}
                    ref={newMessageElement} value={props.newMessageText}
                    name="text" placeholder="Message..." />
                <input className={s.input} onClick={addNewMessage} type="button" value="Send" />
            </form>
        </div>
    )
}

export default NewMessage