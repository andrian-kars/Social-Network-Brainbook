import React from 'react'
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <ul className={s.whrapper}>
                <li className={`${s.item} ${s.active}`}>
                    <a className={s.link} href="#top">Profile</a>
                </li>
                <li className={s.item}>
                    <a className={s.link} href="#top">Messages</a>
                </li>
                <li className={s.item}>
                    <a className={s.link} href="#top">News</a>
                </li>
                <li className={s.item}>
                    <a className={s.link} href="#top">Music</a>
                </li>
                <li className={s.item}>
                    <a className={s.link} href="#top">Setting</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation