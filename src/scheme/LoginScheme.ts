import * as yup from 'yup';

export const LoginScheme = yup.object().shape({
    email: yup
        .string()
        .trim()
        .email('Please enter correct email')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .max(20, 'Password is too long')
        .required('Password is required'),
});
