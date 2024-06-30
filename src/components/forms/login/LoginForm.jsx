import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { basicSchema } from "../../../schemas";
import styles from './LoginForm.module.css';
import { ReactComponent as EyeIcon } from '../../../assets/iconEyeOn.svg'
import { ReactComponent as EyeOffIcon } from '../../../assets/iconEyeOff.svg'

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}

const LoginForm = () => {
    const [visible, setVisible] = useState(false);

    const { values, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            login: "",
            password: ""
        },
        validationSchema: basicSchema,
        onSubmit
    });

    const toggleVisibility = () => {
        setVisible(!visible);
    }

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <p className={styles.greeting}>Вэлком бэк!</p>
            <div className={styles.inputs}>
                <input
                    className={styles.loginInput}
                    id="login"
                    name="login"
                    value={values.login}
                    placeholder="Введите логин"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <div className={styles.passwordInputContainer}>
                    <input
                        className={styles.passwordInput}
                        id="password"
                        name="password"
                        type={visible ? "text" : "password"}
                        value={values.password}
                        placeholder="Введите пароль"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <span className={styles.toggleVisibilityIcon} onClick={toggleVisibility}>
                        {visible ? <EyeIcon /> : <EyeOffIcon />}
                    </span>
                </div>
            </div>
            <button className={styles.loginBtn} disabled={isSubmitting} type="submit">Войти</button>
            <Link to="/register" className={styles.goToRegister}>
                У меня еще нет аккаунта
            </Link>
        </form>
    );
}

export default LoginForm;
