import React from 'react'
import assets from './assets/assets.js'
import Navbar from './components/Navbar/Navbar.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <div className="Main">
        <Homepage/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App
