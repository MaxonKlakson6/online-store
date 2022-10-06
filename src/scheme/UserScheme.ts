import * as yup from 'yup';

import { REGEXP } from 'constants/regexp';

export const UserScheme = yup.object().shape({
    email: yup
        .string()
        .email('Please enter correct email')
        .required('Email is required'),
    firstName: yup
        .string()
        .min(2, 'Name is to short')
        .max(20, 'Name is too long')
        .required('First name is required'),
    lastName: yup
        .string()
        .min(2, 'Last name is to short')
        .max(20, 'Last name is too long')
        .required('Last name is required'),
    password: yup
        .string()
        .min(8, 'Minimum 8 symbols')
        .matches(REGEXP.PASSWORD_VALIDATION, 'Incorrect password')
        .required('Password is required'),
    confirm: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords aren't equal"),
    phone: yup
        .string()
        .matches(REGEXP.PHONE_VALIDATION, 'Incorrect phone number')
        .required('Phone number is required'),
});
