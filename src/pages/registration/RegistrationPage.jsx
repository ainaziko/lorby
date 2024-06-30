import React from "react";
import Illustration from "../../UI/illustration/Illustration";
import RegistrationForm from "../../components/forms/registration/RegistrationForm";
import styles from "./RegistrationPage.module.css"

const RegistrationPage = () => {
    return(
        <div className={styles.registrationPage}>
            <Illustration/>
            <RegistrationForm/>
        </div>
    )
}

export default RegistrationPage;