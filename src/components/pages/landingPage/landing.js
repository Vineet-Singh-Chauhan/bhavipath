import React, { useState, useEffect } from 'react'
import Granim from "granim";
import BgIcon from './BgIcon'

//images
import logoB from "../../../images/logoB.png"

//router
import { Link } from 'react-router-dom';



const Landing = () => {
    const [btnhover, setBtnHover] = useState(false);
    function handleHover() {
        setBtnHover(!btnhover)
    }


    return (
        <React.Fragment>
            <div className='landingDiv h-screen flex flex-col justify-center items-center  '>
                {/* <div className='flex justify-center items-center mx-auto my-10 bg-gradient-to-b p-5 aspect-[1/1] rounded to-[#2193b0] from-[#6dd5ed] w-fit'>

        <img src={logoB} alt='Logo' className='h-[5rem]   '/>

        </div> */}
                <div data-aos={"fade-zoom-in"} className="toolTip w-fit  md:w-fit bg-[#ffffff10] hover:bg-[#ffffff20] border-1 mx-auto rounded-full py-2 text-white/70 px-10 cursor-pointer text-[0.5rem] sm:text-base ">
                    Take right career path &nbsp; | <span className='bg-clip-text font-semibold text-transparent bg-gradient-to-r from-pink-500 to-violet-300 mx-2'>Read More <i className="bi bi-arrow-right ml-1"></i> </span>
                </div>

                <div data-aos="fade-zoom-in" className='font-bold text-4xl sm:text-5xl md:text-6xl text-white text-center w-[90%] md:w-2/3 mx-auto my-10'>
                    Clear your confusions regarding career choice
                </div>
                <div data-aos="fade-zoom-in" className='w-[90%] md:w-2/3 mx-auto text-xl sm:text-2xl text-white/50 text-center'>Bhavipath helps streamline career choice, sprints, tasks, and roadmap tracking. It’s built for high-accuracy personality test.</div>
                <div data-aos="fade-zoom-in" className=''>
                    <Link to="/login">
                        <button onMouseEnter={handleHover} className="  px-5 py-3 text-white bg-gradient-to-r   from-[#DA4453] to-[#89216B] transition  ease-out hover:ease-linear hover:bg-gradient-to-l rounded-sm my-10 text-2xl font-semibold ">Take our test <i className={`${btnhover && "translate-x-20"} bi bi-arrow-right ml-1 `}></i></button>
                    </Link>
                </div>


            </div>
        </React.Fragment>
    )

}

export default Landing