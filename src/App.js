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
import { Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <div className="app-whrapper">
      <div className="container">
        <Header />
        <Navigation />
        <main className="main">
          <Switch>
            <Route path="/brainbook/profile" render={() => <Profile
              profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route exact path="/brainbook/dialogs" render={() => <Dialogs
              store={props.store} dispatch={props.dispatch} />} />
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
