

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import WelcomePage from "./pages/greetings/WelcomePage";
import ComeBackPage from "./pages/greetings/ComeBackPage";
import EmailVerificationPage from './pages/verification/EmailVerificationPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const userData = localStorage.getItem('userData');
    if (accessToken && userData) {
      setIsLoggedIn(true);
    }
    console.log(isLoggedIn)
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>

        {isLoggedIn ? (
            <>
              <Route path="/welcome" element={<WelcomePage/>}/>
              <Route path="/comeback" element={<ComeBackPage/>}/>
              <Route path="*" element={<Navigate to={"welcome"} replace/>} />
            </>
              
            ) : (
              <>
                <Route path="/welcome/*" element={<WelcomePage/>}/>
                <Route path="/register" element={<RegistrationPage/>}/> 
                <Route path="/email/verify/info" element={<EmailVerificationPage/>}/> 
                <Route path="*" element={<Navigate to={"/"} replace/>} />
              </>
            )
          }

      </Routes>
    </div>
  );
}

export default App;

