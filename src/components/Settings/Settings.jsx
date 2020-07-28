import React from 'react'
import s from './Settings.module.css'

const Settings = () => {
    return (
        <footer className={s.footer}>
            <p className={s.copyright}>Settings</p>
            <a href="#top"><img className={s.logo} src="./logo.png" alt="logo" /></a>
        </footer>
    )
}

export default Settings