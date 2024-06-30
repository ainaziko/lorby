import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React from "react";
import { basicSchema } from "../../../schemas";
import styles from './LoginForm.module.css'

const onSubmit = async (values, actions) => {
    console.log(values)
    console.log(actions)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}

const LoginForm = () => {

    const {values, isSubmitting,  handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
             login: "",
             password: ""
        },
        validationSchema: basicSchema,
        onSubmit
    })

    return(
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <p className={styles.greeting}>Вэлком бэк!</p>
            <div className={styles.inputs}>
                <input className={styles.loginInput} id="login" value={values.login} placeholder="Введите логин" onChange={handleChange} onBlur={handleBlur}/>
                <input className={styles.passwordInput} id="password" type="password" value={values.password} placeholder="Введите пароль" onChange={handleChange} onBlur={handleBlur}/>
            </div>
            <button className={styles.loginBtn} disabled={isSubmitting} type="submit">Войти</button>
            <Link to="/register" className={styles.goToRegister}>
                У меня еще нет аккаунта
            </Link>
        </form>
    )
}

export default LoginForm;