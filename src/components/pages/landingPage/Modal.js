import React, { useState } from 'react'

const Modal = (props) => {
    
    const handleClose = () => {
        document.getElementById("testRes").classList.remove('flex');
        document.getElementById("testRes").classList.add('hidden');
        
    }
    return (
        <div className={` hidden absolute top-0 left-0 bottom-0 h-full w-full z-50  justify-center items-center bg-black-600/30 backdrop-blur-sm`} id="testRes">


            <div id="defaultModal" tabIndex="-1" className=" ">
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative  rounded-lg shadow bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-start p-4 rounded-t border-b border-gray-600">
                            <h3 className="text-xl font-semibold  text-white">
                                {props.career}
                            </h3>
                            <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent   rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">
                           
                            <p className="text-base leading-relaxed  text-gray-400">
                                {props.desc}
                            </p>
                            
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="flex items-center p-6 space-x-2 rounded-b border-t  border-gray-600">
                            <button onClick={handleClose} type="button" className="   focus:ring-4 focus:outline-none rounded-lg border  text-sm font-medium px-5 py-2.5  focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal