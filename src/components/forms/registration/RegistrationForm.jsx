import React from "react";
import { useFormik } from "formik";
import { registrationSchema } from "../../../schemas";
import styles from "../login/LoginForm.module.css"

const onSubmit = async (values, actions) => {
    console.log(values)
    console.log(actions)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}

const RegistrationForm = () => {
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
    console.log(errors)

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.title}>Создать аккаунт Lorby</p>
            <div className={styles.inputs}>
                <input className={styles.emailInput} id="email" value={values.email} placeholder="Введите адрес почты" onChange={handleChange} onBlur={handleBlur}/>
                <input className={styles.loginInput} id="login" value={values.login} placeholder="Придумайте логин" onChange={handleChange} onBlur={handleBlur}/>
                <input className={styles.passwordInput} id="password" type="password" value={values.password} placeholder="Создайте пароль" onChange={handleChange} onBlur={handleBlur}/>
                <input className={styles.confirmPasswordInput} id="confirmPassword" name="confirmPassword" type="password" value={values.confirmPassword} placeholder="Подтвердите пароль" onChange={handleChange} onBlur={handleBlur}/>
            </div>
            <button className={styles.submitBtn} disabled={isSubmitting} type="submit">Далее</button>
        </form>
    )
}

export default RegistrationForm;

