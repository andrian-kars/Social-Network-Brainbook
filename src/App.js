import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div className="app-whrapper">
      <div className="container">
        <Header />
        <Navigation />
        <main className="main">
          <Profile />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App;
