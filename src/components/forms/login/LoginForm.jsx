import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { basicSchema } from "../../../schemas";
import { useNavigate } from "react-router-dom";
import styles from './LoginForm.module.css';
import { ReactComponent as EyeIcon } from '../../../assets/iconEyeOn.svg'
import { ReactComponent as EyeOffIcon } from '../../../assets/iconEyeOff.svg'
import { regAuthApi } from '../../../api/index'



const LoginForm = () => {

    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        console.log(values);
        console.log(actions);

        const loginData = {
            login: values.login,
            password: values.password
        }

        try{
            const response = await regAuthApi.login(loginData);
            navigate('/comeback')
        } catch(e) {
            console.log('Error during registration ', e.response.data)
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    }

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
        <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.title}>Вэлком бэк!</p>
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
            <button className={styles.submitBtn} disabled={isSubmitting} type="submit">Войти</button>
            <Link to="/register" className={styles.goToRegister}>
                У меня еще нет аккаунта
            </Link>
        </form>
    );
}

export default LoginForm;
