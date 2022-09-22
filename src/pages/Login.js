import React, { useState } from 'react'

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


const fields = loginFields;
// // firebase

let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');
// alert("sre")
export default function Login() {


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
                const user = userCredential.user;
                alert(user)
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
        <div className='h-screen flex justify-center items-center'>
            <div>
                <Header
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />
                <form className="mt-8 space-y-6">
                    <div className="mt-8 space-y-px">
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
    )
}

