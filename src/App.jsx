import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs.jsx';
import Navbar from './components/Navbar.jsx';
import Faqs from './components/Faqs.jsx';
import EventHighlight from './components/EventHighlight.jsx';
import VivitsuMain from './pages/VivitsuMain.jsx';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        {/* <AboutUs/>
        <EventHighlight/>
        <Faqs/> */}
        <VivitsuMain/>
      </div>
    </BrowserRouter>
  )
}

export default App
