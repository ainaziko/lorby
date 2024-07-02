import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registrationSchema } from "../../../schemas";
import styles from './RegistrationForm.module.css'
import { ReactComponent as EyeIcon } from '../../../assets/iconEyeOn.svg'
import { ReactComponent as EyeOffIcon } from '../../../assets/iconEyeOff.svg'
import goBackIcon from '../../../assets/back.svg'

const onSubmit = async (values, actions) => {
    console.log(values)
    console.log(actions)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}

const RegistrationForm = () => {

    const navigate = useNavigate();

    const {values, errors, isSubmitting,  handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            login: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: registrationSchema,
        onSubmit
    })

    const [visiblePasswordEye, setVisiblePasswordEye] = useState(false);
    const [visibleConfirmEye, setVisibleConfirmEye] = useState(false);

    const updatePassEye = () => {
        setVisiblePasswordEye(!visiblePasswordEye);
    }

    const updateConfEye = () => {
        setVisibleConfirmEye(!visibleConfirmEye);
    }
    console.log(errors)

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <button className={styles.goBackBtn} onClick={() => navigate(-1)}><img className={styles.goBackIcon} src={goBackIcon}/>Назад</button>
            <p className={styles.title}>Создать аккаунт Lorby</p>
            <div className={styles.inputs}>
                <input className={styles.emailInput} id="email" value={values.email} placeholder="Введите адрес почты" onChange={handleChange} onBlur={handleBlur}/>
                <input className={styles.loginInput} id="login" value={values.login} placeholder="Придумайте логин" onChange={handleChange} onBlur={handleBlur}/>
                <div className={styles.passwordInputContainer}>
                    <input
                        className={styles.passwordInput}
                        id="password"
                        name="password"
                        type={visiblePasswordEye ? "text" : "password"}
                        value={values.password}
                        placeholder="Введите пароль"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className={styles.toggleVisibilityIcon} onClick={updatePassEye}>
                        {visiblePasswordEye ? <EyeIcon /> : <EyeOffIcon />}
                    </span>
                </div>   
                <div className={styles.passwordInputContainer}>
                    <input
                        className={styles.passwordInput}
                        id="confirmPassword"
                        name="confirmPassword"
                        type={visibleConfirmEye ? "text" : "password"}
                        value={values.confirmPassword}
                        placeholder="Подтвердите пароль"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className={styles.toggleVisibilityIcon} onClick={updateConfEye}>
                        {visibleConfirmEye ? <EyeIcon /> : <EyeOffIcon />}
                    </span>
                </div>              
            </div>
            <button className={styles.submitBtn} disabled={isSubmitting} type="submit">Далее</button>
        </form>
    )
}

export default RegistrationForm;

