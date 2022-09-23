import React from 'react'

//images
import contact2 from '../../../images/contact2.jpg';

const Teamcard = () => {
    return (
        <div className="w-full py-5 max-w-sm rounded-lg border shadow-md bg-gray-800 hover:bg-gray-700 border-gray-700">

            <div className="flex flex-col items-center ">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg" src={contact2} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium  text-white">Bonnie Green</h5>
                <span className="text-sm  text-gray-400">Visual Designer</span>
                <span className="text-sm text-gray-400/80">Lorem ipsum dolor sit amet.</span>

            </div>
        </div>
    )
}

export default Teamcard