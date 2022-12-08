import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          {/* <About />
          <Projects />
          <Contact /> */}
        </Routes>
        {/* <Contact /> */}
      </Router>

    </div>
  )
}

export default App
