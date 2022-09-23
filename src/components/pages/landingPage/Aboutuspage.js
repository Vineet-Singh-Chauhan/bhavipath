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

            <h1 className="px-4 my-10 text-center mb-10 text-4xl font-bold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">We invest in the world’s potential</h1>

            <div className='container'>
                <p className="px-4 text-center mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-400">Track work across the enterprise through an open, collaborative platform.<br></br>
                    Link issues across Jira and ingest data from other software development tools,
                    so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
            </div>

        {/* //Grid */}

            <h1 className="px-4 text-center mt-16 mb-4 text-2xl  tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">Meet our team</h1>

            <div className=" my-10 mx-3  grid justify-items-center gap-4 md:gap-4 grid-cols-1  md:grid-cols-3 grid-rows-2 md:grid-rows-2">


                <Teamcard/>
                <Teamcard/>
                <Teamcard/>
                <Teamcard/>
                <Teamcard/>
                <Teamcard/>


            </div>
            <Footer />
        </div>
    )
}

export default Aboutuspage