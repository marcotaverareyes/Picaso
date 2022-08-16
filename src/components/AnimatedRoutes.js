import React from 'react'
import {BrowserRouter as Router,Routes,Route,useLocation} from 'react-router-dom'

import Cases from "../Pages/Cases";
import Error from "../Pages/Error";
import Main from "../Pages/Main";
import Pricing from "../Pages/Pricing";

import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/cases" element={<Cases/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes