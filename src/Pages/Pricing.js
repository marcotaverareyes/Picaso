import React from 'react'
import '../components/PricingScreenComponents/Pricing.css'

// import ReactDOM from 'react-dom';
import { PricingComponent, Wrapper } from '../components'
import { data } from '../mockedData'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCarSide, faRunning, faTimes, faCaretRight, faCaretDown, faCheck, faRocket, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import {motion,MotionConfig} from 'framer-motion'

library.add(faCarSide, faRunning, faTimes, faCaretRight, faCaretDown, faCheck, faClock, faRocket, faGamepad)

function Pricing() {
  return (
    <MotionConfig transition={{ duration: 1.5 }}>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="outsideText" >
        <h1 style={{justifyContent:'center',alignItems:'center',textAlign:'center',fontFamily: 'GroteskBlack'}}>
          Increase Your Keyword Rankings, Organic Downloads, and Revenue 
        </h1>
        <h2 style={{justifyContent:'center',alignItems:'center',textAlign:'center',fontFamily: 'GroteskLight'}}>
          Product messaging & marketing … in just 1 hour
        </h2>
      </div>
      
      <PricingComponent data={data} />

      <div style={{marginTop:80}}></div>
    </motion.div>
    </MotionConfig>
  )
}



export default Pricing