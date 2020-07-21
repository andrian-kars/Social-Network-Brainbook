import React from 'react'

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__whrapper">
                <li className="navigation__item">
                    <a className="navigation__link" href="#top">Profile</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#top">Messages</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#top">News</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#top">Music</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__link" href="#top">Setting</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation