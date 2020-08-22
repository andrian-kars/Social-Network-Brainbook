import React from 'react'
import s from './Settings.module.css'
import logo from './../../images/logo.png'

const Settings = () => {
    return (
        <footer className={s.footer}>
            <p className={s.copyright}>Settings</p>
            <a href="#top"><img className={s.logo} src={logo} alt="logo" /></a>
        </footer>
    )
}

export default Settings