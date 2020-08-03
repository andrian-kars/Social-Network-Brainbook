import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <header id="top" className={s.header}>
            <a href="./../../../../"><img className={s.logo} src="logo.png" alt="logo" /></a>
        </header>
    )
}

export default Header