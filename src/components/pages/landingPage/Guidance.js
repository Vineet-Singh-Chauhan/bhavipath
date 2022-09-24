import React from 'react'
// import './Guidance.module.css';
// import image1 from '../../../images/image1.jpg';
import Careercard from './Careercard';


//data
import { careers } from "../../../datasource/careerOption"

function Guidance() {
    return (

        <div className='m-4 mx-auto px-2'>
            <h1  data-aos="fade-zoom-in" className=" p-8 m-8 text-center mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400">Career Options</span></h1>
            <div className=" mx-auto  grid gap-4 md:gap-6 grid-cols-1  md:grid-cols-3 grid-rows-2 md:grid-rows-2 ">
                {
                    careers.map(
                        e =>
                            <div data-aos="fade-zoom-in" key={e.id} className="justify-center flex">


                                <Careercard link={e.link} subject={e.subject} startGrad={e.startGrad} endGrad={e.endGrad} content={e.content} />
                                
                                
                            </div>

                    )
                }
                
                



            </div>
        </div>
    )
}

export default Guidance