import React from "react";
import mainImg from '../../assets/illustration.svg'
import styles from './Illustration.module.css'

const Illustration = () => {
    return (
        <div className={styles.illustration}>
            <img className={styles.illustrationImg} src={mainImg} alt=""/>
            <p className={styles.illustrationTitle}>Lorby</p>
            <p className={styles.illustrationTxt}>Твой личный репетитор</p>
        </div>
    )
}

export default Illustration;