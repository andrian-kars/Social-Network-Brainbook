import React from 'react'
import s from './News.module.css'
import logo from './../../images/logo.png'

const News = () => {
    return (
        <footer className={s.footer}>
            <p className={s.copyright}>News</p>
            <a href="#top"><img className={s.logo} src={logo} alt="logo" /></a>
        </footer>
    )
}

export default News