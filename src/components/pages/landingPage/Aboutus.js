import React from 'react'
import image1 from '../../../images/image1.jpg';

function Aboutus() {
  return (
    <div className='p-8 w-full max-w-full h-100'>
    <h1 className=" p-8 m-8 text-center mb-4 text-3xl font-bold  text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400">About Us</span></h1>
    <h1 className="text-center mb-4 text-3xl font-bold tracking-tight leading-none  md:text-4xl lg:text-5xl text-white">We invest in the world’s potential</h1>
<div className="text-center  mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</div>

  
   <div className=" p-4 mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 items-center">

   <div className='py-4'> 
    <div className="text-justify mb-3 font-light  text-gray-400">Track work across the enterprise through an open, collaborative platform.
     Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer 
     contextual information to rapidly respond to requests, incidents, and changes. Track work across the enterprise through an open, collaborative platform.
     Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer 
     contextual information to rapidly respond to requests, incidents, and changes <br></br>
     <div className='py-4'>
     <a href="/" className="inline-flex items-center  px-5 py-3 text-white bg-gradient-to-r   from-[#DA4453] to-[#89216B] transition  ease-out hover:ease-linear hover:bg-gradient-to-l rounded-md my-10">
            Read more
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
        </div>
     </div>
     </div>
     <img className="w-full" src={image1} alt=""/>
</div>
 
</div>  
  )
}

export default Aboutus