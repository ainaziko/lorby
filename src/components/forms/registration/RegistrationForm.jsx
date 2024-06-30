import React from "react";
import { useFormik } from "formik";
import { registrationSchema } from "../../../schemas";

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
        <form  onSubmit={handleSubmit}>
            <input id="email" value={values.email} placeholder="Введите адрес почты" onChange={handleChange} onBlur={handleBlur}/>
            <input id="login" value={values.login} placeholder="Придумайте логин" onChange={handleChange} onBlur={handleBlur}/>
            <input id="password" type="password" value={values.password} placeholder="Создайте пароль" onChange={handleChange} onBlur={handleBlur}/>
            <input id="confirmPassword" name="confirmPassword" type="password" value={values.confirmPassword} placeholder="Подтвердите пароль" onChange={handleChange} onBlur={handleBlur}/>
            <button disabled={isSubmitting} type="submit">Далее</button>
        </form>
    )
}

export default RegistrationForm;

