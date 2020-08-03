import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="app-whrapper">
      <div className="container">
        <Header />
        <Navigation />
        <main className="main">
          <Route path="/profile" render={() => <Profile
            profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
          <Route path="/dialogs" render={() => <Dialogs
            state={props.state.dialogsPage} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App;
