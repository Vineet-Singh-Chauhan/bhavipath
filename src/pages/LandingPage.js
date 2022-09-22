import React from 'react'

//components
//common
import Navbar from '../components/common/Navbar';
import Footer from "../components/common/Footer";

//specific
import Landing from '../components/pages/landingPage/Landing';
import DiscTest from "../components/pages/landingPage/DiscTest";
import Cta from "../components/pages/landingPage/Cta";
import TestPage from "../components/pages/TestPage";
import Testform from "../components/pages/TestPage";
import Contactus from "../components/pages/contact/Contactus";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Cta />
      <DiscTest />
      <TestPage />
      <Footer />
    </>
  )
}

export default LandingPage