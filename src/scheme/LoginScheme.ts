import * as yup from 'yup';

export const LoginScheme = yup.object().shape({
    email: yup
        .string()
        .email('Please enter correct email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Minimum 8 symbols')
        .matches(
            /(?=[A-Za-z0-9]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/,
            'Incorrect password'
        )
        .required('Password is required'),
});
