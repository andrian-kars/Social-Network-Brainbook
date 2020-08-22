import React from 'react'
import s from './Header.module.css'
import logo from './../../images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id="top" className={s.header}>
            <Link to="/brainbook/profile"><img className={s.logo} src={logo} alt="logo" /></Link>
        </header>
    )
}

export default Header