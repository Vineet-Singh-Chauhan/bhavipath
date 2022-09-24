import React, { useState } from 'react'


//data
import { questions } from "../datasource/questionare"

//components
//common
import Navbar from '../components/common/Navbar';
import Footer from "../components/common/Footer";

import Modal from "../components/pages/landingPage/Modal";

//images
import testImg1 from "../images/testImg1.svg"
import testImg2 from "../images/testImg2.svg"
import testImg3 from "../images/testImg3.svg"
import QuestionDiv from '../components/test/QuestionDiv';



const reference = {
  '111': {
    careerS: 'Full Stack Developer',
    link:'https://roadmap.sh/',
    Desc: 'You have both the capacity to develop both client-side and server-side software. Consider choosing a profession as a full stack developer.'
  },
  '110': {
    careerS: 'Programming',
    link:'https://www.geeksforgeeks.org/complete-roadmap-to-learn-dsa-from-scratch/',
    Desc: 'You possess a logical mind that can debug the algorithms to solve all programming issues and create error-free systems.    '
  },
  '101': {
    careerS: 'Design',
    link:'https://en.m.wikipedia.org/wiki/Graphic_design',
    Desc: 'You have the option to pursue a line of work in graphic design. You have the potential to creatively visualize color schemes, pattern combinations, and geometric shapes.    '
  },
  '011': {
    careerS: 'Developer',
    link:'https://www.geeksforgeeks.org/complete-roadmap-to-learn-dsa-from-scratch/',
    Desc: 'Being technically inclined, you ought to attempt development courses. You may create websites, apps, and other types of software.    '
  },
  '001': {
    careerS: 'Design',
    link:'https://en.m.wikipedia.org/wiki/Graphic_design',
    Desc: 'You have the option to pursue a line of work in graphic design. You have the potential to creatively visualize color schemes, pattern combinations, and geometric shapes.    '
  },
  '010':  {
    careerS: 'Developer',
    link:'https://www.geeksforgeeks.org/complete-roadmap-to-learn-dsa-from-scratch/',
    Desc: 'Being technically inclined, you ought to attempt development courses. You may create websites, apps, and other types of software.    '
  },
  '100':{
    careerS: 'Programming',
    link:'https://www.geeksforgeeks.org/complete-roadmap-to-learn-dsa-from-scratch/',
    Desc: 'You possess a logical mind that can debug the algorithms to solve all programming issues and create error-free systems.    '
  },
  '000': {
    careerS: 'Inconfident',
    link:'',
    Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore illum adipisci rerum qui vitae ad ducimus. Tempora, maxime eligendi'
  },

}


const Testpage = () => {

  const handletest = (e) => {
    e.preventDefault();
    let str = '';

    const inputs = Array.from(e.target.parentElement.querySelectorAll("input"));
    inputs.forEach(e => {
      if (e.checked) {
        str += e.value;
      }
    })
    if (str.length !== 3) {
      alert('Please answer all questions !')
    } else {


      setCareer(reference[str].careerS);
      setCareerDesc(reference[str].Desc);
      setLink(reference[str].link);
      document.getElementById("testRes").classList.remove('hidden');
      document.getElementById("testRes").classList.add('flex');
      e.target.parentElement.querySelector("form").reset();

    }



  }
  const [career, setCareer] = useState('')
  const [careerDesc, setCareerDesc] = useState('')
  const [link, setLink] = useState('')

  return (
    <div>
      <Navbar />

      <div data-aos="fade-zoom-in" className='text-white font-semibold text-4xl md:text-6xl text-center my-5'>
        Trusted Career Suggestion
      </div>
      <div  data-aos="fade-zoom-in" className='text-white/50 text-xl md:text-2xl text-center my-10'>
        Know yourself better through Our test <br /> And choose you path accordingly
      </div>

      <div data-aos="fade-zoom-in" className='flex text-center justify-around items center flex-wrap w-[90%] mx-auto my-10 gap-y-5 '>


        <div className="w-full max-w-xs  rounded-lg border  shadow-md bg-gray-800 border-gray-700">

          <div className="flex flex-col items-center pb-10 mt-4">

            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={testImg2} alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium  text-white">Complete the Test</h5>
            <span className="text-sm  text-gray-400 text-center">Be yourself and answer honestly to find out your personality type.</span>

          </div>
        </div>
        <div className="w-full text-center max-w-xs  rounded-lg border  shadow-md bg-gray-800 border-gray-700">

          <div className="flex flex-col items-center pb-10 mt-4">

            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={testImg3} alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium  text-white">View Detailed Results</h5>
            <span className="text-sm  text-gray-400 text-center">Learn how your personality type influences many areas of your life.</span>

          </div>
        </div>

        <div className="w-full text-center max-w-xs  rounded-lg border  shadow-md bg-gray-800 border-gray-700">

          <div className="flex flex-col items-center pb-10 mt-4">

            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={testImg1} alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium  text-white">Unlock Your Potential</h5>
            <span className="text-sm  text-gray-400 text-center">Grow into the person you want to be with your optional Premium Profile.</span>

          </div>
        </div>


      </div>

      {/* <hr className='my-5 border-white/20'/> */}

      <form data-aos="fade-zoom-in"  onSubmit={handletest} className="test relative items-center  bg-[#1f2937]/60 backdrop-blur-sm py-10 border-t-[0.5px] border-t-white/20 ">

        <Modal career={career} desc={careerDesc} link={link} />
        <h1 className='text-white font-semibold text-4xl text-center my-10 '>Questionaire</h1>
        <hr className='my-5 mx-10 border-white/20' />

        <div className='divide-y divide-white/10'>
          {
            questions.map(e =>
              <QuestionDiv key={e.id} id={e.id} idtrue={e.id + 'true'} idfalse={e.id + 'false'} valtrue={e.val} valfasle={!e.val} question={e.question} />
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