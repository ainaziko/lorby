import React from "react";
import styles from './Greeting.module.css'
import mainImg from '../../assets/illustration.svg'

const Greeting = ({ message }) => {
    return (
        <div className={styles.greeting}>
            <p className={styles.title}>{message}</p>
            <p className={styles.subTitle}>Lorby - твой личный репетитор</p>
            <img className={styles.illustrationImg} src={mainImg} alt=""/>
            <button className={styles.logOutBtn}>Выйти</button>
        </div>
    )
}

export default Greeting;