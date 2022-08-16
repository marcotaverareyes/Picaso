import React from 'react'
import AboutUs from "../components/AboutUs";
import DailyPrices from "../components/DailyPrices";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Newsletter from "../components/Newsletter";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import SignUp from "../components/SignUp";

import {motion,MotionConfig} from 'framer-motion'

function Main() {
   
    
  return (
    <MotionConfig transition={{ duration: 1.5 }}>
      <motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <Home />
          <DailyPrices />
          <AboutUs />
          <Services/>
          <SignUp />
          <Roadmap />
          <Newsletter />
      </motion.div>
    </MotionConfig>
  )
}

export default Main