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

    const {values, errors, isSubmitting, touched, handleChange, handleBlur, handleSubmit } = useFormik({
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

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <button className={styles.goBackBtn} onClick={() => navigate(-1)}><img className={styles.goBackIcon} src={goBackIcon}/>Назад</button>
            <p className={styles.title}>Создать аккаунт Lorby</p>
            <div className={styles.inputs}>
                <input 
                    className={errors.email && touched.email ? styles.inputError : ""}
                    id="email" value={values.email} 
                    placeholder="Введите адрес почты" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                />
                {errors.email && touched.email && <p className={styles.errorMsg}>- {errors.email}</p>}  
                <input 
                    className={errors.login && touched.login ? styles.inputError : ""}
                    id="login" value={values.login} 
                    placeholder="Придумайте логин" 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                />
                {errors.login && touched.login && <p className={styles.errorMsg}>- {errors.login}</p>}  
                <div className={styles.passwordInputContainer}>
                    <input
                        className={errors.password && touched.password ? styles.inputError : ""}
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
                {errors.password && touched.password && <p className={styles.errorMsg}>- {errors.password}</p>}   
                <div className={styles.passwordInputContainer}>
                    <input
                        className={errors.confirmPassword && touched.confirmPassword ? styles.inputError : ""}
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
                {errors.confirmPassword && touched.confirmPassword && <p className={styles.errorMsg}>- {errors.confirmPassword}</p>}                
            </div>
            <button className={styles.submitBtn} disabled={isSubmitting} type="submit">Далее</button>
        </form>
    )
}

export default RegistrationForm;

