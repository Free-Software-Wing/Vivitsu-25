
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs.jsx';
import Navbar from './components/Navbar.jsx';
import Faqs from './components/Faqs.jsx';
import EventHighlight from './components/EventHighlight.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import Land from './Landing/Land.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Land />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/events" element={<EventHighlight />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
