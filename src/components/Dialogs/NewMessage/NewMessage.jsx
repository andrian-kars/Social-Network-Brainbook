import React from 'react'
import s from './NewMessage.module.css'

let newMessageElement = React.createRef()

let addMessage = () => {
    let text = newMessageElement.current.value
    alert(text)
}

const NewMessage = (props) => {
    return (
        <div>
            <form className={s.new_message}>
                <textarea className={s.textarea} ref={newMessageElement} name="text" placeholder="Message..."></textarea>
                <input className={s.input} onClick={addMessage} type="submit" value="Send" />
            </form>
        </div>
    )
}

export default NewMessage