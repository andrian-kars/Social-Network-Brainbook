import React from 'react'
import s from './Header.module.css'

function Header() {
    return (
        <header id="top" className={s.header}>
            <a href="#top"><img className={s.logo} src="logo.png" alt="logo" /></a>
        </header>
    )
}

export default Header