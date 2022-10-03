import React, { useEffect ,useContext} from "react";

import {AuthContext} from "./contexts/AuthContext"

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
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
import Aboutuspage from "./components/pages/landingPage/Aboutuspage";
import Engineering from "./components/pages/landingPage/Engineering";
import Job from "./components/pages/landingPage/Job";
import Skills from "./components/pages/landingPage/Skills";
import Exams from "./components/pages/landingPage/Exams";
import Modal from "./components/pages/landingPage/Modal";
import TestAPI from "./components/pages/landingPage/TestAPI";



function App() {


  //AOS initialisation
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  //context
  const {currentUser} = useContext(AuthContext)
  const RequireAuth = ({children})=>{
    const navigate = useNavigate();
    return  currentUser ? children :<Navigate to="/login"/>;
  }

  // sessionStorage.clear();

  return (
    <div className="bg-gradient-to-b from-[#001039] #0109d1 via-[#189bff10] to-[#0109d120]">
      
      <BrowserRouter>
        
        <Routes>
          
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          {/* <Route path="/test" element={<Testpage/>} /> */}
          <Route path="/test" element={<RequireAuth><Testpage/></RequireAuth>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/About" element={<Aboutuspage/>} />
          <Route path="/engineering" element={<Engineering/>} />
          <Route path="/job" element={<Job/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/exams" element={<Exams/>} />
          <Route path="/modal" element={<Modal/>} />
          <Route path="/testapi" element={<TestAPI/>} />
          
        </Routes>
      
      </BrowserRouter>
      
    
    </div>
  
  );
}

export default App;
