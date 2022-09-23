import React from 'react'
// import './Features.module.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

function Features() {
    return (
        <div className='features'>
            <Splide aria-label="My Favorite Images">
                <SplideSlide >
                    <div className="mx-auto w-fit p-8 m=8 max-w-sm  rounded-lg border  shadow-md bg-gray-800 border-gray-700">
                        <svg className="mb-2 w-10 h-10 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 
     0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd">
                            </path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                        <a href="/">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight  text-white">Need a help in Claim?</h5>
                        </a>
                        <p className="mb-3 font-normal  text-gray-400">Go to this step by step guideline process on how to certify for
                            your weekly benefits:</p>
                        <a href="/" className="inline-flex items-center text-red-400 hover:underline">
                            See our guideline
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0
         100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 
         2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                        </a>
                    </div>
                </SplideSlide>
                <SplideSlide>

                    <div className="mx-auto w-fit p-6 max-w-sm  rounded-lg border  shadow-md bg-gray-800 border-gray-700">
                        <a href="/">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal  text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg 
     focus:ring-4 focus:outline-none  bg-red-600 hover:bg-red-700 focus:ring-red-800">
                            Read more
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6
          6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path></svg>
                        </a>
                    </div>

                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Features