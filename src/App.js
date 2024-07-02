import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/LoginPage'
import RegistrationPage from './pages/registration/RegistrationPage';
import WelcomePage from "./pages/greetings/WelcomePage";
import ComeBackPage from "./pages/greetings/ComeBackPage";
import EmailVerificationPage from "./pages/verification/EmailVerificationPage";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegistrationPage/>}/>   
          <Route path="/welcome" element={<WelcomePage/>}/>
          <Route path="/comeback" element={<ComeBackPage/>}/>
          <Route path="/email/verify/info" element={<EmailVerificationPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
