import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.whrapper}>
            <div className={s.dialogs}>
                <div className={s.dialog + ' ' + s.active}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Julius Caesar
                </div>
                <div className={s.dialog}>
                    Donald
                </div>
                <div className={s.dialog}>
                    Elon
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Where's the Money, Lebowski?
                </div>
                <div className={s.message}>
                    Hello, how are your things going?
                </div>
                <div className={s.message}>
                    Hi!
                </div>
            </div>
        </div>
    )
}

export default Dialogs