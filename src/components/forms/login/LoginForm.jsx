import { useFormik } from "formik";
import React from "react";
import { basicSchema } from "../../../schemas";

const onSubmit = async (values, actions) => {
    console.log(values)
    console.log(actions)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}

const LoginForm = () => {

    const {values, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
             login: "",
             password: ""
        },
        validationSchema: basicSchema,
        onSubmit
    })
    console.log(values)

    return(
        <form onSubmit={handleSubmit}>
            <input id="login" value={values.login} placeholder="Введите логин" onChange={handleChange} onBlur={handleBlur}/>
            <input id="password" type="password" value={values.password} placeholder="Введите пароль" onChange={handleChange} onBlur={handleBlur}/>
            <button type="submit">Войти</button>
        </form>
    )
}

export default LoginForm;