import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import NewMessage from './NewMessage/NewMessage'

const Dialogs = (props) => {
    let dialogsElements =
        props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements =
        props.state.messages.map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.whrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <NewMessage />
            </div>
        </div>
    )
}

export default Dialogs