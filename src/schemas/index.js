 import * as yup from "yup";

 export const basicSchema = yup.object().shape({
    login: yup.string().required("required"),
    password: yup.string().required("required")
 })