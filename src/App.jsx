import React from 'react'
import assets from './assets/assets.js'
import Navbar from './components/Navbar/Navbar.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'



const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <div className="Main">
        <Homepage/>
      </div>
      
    </div>
  )
}

export default App
