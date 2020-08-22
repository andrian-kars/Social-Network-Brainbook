import React from 'react'
import s from './Music.module.css'
import logo from './../../images/logo.png'

const Music = () => {
    return (
        <footer className={s.footer}>
            <p className={s.copyright}>Music</p>
            <a href="#top"><img className={s.logo} src={logo} alt="logo" /></a>
        </footer>
    )
}

export default Music