import React from "react";
import Illustration from "../../UI/illustration/Illustration";
import LoginForm from "../../components/forms/login/LoginForm";
import styles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <Illustration/>
            <LoginForm/>
        </div>
    )
}

export default LoginPage;