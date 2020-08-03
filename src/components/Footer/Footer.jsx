import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <p className={s.copyright}>Copyright 2020</p>
            <a href="./../../../../"><img className={s.logo} src="./logo.png" alt="logo" /></a>
        </footer>
    )
}

export default Footer