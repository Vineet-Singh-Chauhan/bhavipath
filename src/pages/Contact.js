import React from 'react'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'


//components
import Contactus from '../components/pages/contact/Contactus'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center'>
        <Contactus/>
    </div>
    <Footer/>
    </>
  )
}

export default Contact