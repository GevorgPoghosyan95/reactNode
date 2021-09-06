import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('User Name is required'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
const formOptions = { resolver: yupResolver(validationSchema) };

export default formOptions;