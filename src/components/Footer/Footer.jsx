import React from 'react'
import s from './Footer.module.css'
import logo from './../../images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <p className={s.copyright}>Copyright 2020</p>
            <Link to="/brainbook/profile"><img className={s.logo} src={logo} alt="logo" /></Link>
        </footer>
    )
}

export default Footer