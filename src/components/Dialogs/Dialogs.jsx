import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import NewMessage from './NewMessage/NewMessage'

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let dialogsElements =
        state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements =
        state.messages.map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.whrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messages_whrapper}>
                    {messagesElements}
                </div>
                <NewMessage
                    messages={state.messages}
                    newMessageText={state.newMessageText}
                    dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default Dialogs