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
import { Route, BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-whrapper">
        <div className="container">
          <Header />
          <Navigation />
          <main className="main">
            <Route path="/profile" render={() => <Profile
              state={props.state.profilePage} />} />
            <Route path="/dialogs" render={() => <Dialogs
              state={props.state.messagesPage} />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
