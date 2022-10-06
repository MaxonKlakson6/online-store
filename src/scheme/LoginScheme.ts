import * as yup from 'yup';

import { REGEXP } from 'constants/regexp';

export const LoginScheme = yup.object().shape({
    email: yup
        .string()
        .email('Please enter correct email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Minimum 8 symbols')
        .matches(REGEXP.PASSWORD_VALIDATION, 'Incorrect password')
        .required('Password is required'),
});
