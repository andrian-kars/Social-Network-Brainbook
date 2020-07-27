import React from 'react'
import s from './Music.module.css'

const Music = () => {
    return (
        <footer className={s.footer}>
            <p className={s.copyright}>Copyright 2020</p>
            <a href="#top"><img className={s.logo} src="./logo.png" alt="logo" /></a>
        </footer>
    )
}

export default Music