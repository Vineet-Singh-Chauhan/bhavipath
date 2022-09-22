import React from 'react'

const QuestionDiv = (props) => {
  return (
    <div className='questionDiv text-white container  md:mx-auto max-w-4xl py-3 px-3 '>
          <div className='text-xl md:text-2xl question  '>{props.question}</div>
          <div className='my-3 ml-3'>
            <div className=' relative'>
              <input  name={props.id} type="radio" value="true" id={props.idtrue} className='accent-green-500 mr-1' />
              <label htmlFor={props.idtrue}>Yes</label>
           
              <input name={props.id} type="radio" value="false" id={props.idfalse} className='accent-red-500 ml-5 mr-1' />
              <label htmlFor={props.idfalse}>No</label>
            </div>
              
          </div>
        </div>
  )
}

export default QuestionDiv