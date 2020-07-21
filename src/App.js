import React from 'react'
import './App.css'
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Profile from './components/Profile';


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
