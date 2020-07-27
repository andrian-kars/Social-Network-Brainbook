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


function App() {
  return (
    <BrowserRouter>
      <div className="app-whrapper">
        <div className="container">
          <Header />
          <Navigation />
          <main className="main">
            <Route path="/profile" component={Profile} />
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
