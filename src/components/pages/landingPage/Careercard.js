import React from 'react'

const Careercard = (props) => {
    return (

        <a  href={props.link} className="block p-6 max-w-sm  rounded-lg border  shadow-md  bg-gray-800 border-gray-700 hover:bg-gray-700">
            <h5 className={`mb-2 text-3xl font-bold tracking-tight bg-clip-text  text-transparent bg-gradient-to-r ${props.startGrad} ${props.endGrad} `}>{props.subject}</h5>
            <p className="font-normal text-gray-400">{props.content}</p>
        </a>
 
    )
}

export default Careercard