import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <ul className={s.whrapper}>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/brainbook/profile">Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/brainbook/dialogs">Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/brainbook/news">News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/brainbook/music">Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/brainbook/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation