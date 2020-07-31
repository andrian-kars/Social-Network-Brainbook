import React from 'react'
import s from './Music.module.css'

const Music = () => {
    return (
        <footer className={s.footer}>
            <p className={s.copyright}>Music</p>
            <a href="#top"><img className={s.logo} src="./logo.png" alt="logo" /></a>
        </footer>
    )
}

export default Music