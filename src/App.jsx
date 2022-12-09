import './App.css'
import Nav from './Components/Nav'
// import Home from './Components/Home'
// import About from './Components/About';
// import Projects from './Components/Projects';
// import Contact from './Components/Contact';
import { BrowserRouter as Router, useLocation, Outlet } from 'react-router-dom'
// import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Nav />
      {/* <AnimatedRoutes /> */}
      <Outlet context />
      {/* </Router> */}

    </div>
  )
}

export default App
