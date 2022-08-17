import React from 'react'
// import About from "../components/about/About";
import Intro from "../components/CasesScreenComponents/intro/Intro";
import ProductList from "../components/CasesScreenComponents/productList/ProductList";
// import Toggle from "../components/toggle/Toggle";

import {motion,MotionConfig} from 'framer-motion'

function Cases() {
  return (
    <MotionConfig transition={{ duration: 1.5 }}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <Intro />
        {/* <About /> */}
        <ProductList />
      </motion.div>
    </MotionConfig>
  )
}

export default Cases