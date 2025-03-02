import React from "react";
import styles from './Greeting.module.css'
import mainImg from '../../assets/illustration.svg'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Greeting = ({ message }) => {
    const navigate = useNavigate() ;

    const logout = async () => {
         await axios.post('logout', {}, {withCredentials: true});
         localStorage.removeItem('accessToken');
         delete axios.defaults.headers.common['Authorization'];
         navigate('/');
    }

    return (
        <div className={styles.greeting}>
            <p className={styles.title}>{message}</p>
            <p className={styles.subTitle}>Lorby - твой личный репетитор</p>
            <img className={styles.illustrationImg} src={mainImg} alt=""/>
            <button className={styles.logOutBtn} onClick={logout }>Выйти</button>
        </div>
    )
}

export default Greeting;