import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='about' element={<About />} />
          <Route exact path='Projects' element={<Projects />} />
          <Route exact path='contact' element={<Contact />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
