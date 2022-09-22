import React from 'react'


//data
import {questions} from "../datasource/questionare"

//components
//common
import Navbar from '../components/common/Navbar';
import Footer from "../components/common/Footer";


//images
import testImg1 from "../images/testImg1.svg"
import testImg2 from "../images/testImg2.svg"
import testImg3 from "../images/testImg3.svg"
import QuestionDiv from '../components/test/QuestionDiv';


//testLogic
let str='';

const handletest =(e)=>{
  e.preventDefault();
  

}
const Testpage = () => {
  return (
    <div>
      <Navbar />
      
      <div className='text-white font-semibold text-4xl md:text-6xl text-center my-5'>
        Trusted Carrier Suggestion
      </div>
      <div className='text-white/50 text-xl md:text-2xl text-center my-10'>
        Know yourself better through Our test <br /> And choose you path accordingly
      </div>

      <div className='flex text-center justify-around items center flex-wrap w-[90%] mx-auto my-10 gap-y-5 '>


        <div className="w-full max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

          <div className="flex flex-col items-center pb-10 mt-4">

            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={testImg2} alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Complete the Test</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400 text-center">Be yourself and answer honestly to find out your personality type.</span>

          </div>
        </div>
        <div className="w-full text-center max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

          <div className="flex flex-col items-center pb-10 mt-4">

            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={testImg3} alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">View Detailed Results</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400 text-center">Learn how your personality type influences many areas of your life.</span>

          </div>
        </div>

        <div className="w-full text-center max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

          <div className="flex flex-col items-center pb-10 mt-4">

            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={testImg1} alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Unlock Your Potential</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400 text-center">Grow into the person you want to be with your optional Premium Profile.</span>

          </div>
        </div>


      </div>

      {/* <hr className='my-5 border-white/20'/> */}

      <form onSubmit={handletest} className="test  items-center  bg-[#1f2937]/60 backdrop-blur-lg py-10 border-t-[0.5px] border-t-white/20 ">

        <h1 className='text-white font-semibold text-4xl text-center my-10 '>Questionaire</h1>
        <hr className='my-5 mx-10 border-white/20'/> 

        <div className='divide-y divide-white/10'>
        {
          questions.map(e=>
            <QuestionDiv key={e.id} id={e.id}idtrue={e.id+'true'} idfalse={e.id+'false'} question={e.question}/>
          )
        }
        


        
        
       
      </div>

        <div className='container  md:mx-auto max-w-4xl px-3 '>

      <button type="submit" className='  px-5 py-3 text-white bg-gradient-to-r   from-[#DA4453] to-[#89216B] transition  ease-out hover:ease-linear hover:bg-gradient-to-l rounded-sm my-10 text-xl ' >
        Get Suggestions
        </button>
        </div>
        </form>
      <Footer />
    </div>
  )
}

export default Testpage