import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <div className="app-whrapper">
      <div className="container">
        <Header />
        <Navigation />
        <main className="main">
          <Switch>
            <Route path="/brainbook/profile" render={() => <Profile store={props.store} />} />
            <Route exact path="/brainbook/dialogs" render={() => <DialogsContainer store={props.store} />} />
            <Route path="/brainbook/news" render={() => <News />} />
            <Route path="/brainbook/music" render={() => <Music />} />
            <Route path="/brainbook/settings" render={() => <Settings />} />
            <Route render={() => <Profile
              profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App;
