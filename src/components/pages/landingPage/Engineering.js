import React from 'react'

//components
//common
import Navbar from '../../common/Navbar';
import Footer from "../../common/Footer";

import Careercard from './Careercard';

//data
import { engineeringOpt } from "../../../datasource/careerOption"

function Engineering() {
    return (
        <div>
            <Navbar/>
            <h1 className=" p-8 m-8 text-center mb-4 text-3xl font-extrabold  text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400">Engineering</span></h1>

            <div className='  grid gap-4 md:gap-6 grid-cols-1  md:grid-cols-2 grid-rows-2 md:grid-rows-2 my-10'>
            {
                    engineeringOpt.map(
                        e =>
                            <div key={e.id} className="justify-center md:even:justify-start md:odd:justify-end  flex ">
                                <Careercard link={e.link} subject={e.subject} startGrad={e.startGrad} endGrad={e.endGrad} content={e.content} />
                            </div>

                    )
                }
                

            </div>
            <Footer/>
        </div>
    )
}

export default Engineering