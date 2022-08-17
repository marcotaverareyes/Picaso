import React from "react";
import {BrowserRouter as Router,Routes,Route,useLocation} from 'react-router-dom'
// import AboutUs from "./components/AboutUs";
import AnimatedRoutes from "./components/AnimatedRoutes";
// import DailyPrices from "./components/DailyPrices";
import Footer from "./components/GlobalScreenComponents/Footer";
// import Home from "./components/Home";
import Navbar from "./components/GlobalScreenComponents/Navbar";
// import Newsletter from "./components/Newsletter";
// import Roadmap from "./components/Roadmap";
import ScrollToTop from "./components/GlobalScreenComponents/ScrollToTop";
// import Services from "./components/Services";
// import SignUp from "./components/SignUp";



export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <AnimatedRoutes/>
      <Footer/>
    </Router>
  );
}
