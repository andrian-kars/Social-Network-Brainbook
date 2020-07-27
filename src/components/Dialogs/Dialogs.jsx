import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <header id="top" className={s.header}>
            <a href="#top"><img className={s.logo} src="logo.png" alt="logo" /></a>
        </header>
    )
}

export default Dialogs