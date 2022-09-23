import React from 'react'

//components
import Careercard from './Careercard';
import Navbar from '../../common/Navbar';
import Footer from "../../common/Footer";

//data
import { skills } from "../../../datasource/skills"

const Skills = () => {
  return (
    <div>
        <Navbar/>

            <div>
                <h1 className=" p-8  text-center mb-4 text-3xl font-bold  text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400">Skills</span></h1>
                <h1 className="text-center mb-4 text-3xl  tracking-tight leading-none  md:text-4xl lg:text-5xl text-white">Hey there! </h1>
                <p className="text-center  mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-400">roadmap.sh is a community effort to create roadmaps, guides and other educational content to help guide the developers in picking up the path and guide their learnings.</p>

                <div className='  grid gap-4 md:gap-6 grid-cols-1  md:grid-cols-3 grid-rows-3 md:grid-rows-3 my-10'>
                {
                    skills.map(
                        e =>
                            <div key={e.id} className="justify-center flex">
                                <Careercard link={e.link} subject={e.subject} startGrad={e.startGrad} endGrad={e.endGrad} content={e.content} />
                            </div>

                    )
                }
                   
                    

                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default Skills