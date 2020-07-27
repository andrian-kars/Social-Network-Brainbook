import React from 'react'
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <ul className={s.whrapper}>
                <li className={`${s.item} ${s.active}`}>
                    <a className={s.link} href="/profile">Profile</a>
                </li>
                <li className={s.item}>
                    <a className={s.link} href="/dialogs">Messages</a>
                </li>
                <li className={s.item}>
                    <a className={s.link} href="/news">News</a>
                </li>
                <li className={s.item}>
                    <a className={s.link} href="/music">Music</a>
                </li>
                <li className={s.item}>
                    <a className={s.link} href="/settings">Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation