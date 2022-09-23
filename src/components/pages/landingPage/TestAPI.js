import React from 'react'

import axios from "axios";

let inputjson = {};

const TestAPI = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    let msg = document.getElementById("message").value;
    inputjson = {

      "inventories": ["big5", "riasec*", "disc*"],

      "facts": [
        {
          "text": "My name is John. I am an extravert.",
          "lang": "en"
        },
        {
          "text": "I do not like to chat.",
          "response": "disagree"
        }
      ]

    }
    // axios.post('https://jsonplaceholder.typicode.com/todos/1');

    axios({

      // Endpoint to send files
      // url: "https://dummy.restapiexample.com/api/v1/create",
      url: "https://api.sentino.org/score/facts",
      method: "POST",
      headers: {

        // Add any auth token here
        'Access-Control-Allow-Origin': '* @ Chrome Web Store',
        "Access-Control-Allow-Headers":"*",
  

        'Content-Type': 'application/json',
        Authorization: '20a68644f5b415b9728b1222b510e50769360480',
      },

      // Attaching the form data
      data: JSON.stringify(inputjson),
    })// Handle the response from backend here
      .then((res) => {
        console.log(res)
      })

      // Catch errors if any
      .catch((err) => {
        console.log(err)
      });

    // console.log(inputjson)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="message" className="block mb-2 text-sm font-medium  text-gray-400">Your message</label>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm  rounded-lg border   bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        <button type='submit' className='text-white'>Submit</button>
      </form>
    </div>
  )
}

export default TestAPI