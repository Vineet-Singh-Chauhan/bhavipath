import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDURXFBCbyDrSG1wrafs6nI_fIEYnnmAxA",
  authDomain: "bhavipath-4f52f.firebaseapp.com",
  projectId: "bhavipath-4f52f",
  storageBucket: "bhavipath-4f52f.appspot.com",
  messagingSenderId: "560209119745",
  appId: "1:560209119745:web:1c65d9ccb03c33278b4e00"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
