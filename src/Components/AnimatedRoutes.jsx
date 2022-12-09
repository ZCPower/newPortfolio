import React from 'react'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import { useLocation, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Home />} />
                <Route exact path='about' element={<About />} />
                <Route exact path='Projects' element={<Projects />} />
                <Route exact path='contact' element={<Contact />} />
            </Routes>
        </AnimatePresence >
    )
}

export default AnimatedRoutes