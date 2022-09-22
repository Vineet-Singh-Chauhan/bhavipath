import React, { useEffect } from "react";


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


//AOS
import AOS from "aos";
import "aos/dist/aos.css";

//CSS
import './App.css';




//pages
import LandingPage from "./pages/LandingPage";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Testpage from "./pages/Testpage";
import Contact from "./pages/Contact";




function App() {


  //AOS initialisation
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  
  







  return (
    <div className="bg-gradient-to-b from-[#001039] #0109d1 via-[#189bff10] to-[#0109d120]">
      

      <BrowserRouter>
        
        <Routes>
          
          <Route path="/" element={<LandingPage />}/>
          

          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/test" element={<Testpage/>} />
          <Route path="/Contact" element={<Contact/>} />
          


            
          
        
     
        </Routes>
      
      </BrowserRouter>
      
    
    </div>
  
  );
}

export default App;
