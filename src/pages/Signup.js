import { useState } from 'react';

//firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//router
import { Navigate, useNavigate } from "react-router-dom"

//sweetalert
import swal from 'sweetalert';

//data
import { signupFields } from "../datasource/loginpageData"

//components
import Header from "../components/pages/login/Header"
import Input from "../components/pages/login/Input";
import FormAction from "../components/pages/login/FormAction";
import FormExtra from "../components/pages/login/FormExtra";
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("email-address").value;
        const password = document.getElementById("password").value;
        // console.log(signupState)
        
    

    //firebase
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        swal("Registered !", "Please Login to continue", "success").then( <Navigate to="/login"/>);
       
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      })
    
    }

    //handle Signup API Integration here
    const createAccount = () => {

    }

    return (
        <div data-aos="fade-zoom-in">
            <Navbar/>
        <div className='h-screen flex justify-center items-center'>
            
        <div>
            <Header
                heading="Create your account"
                paragraph="Already have an account ? "
                linkName="Login"
                linkUrl="/login"
            />

            <form className="mt-8 space-y-6 mx-3" onSubmit={handleSubmit}>
                <div className="">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={signupState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />

                        )
                    }
                    <FormAction handleSubmit={handleSubmit} text="Signup" />
                </div>



            </form>
        </div>
        </div>
        <Footer/>
        </div>
    )
}