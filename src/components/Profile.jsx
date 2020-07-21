import React from 'react'

function Profile() {
    return (
        <div className="profile">
            <section className="banner">
            </section>
            <section className="user">
                <div className="user__photo">
                    <img src="./user-photo.png" alt="user" />
                </div>
                <div className="user__info">
                    <h2 className="user__name">Andrian K.</h2>
                    <p className="user__text"><span className="user__text_asked">Date of Birth:</span> 15 February</p>
                    <p className="user__text"><span className="user__text_asked">City:</span> Lviv</p>
                    <p className="user__text"><span className="user__text_asked">Education:</span> TBA</p>
                    <p className="user__text"><span className="user__text_asked">Website:</span> http://andrian-kars.ru</p>
                </div>
            </section>
            <section className="posts">
                <p className="posts__heading">My posts</p>
                <form className="posts__form">
                    <textarea className="posts__textarea" name="text" placeholder="Your news..."></textarea>
                    <input className="posts__input" type="submit" value="Send" />
                </form>
            </section>
            <section className="posted-items">
                <div className="posted-items__item">
                    <div className="posted-items__circle"></div>
                    <p className="posted-items__text">It's my first React program!</p>
                </div>
                <div className="posted-items__item">
                    <div className="posted-items__circle"></div>
                    <p className="posted-items__text">Hey, I'm awesome!</p>
                </div>
            </section>
        </div>
    )
}

export default Profile