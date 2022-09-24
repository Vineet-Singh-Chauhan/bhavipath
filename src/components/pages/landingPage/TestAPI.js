import React from 'react'

import axios from "axios";
import { Service  } from 'axios-middleware';
const service = new Service(axios);


// response = requests.get('http://Authorization: Token 20a68644f5b415b9728b1222b510e50769360480')

// service.register({
//   onRequest(config) {
//     console.log('onRequest');
//     return config;
//   },
//   onSync(promise) {
//     console.log('onSync');
//     return promise;
//   },
//   onResponse(response) {
//     console.log('onResponse');
//     return response;
//   }
// });

// console.log('Ready to fetch.');

// // Just use axios like you would normally.
// axios('https://jsonplaceholder.typicode.com/posts/1')
//   .then(({ data }) => console.log('Received:', data));

let inputjson = {};

const TestAPI = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // service.register({
    //   onRequest(config) {
    //     console.log('onRequest');
    //     return config;
    //   },
    //   onSync(promise) {
    //     console.log('onSync');
    //     return promise;
    //   },
    //   onResponse(response) {
    //     console.log('onResponse');
    //     return response;
    //   }
    // });
    
    // console.log('Ready to fetch.');
    
    // // Just use axios like you would normally.
    // axios('https://jsonplaceholder.typicode.com/posts/1')
    //   .then(({ data }) => console.log('Received:', data));
    
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
    // axios.post('https://api.sentino.org/score/facts',inputjson);

    axios({

      // Endpoint to send files
      // url: "https://dummy.restapiexample.com/api/v1/create",
      url: "https://api.sentino.org/score/facts",
      method: "POST",
      headers: {

        // Add any auth token here
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers":"*",
        // 'Content-Type': 'application/json',
        'Authorization':'Token 20a68644f5b415b9728b1222b510e50769360480',
      },

      // Attaching the form data
      data: JSON.stringify(inputjson),
    })// Handle the response from backend here
    axios({
      url: "https://api.sentino.org/score/facts",
      method: "GET",
      headers: {

        // Add any auth token here
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers":"*",
        // 'Content-Type': 'application/json',
        'Authorization':'20a68644f5b415b9728b1222b510e50769360480',
      },}
    ).then((res) => {
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