import React from 'react'
import AboutUs from "../components/MainScreenComponents/AboutUs";
import DailyPrices from "../components/MainScreenComponents/DailyPrices";
// import Footer from "../components/Footer";
import Home from "../components/MainScreenComponents/Home";
import Newsletter from "../components/MainScreenComponents/Newsletter";
import Roadmap from "../components/MainScreenComponents/Roadmap";
import Services from "../components/MainScreenComponents/Services";
import SignUp from "../components/MainScreenComponents/SignUp";

import {motion,MotionConfig} from 'framer-motion'

function Main() {
  return (
    <MotionConfig transition={{ duration: 1.5 }}>
      <motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <Home />
          {/* Put back into the website after IdeaFund */}
          {/* <DailyPrices /> */}
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