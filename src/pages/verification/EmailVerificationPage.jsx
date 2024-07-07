import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Illustration from "../../UI/illustration/Illustration";
import styles from './EmailVerificationPage.module.css'
import goBackIcon from '../../assets/back.svg'
import Modal from 'react-modal';
import { regAuthApi } from "../../api";


const EmailVerificationPage = () => {
    const navigate = useNavigate();
    const [isFormVisible, setIsFormVisible] = useState(false);
    const email = localStorage.getItem('registrationEmail');

    const handleResendEmail = () => {

        setIsFormVisible(true);
    }

    const handleCloseModal = async() => {
        try {
            const userData = JSON.parse(localStorage.getItem('userData'));
            console.log("resending ", userData)
            await regAuthApi.resendConfirm(userData);
        } catch (e) {
            console.log(e);
        }
        setIsFormVisible(false);
    };

    return(
        <div className={styles.verifyContainer}>
            <Illustration/>
            <div className={styles.emailVerifyInfo}>
                <button 
                    className={styles.goBackBtn} 
                    onClick={() => navigate(-1)}>
                    <img className={styles.goBackIcon} src={goBackIcon} alt="go back icon"/>
                    Назад
                </button>
                <div className={styles.textInfo}>
                    <p className={styles.title}>Выслали письмо со ссылкой для завершения регистрации на {email}</p>
                    <p className={styles.info}>Если письмо не пришло, не спеши ждать совиную почту - лучше <strong className={styles.spam}>проверь ящик “Спам”</strong></p>
                    <p className={styles.emodzi}>(´｡• ω •｡`)</p>
                    <button className={styles.resendBtn} onClick={handleResendEmail}>Письмо не пришло</button>
                </div>
            </div>
            <Modal
                isOpen={isFormVisible}
                onRequestClose={() => setIsFormVisible(false)}
                contentLabel="Booking Form"
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <div className={styles.modalContaining}>
                    <p className={styles.modalTitle}>Мы выслали еще одно письмо на указанную тобой почту {email}</p>
                    <p className={styles.modalInfo}>Не забудь проверить ящик “Спам”!</p>
                    <button className={styles.modalCloseBtn} onClick={handleCloseModal}>Понятно!</button>
                </div>
            </Modal>
        </div>
    )
}

export default EmailVerificationPage;