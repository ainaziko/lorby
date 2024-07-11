import React, { useEffect } from "react";
import Greeting from "../../components/greetings/Greeting";
import { useLocation, useNavigate } from "react-router-dom";

const WelcomePage = ({setIsLoggedIn}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/welcome', { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <Greeting message={'Добро пожаловать!!!'} />
    </>
  );
};

export default WelcomePage;
