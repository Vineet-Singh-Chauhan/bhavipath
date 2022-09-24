import React from 'react'
// import './Aboutuspage.module.css';

//components
//common
import Navbar from '../../common/Navbar';
import Footer from "../../common/Footer";
import Teamcard from './Teamcard';



function Aboutuspage() {
    return (
        <div>
            <Navbar />

            <h1 data-aos="fade-zoom-in" className="px-4 my-10 text-center mb-10 text-4xl font-bold tracking-tight leading-none  bg-gradient-to-r from-[#CB356B] to-[#BD3F32] bg-clip-text md:text-5xl lg:text-6xl text-transparent">About us</h1>

            <div  data-aos="fade-zoom-in" className='container'>
                <p className="px-4 text-center mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-400"> We help you in building the minds’ excellence!<br></br>
               

At BhaviPath, we are here to guide you towards the right path for your right career decisions.
</p>
            </div>

        {/* //Grid */}

            <h1  data-aos="fade-zoom-in" className="px-4 text-center mt-16 mb-4 text-2xl  tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">Meet our team</h1>

            <div  data-aos="fade-zoom-in" className=" my-10 mx-3  grid justify-items-center gap-4 md:gap-4 grid-cols-1  md:grid-cols-3 grid-rows-2 md:grid-rows-2">


                <Teamcard name="Aarya Gupta" post="Designer" desc="Lorem ipsum dolor sit amet." img='f'/>
                <Teamcard name="Anmol Sharma" post="Manager" desc="Lorem ipsum dolor sit amet." img='m'/>
                <Teamcard name="Arisha Ahmed" post="App Developer" desc="Lorem ipsum dolor sit amet." img='f'/>
                <Teamcard name="Isha" post="App Developer" desc="Lorem ipsum dolor sit amet." img='f'/>
                <Teamcard name="Mahek Kashyap" post="Media Manager" desc="Lorem ipsum dolor sit amet." img='f'/>
                <Teamcard name="Neha Verma" post="Web Developer" desc="Lorem ipsum dolor sit amet." img='f'/>
                <Teamcard name="Pallavi" post="Designer" desc="Lorem ipsum dolor sit amet." img='f'/>
                <Teamcard name="Parijat Sahu" post="Designer" desc="Lorem ipsum dolor sit amet." img='f'/>
                <Teamcard name="Vineet singh Chauhan" post="Web Developer" desc="Lorem ipsum dolor sit amet." img='m'/>
                
                


            </div>
            <Footer />
        </div>
    )
}

export default Aboutuspage