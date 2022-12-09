import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Nav from './Components/Nav'
import './index.css'
import Home from './Components/Home'
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <h1>nope</h1>,
//     children: [
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: 'projects',
//         element: <Projects />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: '',
//         element: <Home />
//       },
//     ]
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
)
