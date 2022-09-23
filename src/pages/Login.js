import React, { useContext, useState } from 'react'

//router
import { useNavigate } from "react-router-dom"

//

//firebase 
import { auth } from "../index"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

//data
import { loginFields } from "../datasource/loginpageData";

//components
import Header from "../components/pages/login/Header"
import Input from "../components/pages/login/Input";
import FormAction from "../components/pages/login/FormAction";
import FormExtra from "../components/pages/login/FormExtra";
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';


import { AuthContext } from '../contexts/AuthContext.js';
const fields = loginFields;
// // firebase


// export const username = '';
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');
// alert("sre")
export default function Login() {

    const navigate = useNavigate();
    
    //context
    const { dispatch } = useContext(AuthContext);

    const [loginState, setLoginState] = useState(fieldsState);



    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }






    const handleSubmit = (e) => {


        e.preventDefault();
        const email = document.getElementById("email-address").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user1 = userCredential.user;
                alert(user1)
                const user = userCredential.user;
                localStorage.setItem('user',user)
                console.log(user.email)
                dispatch({ type: "LOGIN", payload: user })
                navigate("/test")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
        authenticateUser();


    }

    //Handle Login API Integration here
    const authenticateUser = () => {

    }

    return (
        <div>
            <Navbar />

            <div data-aos="fade-zoom-in" className='my-10  flex justify-center items-center'>
                <div>
                    <Header
                        heading="Login to your account"
                        paragraph="Don't have an account yet? "
                        linkName="Signup"
                        linkUrl="/signup"
                    />
                    <form className="mt-8 space-y-6 mx-3" onSubmit={handleSubmit}>
                        <div className="mt-8 space-y-px ">
                            {
                                fields.map(field =>
                                    <Input
                                        key={field.id}
                                        handleChange={handleChange}
                                        value={loginState[field.id]}
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
                        </div>

                        <FormAction handleSubmit={handleSubmit} text="Login" />



                    </form>
                </div>

            </div>
            <Footer />
        </div>
    )
}

