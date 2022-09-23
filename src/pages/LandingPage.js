import React from 'react'

//components
//common
import Navbar from '../components/common/Navbar';
import Footer from "../components/common/Footer";

//specific
import Landing from '../components/pages/landingPage/Landing';
import DiscTest from "../components/pages/landingPage/DiscTest";
import Cta from "../components/pages/landingPage/Cta";
import Guidance from "../components/pages/landingPage/Guidance";
import Features from "../components/pages/landingPage/Features";
import Aboutus from "../components/pages/landingPage/Aboutus";
import Corousel from '../components/pages/landingPage/Corousel';
import Scourosel from '../components/pages/landingPage/Scourosel'
import AppAdd from "../components/common/AppAdd"
//

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Landing />
      {/* <Scourosel/> */}
      {/* <Corousel/> */}
      {/* <Features/> */}
      
      <Guidance />

      <div className='my-36'>
        <Cta />
      </div>
      <DiscTest />
      {/* <TestPage /> */}
      <AppAdd/>
      <Aboutus />
      <Footer />
    </>
  )
}

export default LandingPage