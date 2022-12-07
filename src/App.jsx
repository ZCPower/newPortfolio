import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Nav /> */}
      <Home />
      <About />
      <Projects />
      <Contact />
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
