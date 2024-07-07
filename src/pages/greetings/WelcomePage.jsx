import React, { useEffect }  from "react";
import Greeting from "../../components/greetings/Greeting";
import { useLocation } from "react-router-dom";

const WelcomePage = () => {

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        console.log(params)
        localStorage.setItem('accessToken', params.get('accessToken') || '');
        localStorage.setItem('refreshToken', params.get('refreshToken') || '');
    }, [location]);

    return (
        <>
            <Greeting message={'Добро пожаловать!!!'}/>
        </>
    )
}

export default WelcomePage;