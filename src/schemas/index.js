import * as yup from "yup";

export const basicSchema = yup.object().shape({
    login: yup.string().required("required"),
    password: yup.string().required("required")
})

export const registrationSchema = yup.object().shape({
    email: yup.string().email("Введите правильный адрес почты").required("Обязательное поле"),
    login: yup.string().required("Обязательное поле"),
    password: yup.string()
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .max(15, 'Пароль должен содержать максимум 15 символов')
      .matches(/[a-z]/, 'Пароль должен содержать минимум одну строчную букву')
      .matches(/[A-Z]/, 'Пароль должен содержать минимум одну прописную букву')
      .matches(/[0-9]/, 'Пароль должен содержать минимум одну цифру')
      .matches(/[@$!%*?&#]/, 'Пароль должен содержать минимум один спецсимвол (@, $, !, %, *, ?, &, #)')
      .required('Пароль обязателен'),
      confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле')
});  