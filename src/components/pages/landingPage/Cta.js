import React from 'react'


//router
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div>
      <div className='flex flex-col text-center md:text-start md:flex-row text-black bg-gradient-to-r from-[#BCFB69] to-[#26BBAC] py-5 md:py-10 px-3 md:px-10 justify-around items-center'>
          <div data-aos="fade-zoom-in" className='my-10 transition duration-150 ease'>
            <div  className='text-4xl md:text-6xl font-bold '>
              Need Guidance ?
            </div>
            <div className='text-2xl font-semibold'>
            Are you still confused about your career
            </div>
          </div>
          <div className=''>
          <div data-aos="fade-zoom-in" className=''>
          <Link to="/test">
            <button  className="  px-5 py-3 text-white bg-black transition duration-150 ease hover:bg-white/90 hover:text-black  rounded-sm my-10 text-2xl font-semibold ">Take our test <i className={` bi bi-arrow-right ml-1 `}></i></button>
            </Link>
        </div>

          </div>
      </div>
    </div>
  )
}

export default Cta