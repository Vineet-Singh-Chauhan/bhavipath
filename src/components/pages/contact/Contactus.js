import React from 'react'

//sweetalert
import swal from 'sweetalert';

//firebase
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../../index";



const Contactus = () => {

  const handleContact = async (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const msg = document.getElementById('msg').value;

   

    if(firstName!==''&&lastName!==''&&email!==''&&phone!==''&&msg!==''){


    const docRef = await addDoc(collection(db, "messages"), {
      firstName:firstName ,
      lastName:lastName ,
      firstName:firstName ,
      email:email,
      phone:phone,
      msg:msg
    }).then(swal("Recieved !", "your message have been recieved", "success"));
    
    
   

    e.target.parentElement.querySelector("form").reset();
  }
  else{
    alert('Please fill form completely');
  }
  }

  return (
    <form data-aos="fade-zoom-in" onSubmit={handleContact} className="w-screen overflow-x-hidden">
      <div className='my-5 relative flex items-center justify-center  '>
        <div className=' relative'>
          <div className="flex  items-center justify-center bg-none text-white w-screen mx-0">

            <div className="my-4 px-4 lg:px-10  w-full mx-0">

              <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                <div className="flex">
                  <h1 className="font-bold uppercase text-5xl bg-gradient-to-r from-[#CB356B] to-[#BD3F32] bg-clip-text text-transparent">Send us a <br /> message</h1>
                </div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-5">
                  <input id="firstName" className="w-full   mt-2 p-3 rounded bg-[#3e3f3f]/50 text-white outline-none border-none focus:bg-[#3e3f3f]/70 "
                    type="text" placeholder="First Name*" />
                  <input id="lastName" className="w-full bg-none  mt-2 p-3 rounded bg-[#3e3f3f]/50 text-white outline-none border-none focus:bg-[#3e3f3f]/70 "
                    type="text" placeholder="Last Name*" />
                  <input id="email" className="w-full   mt-2 p-3 rounded bg-[#3e3f3f]/50 text-white outline-none border-none focus:bg-[#3e3f3f]/70 "
                    type="email" placeholder="Email*" />
                  <input id="phone" className="w-full  mt-2 p-3 rounded bg-[#3e3f3f]/50 text-white outline-none  border-none focus:bg-[#3e3f3f]/70 "
                    type="number" placeholder="Phone*" />
                </div>
                <div className="my-4">
                  <textarea id="msg" placeholder="Message*" className="w-full h-32   mt-2 p-3 rounded bg-[#3e3f3f]/50 text-white focus:bg-[#3e3f3f]/70 outline-none  border-none"></textarea>
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                  <button type="submit" className="px-5 py-3 text-white bg-gradient-to-r   from-[#DA4453] to-[#89216B] transition  ease-out hover:ease-linear hover:bg-gradient-to-l rounded-sm my-10 text-xl ">
                    Send Message
                  </button>
                </div>
              </div>

              <div
                className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-gradient-to-b from-[#4e54c8] to-[#8f94fb] rounded">
                <div className="flex flex-col text-white">
                  <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
                  <p className="text-white/80">You can visit us at our office and have a one-on-one meet
     
                  </p>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-map-marker-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Main Office</h2>
                      <p className="text-white/80">Airport Road , UIT, RGPV Bhopal</p>
                    </div>
                  </div>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-phone-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Call Us</h2>
                      <p className="text-white/80">Tel: xxx-xxx-xxx</p>
                      <p className="text-white/80">Fax: xxx-xxx-xxx</p>
                    </div>
                  </div>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <a href="https://instagram.com/bhavipath?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block  text-center pt-1">
                    <i className="bi bi-instagram text-blue-800"></i>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

          </div>



        </div>
      </div>
    </form>
  )
}

export default Contactus